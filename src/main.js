document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');


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
})

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
