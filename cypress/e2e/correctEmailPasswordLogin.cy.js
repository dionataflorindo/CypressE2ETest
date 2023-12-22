import CadastraUsuario from '../support/page-objects/registerUser.cy';
import LoginUsusuarioExistente from '../support/page-objects/correctLoginUser.cy';

describe('Realizando o o login do usuario com email e senha corretos',()=>{
    beforeEach('Acessando a url',()=>{
        cy.visit('/');
    })

    it('Deve realizar o login do usuario com senha e email existente',()=>{
        CadastraUsuario.VerificaPagina();
        CadastraUsuario.AcessaCadastroUsuario();
        CadastraUsuario.VerificaTextoPaginaLogin();
        
        LoginUsusuarioExistente.PreencheLoginUsuario();
        
        CadastraUsuario.VerificaUsuarioLogado();
        CadastraUsuario.ExcluirContaUsuario();
        CadastraUsuario.VerificaContaExcluida();

    })
})