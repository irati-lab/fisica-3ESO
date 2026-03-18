/**
 * Funcionalidad JS básica para la web de Física 3º ESO.
 */

// Función para mostrar/ocultar la resolución paso a paso del ejercicio
function toggleSolution(elementId) {
    const solutionBox = document.getElementById(elementId);
    if (!solutionBox) return;

    // Toggle de la clase hidden
    if (solutionBox.classList.contains('hidden')) {
        solutionBox.classList.remove('hidden');
        // También podemos cambiar el texto del botón que llamó a la función
        event.target.textContent = 'Ocultar Resolución';
    } else {
        solutionBox.classList.add('hidden');
        event.target.textContent = 'Ver Resolución Paso a Paso';
    }
}

// Navegación principal entre bloques de la asignatura (Sidebar)
function switchPage(pageId, element) {
    // 1. Quitar 'active' de todos los items del menú
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    // Añadir 'active' al elemento clickado
    element.classList.add('active');

    // 2. Ocultar todos los page-content
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    
    // 3. Mostrar la página seleccionada buscando por ID
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}
