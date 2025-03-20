export function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  activeErrorClass,
}) {
  const form = document.querySelector(formSelector);
  if (!form) return false;

  const inputs = Array.from(form.querySelectorAll(inputSelector));

  function showInputError(inputElement, inputErrorClass, formSelector) {
    inputElement.classList.add(inputErrorClass);

    const inputErrorElement = inputElement.closest(formSelector).querySelector(`.${inputElement.id}-error`);
    if (!inputErrorElement) return;

    let inputErrorMessage = '';
    if (inputElement.hasAttribute('minlength') && inputElement.validity.tooShort) {
      inputErrorMessage = `Минимальное количество символов: ${inputElement.getAttribute('minlength')}, введено: ${inputElement.value.length}`;
    } else {
      inputErrorMessage = inputElement.getAttribute('type') === 'url' ? 'Введите адрес' : 'Вы пропустили поле';
    }

    inputErrorElement.classList.add(activeErrorClass);
    inputErrorElement.textContent = inputErrorMessage;
  }

  function hideInputError(inputElement, inputErrorClass, formSelector) {
    inputElement.classList.remove(inputErrorClass);
    const inputErrorElement = inputElement.closest(formSelector).querySelector(`.${inputElement.id}-error`);
    if (!inputErrorElement) return;
    inputErrorElement.classList.remove(activeErrorClass);
    inputErrorElement.textContent = '';
  }

  function toggleSubmitButton(isValid) {
    submitButton.classList.toggle(inactiveButtonClass, !isValid);
  }

  const submitButton = form.querySelector(submitButtonSelector);
  toggleSubmitButton(false);

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (!input.checkValidity()) {
        showInputError(input, inputErrorClass, formSelector);
      } else {
        hideInputError(input, inputErrorClass, formSelector);
      }

      toggleSubmitButton(form.checkValidity());
    })
  });
}