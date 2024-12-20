import { insertDataIntoTable, updateTable } from "./table.js";
import { saveToStorage } from "./storage.js";
import { showSuccessMessage } from "./messages.js";

export function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('form');
  const nameInput = form.elements['name'];
  const dateInput = form.elements['date'];
  const idInput = form.elements['id'];

  // Inicializando ou recuperando os dados existentes do localStorage
  const data = JSON.parse(localStorage.getItem('person')) || [];
  
  if (nameInput.value !== '' && dateInput.value !== '') {
    if (idInput.value) {
      const itemIndex = data.findIndex(item => item.id === parseInt(idInput.value, 10));

      if (itemIndex !== -1) {
        data[itemIndex].name = nameInput.value;
        data[itemIndex].date = dateInput.value;

        // Salva os dados atualizados no localStorage
        saveToStorage('person', data);

        // Atualiza a tabela com os dados atualizados
        updateTable();

        // Exibe mensagem de sucesso
        showSuccessMessage('Dados atualizados com sucesso!');

        // Limpa os campos do formulário
        nameInput.value = '';
        dateInput.value = '';
        idInput.value = ''; // Limpa o campo id (oculto)
      }
    } else {
      let currentId = data.length + 1;

      const formData = {
        id: currentId,
        name: nameInput.value,
        date: dateInput.value
      }

      data.push(formData);
      saveToStorage('person', data);

      // Exibe mensagem de sucesso
      showSuccessMessage('Dados salvos com sucesso!');
    
      insertDataIntoTable(formData);
      nameInput.value = '';
      dateInput.value = '';
    }    
  }
}