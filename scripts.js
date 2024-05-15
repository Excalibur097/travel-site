const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen? 'fa-solid fa-times': 'fas fa-outdent hamburger');
  /*
  if(isOpen){
    menuBtnIcon.setAttribute('class', 'fa-solid fa-times');
  }else{
    menuBtnIcon.setAttribute('class', 'fas fa-outdent hamburger');
  }*/
});

navLinks.addEventListener('click', ()=>{
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'fas fa-outdent hamburger');
});

const swiper = new Swiper(".swiper",{
  slidesPerView : 'auto',
  spaceBetween : 20
})