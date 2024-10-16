const displayWordResult = () => {
  // Seleciona o botão de busca no DOM
  const buttonSearch = document.querySelector('button');

  // Adiciona um manipulador de eventos para o botão, que será acionado quando o botão for clicado
  buttonSearch.addEventListener('click', (event) => {
    // Impede o comportamento padrão do botão (recarregar a página)
    event.preventDefault();

    // Obtém o elemento de entrada de texto onde o usuário digita a palavra
    const word = document.getElementById('search_input');
    // Obtém o valor digitado pelo usuário e converte para letras minúsculas
    const wordValue = word.value.toLowerCase();

    // Verifica se o usuário digitou alguma palavra
    if (!wordValue) {
      // Exibe um alerta informando que o usuário deve digitar uma palavra
      alert('Nenhuma palavra foi digitada. Por favor, é necessário digitar uma palavra.');
    } else {
      // Separa a palavra em um array de caracteres
      const separateWord = wordValue.split('');
      // Inverte a ordem dos caracteres no array
      let reversedWord = separateWord.reverse();

      // Junta os caracteres invertidos em uma única string
      reversedWord = reversedWord.join('');

      // Verifica se a palavra original e a palavra invertida são iguais (ignorando maiúsculas e minúsculas)
      const isPalindrome = wordValue === reversedWord ? 'é' : 'não é';

      // Exibe um alerta informando se a palavra é ou não um palíndromo
      alert(`A palavra ${wordValue} ${isPalindrome} palíndromo.`);
    }
  });
}

displayWordResult();