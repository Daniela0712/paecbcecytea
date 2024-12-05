// Formulario de inicio de sesión
const formularioLogin = document.getElementById('formulario-login');

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Simula una validación de usuario y contraseña
    if (usuario === 'admin' && contraseña === '1234') {
        window.location.href = 'for.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
