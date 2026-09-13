(() => {
    const createButton = document.querySelector('.request__button');
    const todoCards = document.querySelector('.tasks');
    const inputName = document.querySelector('.request__input-name');
    const inputDescription = document.querySelector('.request__input-description');
    let counter = 1;

    createButton.addEventListener('click', () => {
        const nameValue = inputName.value.trim();
        const descValue = inputDescription.value.trim();

        if (!nameValue) {
            alert('Будь ласка, введіть назву завдання');
            return;
        }
        if (!descValue) {
            alert('Будь ласка, введіть опис завдання');
            return;
        }

        const li = document.createElement('li');
        li.className = 'card';
        li.innerHTML = `
            <input class="card__checkbox" id="card__checkbox-${counter}" type="checkbox">
            <label class="card__checkbox-label" for="card__checkbox-${counter}"></label>
            <span class="card__name">${nameValue}</span>
            <p class="card__description">${descValue}</p>
            <button class="card__button">Видалити</button>
        `;

        todoCards.append(li);

        inputName.value = '';
        inputDescription.value = '';
        counter++;
    });

     todoCards.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

            if (e.target.matches('.card__checkbox')) {
            const name = card.querySelector('.card__name');
            const desc = card.querySelector('.card__description');
            
            if (e.target.checked) {
                name.classList.add('card__name--done');
                desc.classList.add('card__description--done');
            } else {
                name.classList.remove('card__name--done');
                desc.classList.remove('card__description--done');
            }
        }

        if (e.target.matches('.card__button')) {
            const checkbox = card.querySelector('.card__checkbox');
            if (checkbox.checked) {
                card.remove(); 
            } else {
                alert('Виконайте завдання перед тим, як його видалити.');
            }
        }
    });
})();