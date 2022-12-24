const menuToggle = document.querySelector('.toggle');
const navegation = document.querySelector('.nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
}
setTimeout(()=>{
    document.querySelector('.page__loading').remove()
},3000)