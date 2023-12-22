class LoginUsusuarioInexistente {
    PreencheLoginUsuario(){
        cy.get('[data-qa="login-email"]').type('dionata@testemailincorreto.com.br');
        cy.get('[data-qa="login-password"]').type('senhaIncorreta');
        cy.get('[data-qa="login-button"]').click();
    }

    ConfirmaEmailSenhaInexistente(){
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
    }
}

export default new LoginUsusuarioInexistente();