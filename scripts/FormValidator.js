export class FormValidator {
  constructor(data, formElement) {    
    this.form = formElement,
    this.inputs = Array.from(this.form.querySelectorAll(data.inputSelector)),
    this.submitButton = this.form.querySelector(data.submitButtonSelector),
    this.inactiveButtonClass = data.inactiveButtonClass,
    this.inputErrorClass = data.inputErrorClass,
    this.errorClass = data.errorClass    
  }

  _checkinputValidity(inputElement) {
    return inputElement.validity.valid;
  }

  _toggleError(inputElement) {
    const inputError = this.form.querySelector(`.${inputElement.name}-input-error`);
    
    let errorMessage = inputElement.validationMessage;
    inputError.textContent = errorMessage;

    if(!this._checkinputValidity(inputElement)) {
      inputError.classList.add(this.errorClass);
      inputElement.classList.add(this.inputErrorClass);
    } else {
      inputError.classList.remove(this.errorClass);
      inputElement.classList.remove(this.inputErrorClass);
    }
  }

  hasInvalidInput() {
    return this.inputs.some(input => {
      return !this._checkinputValidity(input)
    })
  }

  toggleSubmitButton() {
    this.hasInvalidInput();
    if(this.hasInvalidInput()) {
      this.submitButton.classList.add(this.inactiveButtonClass);
    } else {
      this.submitButton.classList.remove(this.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this.inputs.forEach(input => {
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
