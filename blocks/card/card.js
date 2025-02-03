// функция создания карточки
export function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const html = `
     <div class="gallery__item card">
      <img class="card__image" src="${card.link}" alt="${card.title}">
      <div class="card__description">
        <h2 class="card__title h2">${card.title}</h2>
        <button class="card__like-button button">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z"
              fill="black" />
          </svg>

        </button>
      </div>
      <button class="card__delete-button button">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.45787 17.86C2.51882 18.52 3.06735 19 3.73778 19H14.2615C14.9319 19 15.4804 18.5 15.5414 17.86L16.7197 5.69995H1.27954L2.45787 17.86Z"
            fill="white" />
          <path
            d="M16.7201 1.9H11.5801V1.26C11.5801 0.560001 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.560001 6.44018 1.26V1.9H1.27991C0.568849 1.9 0 2.46 0 3.16C0 3.86001 0.568849 4.42001 1.27991 4.42001H16.7201C17.4312 4.42001 18 3.86001 18 3.16C18 2.46 17.4312 1.9 16.7201 1.9Z"
            fill="white" />
        </svg>

      </button>
    </div>
  `;

  cardElement.innerHTML = html;
  return cardElement;
}