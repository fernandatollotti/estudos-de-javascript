// Obtém o botão de início
let startButton = document.getElementById('btn_start');
// Obtém o parágrafo de conteúdo
let paragraph = document.getElementById('text_content');
// Obtém a seção principal de conteúdo
let mainContent = document.getElementById('main_content');
// Obtém todos os botões de seleção
let buttons = document.querySelectorAll('.btn');
// Obtém a pergunta que aparece na seção principal
let contentQuestion = document.querySelector('h2');
// Obtém o elemento para exibir mensagens de feedback ao usuário
let messageFeedbackUser = document.getElementById('message_feedback');
// Variável para armazenar a carreira escolhida
let careerChosen = null;
// Variável para controlar se a mensagem foi exibida
let isMessageDisplayed  = false;

// Adiciona um evento de clique ao botão de início
startButton.addEventListener('click', () => {
  // Esconde o botão de início e o parágrafo
  startButton.style.display = 'none';
  paragraph.style.display = 'none';
  // Mostra o conteúdo principal
  mainContent.style.display = 'block';
});

// Adiciona eventos de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Atualiza a pergunta para escolher uma tecnologia
    contentQuestion.innerHTML = 'Qual tecnologia você pretende aprender?';

    // Obtém o texto do botão clicado
    let textContentButton = button.textContent;

    switch (textContentButton) {
      case 'Front-End':
        updateButtonTexts('React', 'Vue');
        break;
      case 'Back-End':
        updateButtonTexts('C#', 'Java');
        break;
      case 'React':
      case 'Vue':
      case 'C#':
      case 'Java':
        // Pergunta para decidir a carreira
        contentQuestion.innerHTML = 'Decida agora qual caminho você deseja seguir. Ao fazer sua escolha, você receberá uma breve descrição da carreira escolhida.';
        updateButtonTexts('Carreira Front-End', 'Carreira Back-End', 'Carreira FullStack');
        showFullStackButton();
        break;
      case 'Carreira Front-End':
      case 'Carreira Back-End':
      case 'Carreira FullStack':
        // Armazena a carreira escolhida
        careerChosen = textContentButton;
        contentQuestion.innerHTML = `Você decidiu seguir a ${careerChosen}. Parabéns!`;

        // Procura a carreira correspondente
        let foundCareer = careers.find(career => career.name === button.textContent);

        // Exibe a descrição da carreira
        if (foundCareer && !isMessageDisplayed ) {
          messageFeedbackUser.innerHTML = foundCareer.description;
          isMessageDisplayed  = true;
        } else {
          alert('Você já decidiu sua jornada. Bons estudos :)');
        }
        break;
    }
  });
});

// Função para atualizar os textos dos botões
function updateButtonTexts(...newTexts) {
  buttons.forEach((button, index) => {
    if (index < newTexts.length) 
      button.textContent = newTexts[index];
  });
}

// Função para mostrar o botão de FullStack
function showFullStackButton() {
  const fullStackButton = document.getElementById('btn_full');
  // Exibe o botão FullStack
  fullStackButton.style.display = 'block';
}