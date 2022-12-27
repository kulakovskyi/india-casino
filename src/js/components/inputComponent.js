const inputButton = document.querySelector('.header__search-btn');
const inputText = document.querySelector('.header__search-input');
const inputSearchImage = document.querySelector('.header__search-image');

if(window.innerWidth >1024){
    inputButton.addEventListener('click', (event) => {
        inputText.classList.toggle('_active');
        inputButton.classList.toggle('_active');
        inputSearchImage.classList.toggle('_active');

    })
}



