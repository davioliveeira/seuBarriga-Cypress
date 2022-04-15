/// <reference types='cypress' />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Funcional Test', () => {
    before(() => {
            cy.login('davioliveira','1')
            cy.resetApp()
    });

    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()

    
    });

    it('Deve inserir uma conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta Teste')
        cy.get('.toast-message').should('contain', 'sucesso')

    });  

    it('Deve alterar a conta', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.Fn_XP_ALTERAR('Conta Teste')).click()
        cy.get(loc.CONTAS.NOME).clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_ALTERAR).click();

        cy.get(loc.ALERT.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    });

    it('Validar a não repetição de contas', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SAVE)
        cy.get(loc.ALERT.MESSAGE).should('contain', 'code 400')
        
    });

    it('Deve insrir uma movimentação', () => {
        cy.get(loc.MENU.MOVIMENTAÇÃO).click()

        cy.get(loc.MOVIMENTAÇÃO.DESCRIÇÃO).type('Desc')
        cy.get(loc.MOVIMENTAÇÃO.VALOR).type('123')
        cy.get(loc.MOVIMENTAÇÃO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTAÇÃO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENTAÇÃO.STATUS).click()
        cy.get(loc.MOVIMENTAÇÃO.BTN_SAVE).click()
        cy.get(loc.ALERT.MESSAGE).should('contain', 'sucesso')

    });
    
    it('Deve validar o Saldo de uma conta', () => {
        
        
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.fn_conta_saldo('Conta para saldo')).should('contain','534,00')
        // cy.xpath(loc.SALDO.XP_CONTA_SALDO).should('contain', '123,00')
        
    });

    it('Deve deletar uma movimentação', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.fn_deleta_elemento('Movimentacao para exclusao')).click()
        // cy.get("//span[contains(., 'Desc')]/../../..//i[@class='far fa-trash-alt']").click()
        cy.get(loc.ALERT.MESSAGE).should('contain', 'sucesso')

    });

    });