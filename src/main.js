document.addEventListener("DOMContentLoaded", function(){
    
    const buttons = document.querySelectorAll("[data-tab-button]") // Para selecionar um elemento específico adicionamos o = mais o nome após o data-tab-button. ex.: data-tab-button=em_breve
    const questions = document.querySelectorAll("[data-faq-question]")
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight // Monitora a altura em pixel do elemento selecionado

    window.addEventListener('scroll',function(){
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero) {
            hiddenHeader()
            
            console.log("oculta os elementos")
        } else {
            showHeader()
        }
    })

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
    // Section open/close FAQ
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abreFechaRespostas)
    }

    // Função Hidden header
    function hiddenHeader(){
        const header = document.querySelector('header')
        header.classList.add('header--is-hidden')
    }

    function showHeader(){
        const header = document.querySelector('header')
        header.classList.remove('header--is-hidden')
    }

    function abreFechaRespostas(elemento){
        const classe = 'faq__questions__item--is-open'
        const elementoPai = elemento.target.parentNode

        elementoPai.classList.toggle(classe)
    }


})