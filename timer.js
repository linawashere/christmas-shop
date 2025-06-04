document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelector('.cta__days');
    const hours = document.querySelector('.cta__hours');
    const minutes = document.querySelector('.cta__minutes');
    const seconds = document.querySelector('.cta__seconds');

    const newYear = new Date('2026-01-01T00:00:00Z');

    function updateTime() {
        const now = new Date();

        const differenceInMilliseconds = newYear - now;

        const differenceInSeconds = Math.floor(differenceInMilliseconds / (1000));
        const differenceInMinutes = Math.floor(differenceInSeconds / 60);
        let differenceInHours = Math.floor(differenceInMinutes / 60);
        const differenceInDays = Math.floor(differenceInHours / 24);

        days.innerText = differenceInDays;
        hours.innerText = differenceInHours % 24;
        minutes.innerText = differenceInMinutes % 60;
        seconds.innerText = differenceInSeconds % 60;
    }

    setInterval(updateTime, 1000);
});