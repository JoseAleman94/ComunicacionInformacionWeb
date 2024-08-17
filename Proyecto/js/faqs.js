
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Cerrar todos los demás paneles antes de abrir uno nuevo
            const allContent = document.querySelectorAll('.accordion-content');
            allContent.forEach(c => {
                if (c !== content) {
                    c.style.maxHeight = null;
                }
            });

            // Alternar entre abrir y cerrar el contenido activo
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
