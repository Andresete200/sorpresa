const boton = document.getElementById('mensajeBtn');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.classList.toggle('oculto');
});
