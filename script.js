/*******Feather Icons********** */
feather.replace()
/****************************** */

// MENU BUTTON--MOBILE//
const menuButton = document.querySelector('.navbar__icon--open');
const dropdownList = document.querySelector('.navbar__list');
const mobileBackdrop = document.querySelector('.navbar__mobile-backdrop');
const closeButton = document.querySelector('.navbar__icon--close')

/*navbar__icon--open displayed--mobile*/
/*navbar__icon--close displayed--mobile undisplayed--mobile*/

menuButton.addEventListener('click', ()=>{
    menuButton.classList.add('undisplayed--mobile');
    closeButton.classList.remove('undisplayed--mobile');

    mobileBackdrop.classList.remove('undisplayed--mobile');
    dropdownList.classList.remove('undisplayed--mobile');


});

closeButton.addEventListener('click', ()=>{
    menuButton.classList.remove('undisplayed--mobile');
    closeButton.classList.add('undisplayed--mobile');

    mobileBackdrop.classList.add('undisplayed--mobile');
    dropdownList.classList.add('undisplayed--mobile');
})



// MENU BUTTON--MOBILE//

const navbarItems = document.querySelectorAll('.navbar__item');

navbarItems.forEach(item => item.addEventListener('click', (event)=>{

    console.log(item)
    if(item == navbarItems[0]) return;
    event.preventDefault();

    let dropdown = item.lastElementChild.classList;

    if(dropdown.contains('displayed--mobile')){
        dropdown.remove('displayed--mobile');
        item.firstElementChild.classList.remove('pressed');
        item.firstElementChild.lastElementChild.style.stroke= 'var(--blanco)';

    }else{
        dropdown.add('displayed--mobile');
        item.firstElementChild.classList.add('pressed');
        item.firstElementChild.lastElementChild.style.stroke= 'var(--negro)';

        
    }
}))

//--------Subdropdowns ----------/////
const dropdownItems = document.querySelectorAll('.first-level > .dropdown__list > .dropdown__item');



dropdownItems.forEach(item => item.addEventListener('click', (event)=>{
    event.stopPropagation()
    event.preventDefault();

    let subDropdown = item.lastElementChild.classList;

    if(subDropdown.contains('displayed--mobile')){
        subDropdown.remove('displayed--mobile');
    }else{
        subDropdown.add('displayed--mobile');
    }
}))

/*---------------------------TYNY SLIDER---------------------*/

const mainSlider = tns({
    container: '.main-slider__list',
    items: 1,
    autoplay: true,
    arrowKeys:true,
    controls: false,
    autoplayButtonOutput: false,
    nav:true,
    navPosition: 'bottom',
}) 

let carrusell = tns({
    container: '.courses-carrusell__list',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 40,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 





let carrusell2 = tns({
    container: '.courses-carrusell__list--2',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 40,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 

let carrusell3 = tns({
    container: '.courses-carrusell__list--3',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 40,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 



let carrusell4 = tns({
    container: '.community__list',
    mouseDrag: true,
    items: 1,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    autoplay: true,
    loop: true
})



