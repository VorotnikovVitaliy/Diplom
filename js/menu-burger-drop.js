const menuIcon = document.querySelectorAll('.header-menu-icon');
const menuContent = document.querySelectorAll('.menu-burger-mobile');
const blockScroll = document.querySelector('body');

menuIcon.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if(activeContent.classList.contains('open')) {
        activeContent.classList.remove('open');
        item.classList.remove('open');
        blockScroll.style.overflow = 'visible';
    } else { 
        menuContent.forEach(element => {
            element.classList.remove('open');
        });
        menuIcon.forEach(element => element.classList.remove('open'));
        item.classList.add('open');
        activeContent.classList.add('open');
        blockScroll.style.overflow = 'hidden';
    }

}))