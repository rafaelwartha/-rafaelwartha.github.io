// Aguarde o carregamento completo da página
window.addEventListener('load', function() {
  // Elemento alvo para o nome
  var nameElement = document.querySelector('.name');

  // Texto do nome a ser digitado letra por letra
  var nameText = "I'm Rafael Wartha...";

  // Intervalo entre cada letra do nome (em milissegundos)
  var nameInterval = 100;

  // Variável para controlar a posição atual do nome
  var namePos = 0;

  // Função para adicionar a próxima letra do nome
  function addNameLetter() {
    if (namePos < nameText.length) {
      nameElement.textContent += nameText[namePos];
      namePos++;
      setTimeout(addNameLetter, nameInterval);
    } else {
      // Após escrever o nome, inicia a escrita do texto
      addTextLetter();
    }
  }

  // Função para escrever o texto
  function addTextLetter() {
    // Elemento alvo para o texto
    var textElement = document.querySelector('.p-main');

    // Texto a ser digitado letra por letra
    var text = "I am now a developer specializing in back-end development using PHP. My primary goal is to further improve my skills and knowledge in this field.";

    // Intervalo entre cada letra do texto (em milissegundos)
    var interval = 20;

    // Variável para controlar a posição atual do texto
    var currentPos = 0;

    // Função para adicionar a próxima letra do texto
    function addLetter() {
      if (currentPos < text.length) {
        textElement.textContent += text[currentPos];
        currentPos++;
        setTimeout(addLetter, interval);
      }
    }

    // Iniciar a digitação letra por letra do texto
    addLetter();
  }

  // Iniciar a digitação letra por letra do nome
  addNameLetter();
});


