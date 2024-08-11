document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question')



    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('serie_lista--is-active');
            removeBorder();
            botao.target.classList.add('serie_button--is-active')
            
        })
    }
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})



function abreOuFechaResposta(elemento) {
    const classe = 'faq__question__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeBorder() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('serie_button--is-active')
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i =0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('serie_lista--is-active');
    }
}
