// Formulario con tres preguntas
const formularioPreguntas = document.getElementById('formulario');

formularioPreguntas.addEventListener('submit', (e) => {
    e.preventDefault();
    const pregunta1 = formularioPreguntas.elements['pregunta1'].value;
    const pregunta2 = formularioPreguntas.elements['pregunta2'].value;
    const pregunta3 = formularioPreguntas.elements['pregunta3'].value;

    // Muestra los resultados en la consola
    console.log('Pregunta 1:', pregunta1);
    console.log('Pregunta 2:', pregunta2);
    console.log('Pregunta 3:', pregunta3);
});