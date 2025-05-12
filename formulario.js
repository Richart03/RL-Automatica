document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Validación adicional si es necesaria
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    if (!nombre || !email || !servicio || !mensaje) {
    alert('Por favor complete todos los campos');
    e.preventDefault();
    return;
    }
    console.log('Formulario enviado:', { nombre, email, servicio, mensaje }); }); 