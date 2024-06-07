
// Create a player class that can have an array of cards
class Player {
    constructor(name){
        this.name = name;
        this.playersHand = [];
    }
    addCards(card){
        this.playersHand.push(card);
    }

}
// Create a class for cards that holds a suite and holds a value
class Card{
    constructor(value,suite){
        this.value = value;
        this.suite = suite;
    }
}
class DeckOFCards {
    constructor(){
        this.cards = [];;
    }
    // this method creates the deck with 14 cards for each suite
    createDeck(){
        for (let i = 1; i <= 13; i++){
            for (let j = 0; j < 4; j++){
                this.cards.push(new Card(i, ['Hearts', 'Diamonds', 'Clubs', 'Spades'][j]));
            }
            
        }
    }
    // this shuffles the deck using math random number and swaps the card at i and j and continues until i === 0 
    // I belive this is the fisher-yates technic or at least that is what i tried to do
    shuffleDeck(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    // this will deal a player cards from the deck. takes a player and the number of cards you want the player to have
    dealCards(numCards, player) {
        for (let i = 0; i < numCards; i++) {
            player.addCards(this.cards.shift());
        }
    }
}

let deck = new DeckOFCards();
deck.createDeck();
deck.shuffleDeck();
let player1 = new Player("Fartymatootie");
let player2 = new Player("Steve");
deck.dealCards(26,player1);
deck.dealCards(26,player2);


// This is the component that will be playing the game it should compare each card of the players until one wins
let play = (player1Name,array1, player2Name, array2) => {
    let player1score = 0;
    let player2score = 0;
    for (let i = 0; i < 26; i++) {
        if(array1[i].value === array2[i].value){

        }else if(array1[i].value>array2[i].value){
            player1score++;
        }else{
            player2score++;
        }    
    }
    let winner = (x,y) => x > y ? player1Name : player2Name 
    return winner(player1score,player2score)
}
// This displays who the winner is
console.log(`${play(player1.name,player1.playersHand,player2.name,player2.playersHand)} is the Winner`);