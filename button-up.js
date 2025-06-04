document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.button-up');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300 && window.innerWidth <= 768) {
            circle.style.opacity = '1';
        } else {
            circle.style.opacity = '0';
        }
    })

    function scrollUp() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    circle.addEventListener('click', scrollUp);
});