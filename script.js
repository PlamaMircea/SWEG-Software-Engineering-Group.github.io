// seleziona tutti gli accordion-header
const accordionHeaders = document.querySelectorAll('.accordion-header');

// aggiungi un event listener a ciascuno
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    // toggle della visualizzazione di content
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
    // aggiungi o rimuovi la classe accordion-active all'header
    header.classList.toggle('accordion-content');
  });
});
