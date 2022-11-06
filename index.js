const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
const title = document.querySelector('.title')
const menu_link = document.querySelectorAll('.menuItem')
menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    title.classList.toggle('title-is-active');
   
})