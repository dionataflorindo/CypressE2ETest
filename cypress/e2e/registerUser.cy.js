import CadastraUsuario from '../support/page-objects/registerUser.cy'

describe('Realizando o cadastro de um usuario ',()=>{

  beforeEach('Acessando url',()=>{
    cy.visit('/')
  });
  
  it('Deve realizar o cadastro do usuário',()=>{
    CadastraUsuario.AcessaCadastroUsuario();
    CadastraUsuario.VerificaTextoPaginaLogin();
    CadastraUsuario.PreencheNomeEemail();
    CadastraUsuario.BtncadastrarUsuario();
    CadastraUsuario.PreencheCadastro();
    CadastraUsuario.CriarContaBtnClick();
    CadastraUsuario.VerificaContaCriada();
    CadastraUsuario.VerificaUsuarioLogado();
    CadastraUsuario.ExcluirContaUsuario();
    CadastraUsuario.VerificaContaExcluida();
  });

})

