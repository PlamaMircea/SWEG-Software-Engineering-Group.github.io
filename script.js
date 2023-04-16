    document.querySelector('.dropdown-link').addEventListener('click', function() {
        var dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });
    
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    
    for (var i = 0; i < accordionHeaders.length; i++) {
        accordionHeaders[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var accordionContent = this.nextElementSibling;
        
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
        } else {
            accordionContent.style.display = 'block';
        }
    });
}