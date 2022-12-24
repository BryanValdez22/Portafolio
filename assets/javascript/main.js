const menuToggle = document.querySelector('.toggle');
const navegation = document.querySelector('.nav');
const blob = document.querySelector('.blob');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
    blob.classList.toggle('active')
}