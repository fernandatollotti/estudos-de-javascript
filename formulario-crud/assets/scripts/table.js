import { getFromStorage, saveToStorage } from "./storage.js";

export function insertDataIntoTable(data) {
  const tableBody = document.querySelector('.table__body');
  const date = new Date(data.date);
  const formattedDate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  //Remove a linha "Nenhum aniversariantes cadastrado", se presente
  const noDataRow = document.querySelector('.empty-message');

  if (noDataRow)
    noDataRow.remove();

  const newRow = document.createElement('tr');
  newRow.classList.add('table__row');

  newRow.innerHTML = `
    <td class="table__cell">${data.id}</td>
    <td class="table__cell">${data.name}</td>
    <td class="table__cell">${formattedDate}</td>
    <td class="table__cell">
      <button class="btn btn--edit" onclick="editRow(${data.id})">Editar</button>
      <button class="btn btn--delete" onclick="deleteRow(${data.id})">Deletar</button>
    </td>
  `;

  tableBody.appendChild(newRow);
}

export function editRow(id) {
  const data = getFromStorage('person');
  const item = data.find(item => item.id === id);

  const form = document.getElementById('form');
  const nameInput = form.elements['name'];
  const dateInput = form.elements['date'];
  const idInput = form.elements['id'];

  if (item) {
    nameInput.value = item.name;
    dateInput.value = item.date;
    idInput.value = item.id
  }
}

export function deleteRow(id) {
  let data = getFromStorage('person');
  data = data.filter(item => item.id !== id);

  // Reorganiza os IDs para manter a sequência
  data = data.map((item, index) => {
    item.id = index + 1;
    return item;
  });

  saveToStorage('person', data);

  // Atualiza a tabela após a exclusão
  updateTable();
}

export function updateTable() {
  const tableBody = document.querySelector('.table__body');
  tableBody.innerHTML = '';

  const data = getFromStorage('person');

  if (data.length === 0) {
    const newRow = document.createElement('tr');
    newRow.classList.add('table__row');
    newRow.classList.add('empty-message');
    newRow.innerHTML = `<td colspan="4" class="table__cell">Nenhum aniversariante cadastrado</td>`;

    tableBody.appendChild(newRow);
  } else {
    data.forEach(item => insertDataIntoTable(item));
  }
}

// Disponibiliza a função para o escopo global
window.deleteRow = deleteRow;
window.editRow = editRow;