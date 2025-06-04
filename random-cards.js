document.addEventListener('DOMContentLoaded', function () {
    fetch('gifts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const cardsContainer = document.querySelector(".best-gifts__cards");
            if (!cardsContainer) {
                console.error("Element with class '.best-gifts__cards' not found in the DOM.");
                return;
            }

            cardsContainer.innerHTML = '';
            
            const randomIndexes = [];
            while (randomIndexes.length < 4 && randomIndexes.length < data.length) {
                const randomIndex = Math.floor(Math.random() * data.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }

            randomIndexes.forEach(index => {
                const item = data[index];
                const card = document.createElement("div");
                card.className = "gifts__cards-item";

                const img = document.createElement('img');
                img.className = 'gifts__cards-image';
                img.src = item?.image || 'img/default.svg';
                img.alt = item?.name || 'Gift illustration';

                const descr = document.createElement('div');
                descr.className = 'gifts__cards-text';
                descr.innerHTML = `
                    <h4 class="gifts__cards-title">${item?.category || 'Unknown'}</h4>
                    <h3 class="gifts__cards-header">${item?.name || 'Unknown'}</h3>
                    <p class="gifts__cards-descr">${item?.description || 'No description'}</p>
                `;

                card.appendChild(img);
                card.appendChild(descr);

                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});