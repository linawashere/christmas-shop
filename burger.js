document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.burger-cont__burger');
    const item1 = document.querySelector('.item1');
    const item2 = document.querySelector('.item2');
    const menu = document.querySelector('.burger__menu');

    function closeMenu() {
        document.body.style.overflow = '';
        item1.style.transform = 'rotate(0deg)';
        item2.style.transform = 'rotate(0deg)';
        item1.style.position = '';
        item2.style.position = '';
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(100%)';
        menu.style.transition = 'all 0.5s ease';
        btn.classList.remove('active-btn');
    }

    function btnClick() {
        btn.classList.toggle('active-btn');

        if (btn.classList.contains('active-btn')) {
            document.body.style.overflow = 'hidden';
            item1.style.transform = 'rotate(45deg)';
            item1.style.position = 'absolute';
            item1.style.left = '10px';
            item2.style.transform = 'rotate(-45deg)';
            item2.style.position = 'absolute';
            item2.style.left = '10px';
            menu.style.opacity = '1';
            menu.style.transform = 'translateX(0%)';
        } else {
            closeMenu(); 
        }
    }

    btn.addEventListener('click', btnClick);

    const btnMenu = document.querySelector(".header__item");
    btnMenu.addEventListener('click', closeMenu);

    const burgerLinks = document.querySelectorAll('.burger__link');
    burgerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});