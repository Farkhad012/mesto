export const modals = Array.from(document.querySelectorAll('.modal'));
export const modalCloseButtons = Array.from(document.querySelectorAll('.modal__close-button'));
export const modalEdit = document.querySelector('.modal-edit');
export const modalAdd = document.querySelector('.modal-add');

function enableScroll() {
  document.body.style.overflow = 'visible';
}

modalCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    modals.forEach(modal => {
      if (modal.classList.contains('opened')) {
        modal.classList.remove('opened')
        enableScroll()
      }
    });
  })
});
