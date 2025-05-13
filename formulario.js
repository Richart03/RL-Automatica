document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado correctamente')
    this.submit();
     }); 
