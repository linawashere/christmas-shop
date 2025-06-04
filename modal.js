document.addEventListener('DOMContentLoaded', function () {

    fetch('gifts.json')
        .then(response => response.json())
        .then(data => {
            createCards(data); 
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));

    function createCards(data){
        const container = document.querySelector('.gifts-modal__descr');

        data.forEach(element => {
            const descr = document.createElement('div');
            descr.className = 'gifts-modal__descr-top';

            const grade = document.createElement('div');
            grade.className = 'gifts-modal__descr-bottom';

            descr.innerHTML = `
            <h4 class="gifts__cards-title">${element.category}</h4>
            <h3 class="gifts__cards-header">${element.name}</h3>
            <p class="gifts__cards-descr">${element.description}</p>
            `;
            grade.innerHTML = `
            <h4 class="gifts__bottom-title">Adds superpowers to:</h4>
            <div class="gifts__cards-superpowers">
            <p>Live</p>
            <p>${element.superpowers.live}</p>

            </div>
            `
            container.appendChild(descr);
            container.appendChild(grade);
        });
    }
});