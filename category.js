document.addEventListener('DOMContentLoaded', function () {
    let allData = [];

    fetch('gifts.json')
        .then(response => response.json())
        .then(data => {
            allData = data;
            createCards(allData);

            const tabs = document.querySelectorAll(".gifts__tabs-item");
            tabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    const categoryText = this.textContent.trim();
                    let category = '';
                    
                    if (categoryText === 'ALL') category = 'ALL';
                    if (categoryText === 'FOR WORK') category = 'For Work';
                    if (categoryText === 'FOR HEALTH') category = 'For Health';
                    if (categoryText === 'FOR HARMONY') category = 'For Harmony';
                    
                    btnClick(allData, category);
                    tabs.forEach(item => item.classList.remove('active-tab'));
                    this.classList.add('active-tab');
                });
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));

    function btnClick(data, category) {
        if (category === 'ALL') {
            createCards(data);
        } else {
            const filteredData = data.filter(item => 
                item.category.toLowerCase() === category.toLowerCase()
            );
            createCards(filteredData);
        }
    }

    function createCards(cards) {
        const cardsContainer = document.querySelector(".gifts__cards");
        if (!cardsContainer) {
            console.error("Cards container not found!");
            return;
        }
        
        cardsContainer.innerHTML = '';

        if (!cards || cards.length === 0) {
            cardsContainer.innerHTML = '<p>No gifts found in this category.</p>';
            return;
        }

        cards.forEach(element => {
            const card = document.createElement("div");
            card.className = "gifts__cards-item";
            card.innerHTML = `
                <img class="gifts__cards-image" src="${element.image || 'default.jpg'}" alt="${element.name || 'Gift'}">
                <div class="gifts__cards-text">
                    <h4 class="gifts__cards-title">${element.category || 'Unknown'}</h4>
                    <h3 class="gifts__cards-header">${element.name || 'Unknown'}</h3>
                </div>`;
                
            cardsContainer.appendChild(card);
        });
    }
});