class CadastraUsuario {

    VerificaPagina(){
        cy.get('.header-middle > .container').should('be.visible');
    }

    AcessaCadastroUsuario(){
        cy.get('.shop-menu > .nav > :nth-child(4) >').click();
    }

    VerificaTexto(){
        cy.get('.signup-form > h2').should('be.visible');
    }

    PreencheNomeEemail(){
        cy.get('[data-qa="signup-name"]').type('dionata');
        cy.get('[data-qa="signup-email"]').type('dionata@teste5.com.br');
    }

    BtncadastrarUsuario(){
        cy.get('[data-qa="signup-button"]').click();
    }

    PreencheCadastro(){
        cy.get('#id_gender1').check();

        cy.get('[data-qa="password"]').type('senhaTeste123');

        cy.get('[data-qa="days"]').then(($option)=>{
            if($option.length > 0){
                cy.get('[data-qa="days"]').select('22');
            }else{
                cy.log('Dia inexistente');
            }
        });

        cy.get('[data-qa="months"]').then(($option)=>{
            if($option.length > 0){
                cy.get('[data-qa="months"]').select('June');
            }else{
                cy.log('Mês inexistente');
            }
        });

        cy.get('[data-qa="years"]').then(($option)=>{
            if($option.length > 0){
                cy.get('[data-qa="years"]').select('1993');
            }else{
                cy.log('Ano inexistente');
            }
        });

        cy.get('#newsletter').check();

        cy.get('#optin').check();

        cy.get('[data-qa="first_name"]').type('Dionata');

        cy.get('[data-qa="last_name"]').type('Correa');

        cy.get('[data-qa="company"]').type('QA Solutions Technologics');

        cy.get('[data-qa="address"]').type('Av. Teste');

        cy.get('[data-qa="address2"]').type('Av. Teste 2');

        cy.get('[data-qa="country"]').then(($option)=>{
            if($option.length > 0){
                cy.get('[data-qa="country"]').select('United States');
            }else{
                cy.log('País inexistente');
            }
        });

        cy.get('[data-qa="state"]').type('Flórida');

        cy.get('[data-qa="city"]').type('Miami');

        cy.get('[data-qa="zipcode"]').type('+1');

        cy.get('[data-qa="mobile_number"]').type('202-555-0120');
    }

    CriarContaBtnClick(){
        cy.get('[data-qa="create-account"]').click()
    }

    VerificaContaCriada(){
        cy.get('b').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }

    VerificaUsuarioLogado(){
        cy.get(':nth-child(10) > a').should('be.visible');
    }
    
    ExcluirContaUsuario(){
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    }

    VerificaContaExcluida(){
        cy.get('b').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }
}

export default new CadastraUsuario();