export const modals = document.querySelectorAll('.modal')
export const modalEditProfile = document.querySelector('#modal-edit-profile');
export const modalAddContent = document.querySelector('#modal-add-content');
export const modalImgView = document.querySelector('#modal-img-view');
export const modalCloseButton = document.querySelector('button.modal__close-button');

export function disableScroll() {
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.overflow = 'visible';
}

export function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains('opened')) {
      modal.classList.remove('opened')
    }

    if(modal.querySelector('.modal__content').classList.contains('opened')) {
      modal.querySelector('.modal__content').classList.remove('opened')
    }
  })

  enableScroll();
}

export function openModal(modal) {
  modal.classList.add('opened');
  const modalContent = modal.querySelector('.modal__content');
  modalContent.classList.add('opened');


  disableScroll()
}

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('modal__close-button') ||
    e.target.classList.contains('modal')
  ) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    closeModal();
  }
})

