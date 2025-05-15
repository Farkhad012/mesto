export function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const form = document.querySelector(formSelector);
  const inputs = form.querySelectorAll(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector);

  console.log(`валидация ${form.name} активна`);

  function checkValidity(inputElement) {
    console.log(inputElement.validity);
    return inputElement.validity.valid;
  }

  function showError(inputElement) {
    const inputError = form.querySelector(`.${inputElement.name}-input-error`);
    console.log(inputError);
    inputError.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);
  }

  function hideError(inputElement) {
    const inputError = form.querySelector(`.${inputElement.name}-input-error`);
    inputError.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);
  }

  function disableSubmit() {
    submitButton.classList.add(inactiveButtonClass);
  }

  function enableSubmit() {
    submitButton.classList.remove(inactiveButtonClass);
  }

  function setErrorMessage(inputElement) {
    const inputError = form.querySelector(`.${inputElement.name}-input-error`);
    let errorMessage = "";
    if (inputElement.validity.valueMissing) {
      errorMessage = 'Вы пропустили это поле';
    } else if (inputElement.validity.tooShort) {
      errorMessage = `Количество символов должно быть не менее ${inputElement.minLength}. Введено ${inputElement.value.length}`;
    } else if (inputElement.type === 'url') {
      errorMessage = "Введите корректный url";
    }

    inputError.textContent = errorMessage;
  }

  inputs.forEach((input) => {
    if (!checkValidity(input)) {
      disableSubmit();
    }

    input.addEventListener("input", () => {
      if (!checkValidity(input)) {
        showError(input);
        disableSubmit();
        setErrorMessage(input);
        input.type;
      } else {
        hideError(input);
        enableSubmit();
      }
    });
  });
}
