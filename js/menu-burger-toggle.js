document.querySelectorAll('.header-menu-icon').forEach((el) => {
    el.addEventListener('click', (e) => {

        
        e.currentTarget.classList.toggle('open');
    })
})