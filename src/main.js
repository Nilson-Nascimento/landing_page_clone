document.addEventListener("DOMContentLoaded", function(){
    
    const buttons = document.querySelectorAll("[data-tab-button]") // Para selecionar um elemento específico adicionamos o = mais o nome após o data-tab-button. ex.: data-tab-button=em_breve
    
    // alert("carregou!" + buttons)
    
    const tabContainer = document.querySelectorAll("[data-tab-id]")

    for (let i = 0 ; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){

            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)

            escondeTodasAbas()
            aba.classList.add('show__list--is-active')
            removeBotaoAtivo()

            botao.target.classList.add('show__tabs__button--is-active')

            // alert("i = " + i + " Button = " + buttons.length)
            console.log("abaAlvo = " + abaAlvo)
            console.log('aba = ' + aba.length)
            console.log(botao.target.dataset.tabButton)
        })
    }

    function removeBotaoAtivo(){
        const buttons = document.querySelectorAll('[data-tab-button]')

        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('show__tabs__button--is-active')
        }
    }

    function escondeTodasAbas(){
        const tabsContainer = document.querySelectorAll('[data-tab-id]')

        console.log('tabsContainer = ' + tabsContainer)

        for (i = 0; i < tabsContainer.length; i++){
            tabsContainer[i].classList.remove('show__list--is-active')
        }
    }


})