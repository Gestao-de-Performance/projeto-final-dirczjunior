document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de acordeão
    const accordions = document.querySelectorAll('.accordion-button');
    
    // Adiciona o evento de clique para cada botão
    accordions.forEach(function(button) {
      button.addEventListener('click', function() {
        // Obtém o conteúdo associado ao botão clicado
        const accordionBody = this.nextElementSibling;
        
        // Se o conteúdo já estiver visível, recolhe ele
        if (accordionBody.classList.contains('show')) {
          accordionBody.classList.remove('show');
        } else {
          // Caso contrário, expande o conteúdo
          accordionBody.classList.add('show');
        }
      });
    });
  });