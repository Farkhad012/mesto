export class FormValidator {
  constructor(data, formElement) {    
    this._form = formElement,
    this._inputs = Array.from(this._form.querySelectorAll(data.inputSelector)),
    this._submitButton = this._form.querySelector(data.submitButtonSelector),
    this._inactiveButtonClass = data.inactiveButtonClass,
    this._inputErrorClass = data.inputErrorClass,
    this._errorClass = data.errorClass    
  }

  _checkinputValidity(inputElement) {
    return inputElement.validity.valid;
  }

  _toggleError(inputElement) {
    const inputError = this._form.querySelector(`.${inputElement.name}-input-error`);
    
    let errorMessage = inputElement.validationMessage;
    inputError.textContent = errorMessage;

    if(!this._checkinputValidity(inputElement)) {
      inputError.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    } else {
      inputError.classList.remove(this._errorClass);
      inputElement.classList.remove(this._inputErrorClass);
    }
  }

  hasInvalidInput() {
    return this._inputs.some(input => {
      return !this._checkinputValidity(input)
    })
  }

  toggleSubmitButton() {
    if(this.hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        
        this._toggleError(input);
        this.toggleSubmitButton();
      })
    })
  }

  enableValidation() {
    this._setEventListeners();
    this.toggleSubmitButton();
  }
}
