var expect = chai.expect;
describe('WarGame',function(){
    describe('add player',function(){
        it('should add player',function(){
            var player = new Player('steve');
            expect(player).to.equal('steve')
        })
    })
})