
describe('Teste de API', ()=>{
    it('Buscando todos os produstos da lista',()=>{
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList',
        }).then((response)=>{
            expect(response.status).to.equal(200);
        })
    })
})