export const burger = document.getElementById('burger');
export function navbarClick(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
export let sliderBlock1 = document.querySelector('.slider_block1 .list');
export let items = document.querySelectorAll('.slider_block1 .list .item');
export let next = document.getElementById('next');
export let prev = document.getElementById('prev');
export let dots = document.querySelectorAll('.slider_block1 .dots li');
export let lengthItems = items.length - 1;
export let activeBlock1 = 0;

export function nextToggle(){
    activeBlock1 = activeBlock1 + 1 <= lengthItems ? activeBlock1 + 1 : 0;
    reloadSlider();
}
export function prevToggle(){
    activeBlock1 = activeBlock1 - 1 >= 0 ? activeBlock1 - 1 : lengthItems;
    reloadSlider();
}
export let refreshInterval = setInterval(()=> {next.click()}, 5000);
export function reloadSlider(){
    sliderBlock1.style.left = -items[activeBlock1].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider_block1 .dots li.activeBlock1');
    last_active_dot.classList.remove('activeBlock1');
    dots[activeBlock1].classList.add('activeBlock1');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    activeBlock1 = key;
    reloadSlider();
    })
})

export const buttonSlider = document.querySelectorAll('.button_slider');
export const formSection = document.getElementById('form-section2');
export const navBtn = document.querySelector('.nav_btn');

