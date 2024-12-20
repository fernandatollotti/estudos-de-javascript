export function showErrorMessage(inputElement, message) {
  const formControl = inputElement.parentElement;
  const errorMessageElement  = formControl.querySelector('.error-message');

  errorMessageElement .textContent = message;
  errorMessageElement .classList.add('error--active');
}

export function clearErrorMessage() {
  const errorMessageElements = document.querySelectorAll('.error-message');

  errorMessageElements.forEach(span => {
    span.textContent = '';
    span.classList.remove('error--active');
  })
}