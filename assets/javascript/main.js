const menuToggle = document.querySelector('.toggle');
const navegation = document.querySelector('.nav');

// Toggle para barra de navegacion
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
}
setTimeout(()=>{
    document.querySelector('.page__loading').remove()
},3000)

// Send Mail
window.onload = function() {
    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();

        this.name = document.querySelector('#name').value,
        this.last = document.querySelector('#last').value,
        this.email = document.querySelector('#email').value,
        this.message = document.querySelector('#message').value

        emailjs.sendForm('service_x9pnt13','template_nk4mbdo', this)
        .then(function(){
            alert("mensaje enviado");
        }, function(error){
            console.error('error...', error);
        });
        document.querySelector('form').reset();
    })
}
