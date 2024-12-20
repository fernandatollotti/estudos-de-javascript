export function validateName(name) {
  const trimmedName  = name.trim();

  if (trimmedName  === '')
    return 'Nome do aniversariante é obrigatório';

  if (trimmedName .length < 3)
    return 'O nome deve ter pelo menos 3 caracteres';

  if (trimmedName.length > 120) 
    return 'O nome deve ter no máximo 120 caracteres';
}

export function validateDate(date) {
  if (date === '')
    return 'A data de nascimento é obrigatória';
}

export function removeInvalidCharacters(str) {
  const pattern = /[^a-zA-Z\sáéíóúãõ]/g;
  const result = str.replace(pattern, '');

  return result
}