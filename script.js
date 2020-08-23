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

    if(item == navbarItems[0]) return;
    event.preventDefault();

    let dropdown = item.lastElementChild.classList;

    if(dropdown.contains('displayed--mobile')){
        dropdown.remove('displayed--mobile');

    }else{
        dropdown.add('displayed--mobile');
    }
}))