class LoginUsusuarioExistente {
    PreencheLoginUsuario(){
        cy.get('[data-qa="login-email"]').type('dionata@teste.com.br');
        cy.get('[data-qa="login-password"]').type('senhaTeste123');
        cy.get('[data-qa="login-button"]').click();
        //teste
    }
}

export default new LoginUsusuarioExistente();