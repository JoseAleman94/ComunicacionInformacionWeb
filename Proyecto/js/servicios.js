function showContent(tabId) {
    // Oculta todos los contenidos de las pestañas
    const tabs = document.querySelectorAll('.content-tab');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Muestra la primera pestaña por defecto al cargar la página
  document.addEventListener('DOMContentLoaded', function () {
    showContent('tab1');
  });