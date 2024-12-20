import { validateDate, validateName, removeInvalidCharacters } from "./validate.js";
import { showErrorMessage, clearErrorMessage } from "./messages.js";
import { handleFormSubmit } from "./form.js";
import { updateTable } from "./table.js";

const form = document.getElementById('form');
const nameInput = form.elements['name'];
const dateInput = form.elements['date'];

function validateForm(event) {
  event.preventDefault();

  const nameError = validateName(nameInput.value);
  const dateError = validateDate(dateInput.value);

  if (nameError) {
    showErrorMessage(nameInput, nameError);
  }

  if (dateError) {
    showErrorMessage(dateInput, dateError);
  }

  setTimeout(clearErrorMessage, 2000);
}

function loadTable() {
  updateTable();
}

nameInput.addEventListener('keyup', () => {
  nameInput.value = removeInvalidCharacters(nameInput.value);
});

form.addEventListener('submit', validateForm);

form.addEventListener('submit', handleFormSubmit);

window.addEventListener('load', loadTable);