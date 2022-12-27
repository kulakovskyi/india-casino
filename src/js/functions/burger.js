const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const itemMenuSub = document.querySelectorAll('.menu__item-sub_list');

if(window.innerWidth <= 1024){
  itemMenuSub.forEach(item => {
    let menuSub = item.querySelector('.menu__item-list');
    item.addEventListener('click', ()=>{
      menuSub.classList.toggle('_open')

    })
  })
}
