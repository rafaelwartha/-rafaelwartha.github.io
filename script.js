// Aguarde o carregamento completo da página
window.addEventListener('load', function() {
    // Elemento alvo
    var targetElement = document.querySelector('.name');
    
    // Texto a ser digitado letra por letra
    var text = "I'm Rafael Wartha...";
    
    // Intervalo entre cada letra (em milissegundos)
    var interval = 100;
  
    // Variável para controlar a posição atual do texto
    var currentPos = 0;
  
    // Função para adicionar a próxima letra
    function addLetter() {
      if (currentPos < text.length) {
        targetElement.textContent += text[currentPos];
        currentPos++;
        setTimeout(addLetter, interval);
      }
    }
  
    // Iniciar a digitação letra por letra
    addLetter();
  });

  window.addEventListener('load', function() {
    // Elemento alvo
    var targetElement = document.querySelector('.p-main');
    
    // Texto a ser digitado letra por letra
    var text = "Currently, I am a student studying IT with a specific focus on back-end development using PHP. My main goal is to enhance my skills and knowledge in this field.";
    
    // Intervalo entre cada letra (em milissegundos)
    var interval = 20;
  
    // Variável para controlar a posição atual do texto
    var currentPos = 0;
  
    // Função para adicionar a próxima letra
    function addLetter() {
      if (currentPos < text.length) {
        targetElement.textContent += text[currentPos];
        currentPos++;
        setTimeout(addLetter, interval);
      }
    }
  
    // Iniciar a digitação letra por letra
    addLetter();
  });
  
  