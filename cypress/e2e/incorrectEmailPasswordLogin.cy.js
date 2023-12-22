import CadastraUsuario from '../support/page-objects/registerUser.cy';
import LoginUsusuarioInexistente from '../support/page-objects/incorrectLoginUser.cy';

describe('Realizando o o login do usuario com email e senha corretos',()=>{
    beforeEach('Acessando a url',()=>{
        cy.visit('/');
    })

    it('Deve realizar o login do usuario com senha e email existente',()=>{
        CadastraUsuario.VerificaPagina();
        CadastraUsuario.AcessaCadastroUsuario();
        CadastraUsuario.VerificaTextoPaginaLogin();
        
        LoginUsusuarioInexistente.PreencheLoginUsuario();
        
        LoginUsusuarioInexistente.ConfirmaEmailSenhaInexistente();
        

    })
})