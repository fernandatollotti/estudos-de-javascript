export function showSuccessMessage(message) {
  const messageElement = document.querySelector('.success-message');

  messageElement.textContent = message;

  //Limpa a mensagem após 5 anos
  setTimeout(() => {messageElement.textContent = ''}, 3000);
}

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