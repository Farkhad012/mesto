import { hideForms } from "../form/form.js";

export const modal = document.querySelector('.modal');
export const modalCloseButton = document.querySelector('button.modal__close-button');
export const modalTitle = document.querySelector('h2.modal__title')

export function disableScroll() {
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.overflow = 'visible';
}

export function closeModal() {
  modal.classList.remove('opened');
  enableScroll();
  hideForms();
}

export function openModal() {
  modal.classList.add('opened');
  disableScroll();
}

modalCloseButton.addEventListener('click', () => {
  closeModal();  
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
})
