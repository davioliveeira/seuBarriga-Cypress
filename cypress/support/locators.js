const locators= {
    LOGIN: {
        USER: '[data-test=email]',
        PASSOWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU:{ 
        HOME:'[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET:'[href="/reset"]',
        MOVIMENTAÇÃO: '[data-test=menu-movimentacao] > .fas',
        EXTRATO: '[data-test=menu-extrato] > .fas'
    },
    CONTAS: {
            NOME:'[data-test=nome]',
            BTN_SAVE:'.btn',
            BTN_ALTERAR: '.btn',
            Fn_XP_ALTERAR: nomeConta => `//table//td[contains(., '${nomeConta}')]/..//i[@class='far fa-edit']`
        },
    MOVIMENTAÇÃO: {
        CONTA: '[data-test=conta]',
        DESCRIÇÃO:'[data-test=descricao] ',
        VALOR:' [data-test=valor]',
        INTERESSADO:'[data-test=envolvido]',
        STATUS: '[data-test=status]',
        BTN_SAVE: '.btn-primary',
       
    },
    ALERT: {
        MESSAGE:'.toast-message'
    },
    SALDO: {
        XP_CONTA_SALDO: "//td[contains(., 'Conta alterada')]/../td[2]",
        fn_conta_saldo: nome => `//td[contains(., '${nome}')]/../td[2]`  
    },
    EXTRATO: {

        fn_deleta_elemento: (conta) => `//span[contains(., '${conta}')]/../../..//i[@class="far fa-trash-alt"]`
    }
}

export default locators;