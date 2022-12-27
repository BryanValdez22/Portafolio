const menuToggle = document.querySelector('.toggle');
const navegation = document.querySelector('.nav');
const info = document.querySelector('.info');
const back = document.querySelector('.back-button');

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
// GSAP animaciones
let t1 = gsap.timeline({ paused:true, reversed:true });
let t2 = gsap.timeline({ paused:true, reversed:true });

info.addEventListener("click", (e) => {
    t2.play();
});

back.addEventListener("click", (e) => {
    t2.reversed(e);
});

t1.play();

t1.to(".calculator",{
    ease: "elastic.out(1, .8)",
    top: "10%",
    rotate: "0",
    duration: 1.5,
});

t1.to(
    ".github",
    {
        ease: "elastic.out(1, .8)",
        left: "20",
        duration: 1.5,
    },
    0.3
);

t1.to(
    ".link",
    {
        ease: "elastic.out(1, .8)",
        right: "20",
        duration: 1.5,
    },
    0.3
);

t1.to(
    "h1",
    {
        ease: "elastic.out(1, .8)",
        bottom: "38%",
        duration: 1.5,
    },
    0.3
);

t1.to(
    "p",
    {
        ease: "elastic.out(1, .8)",
        bottom: "18%",
        duration: 1.5,
    },
    0.4
);

t1.from(
    ".info",
    {
        ease: "elastic.out(1, .8)",
        scale: 0,
        duration: 1.5,
    },
    0.6
);

t2.to(".calculator",{
    ease: "elastic.out(1, .8)",
    top: "-60%",
    duration: 2,
});

t2.to(
    ".github",
    {
        ease: "power1.inOut",
        left: "-30",
    },
    0
);

t2.to(
    ".link",
    {
        ease: "power1.inOut",
        right: "-30",
    },
    0
);

t2.to(
    "h1",
    {
        ease: "elastic.out(.5, .8)",
        bottom: "-38%",
    },
    0
);

t2.to(
    "p",
    {
        ease: "elastic.out(.5, .8)",
        bottom: "-18%",
    },
    0
);

t2.to(
    ".info i", 
    {
        ease: "power.inOut",
        rotate: "360",
        scale: 0,
        duration: 0.3,
    },
    0
);

t2.to(
    ".info", 
    {
        ease: "power.inOut",
        scale: 15,
        width: 300,
        duration: 0.3,
    },
    0.3
);

t2.to(
    ".back-button",
    {
        ease: "elastic.out(1, .8)",
        bottom: "5%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    ".calculator-final",
    {
        ease: "elastic.out(1, .8)",
        top: "4%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    "h2, .h5",
    {
        ease: "elastic.out(1, .8)",
        top: "50%",
        duration: 1.5,
    },
    0.6
);

t2.to(
    "h5",
    {
        ease: "elastic.out(1, .8)",
        bottom: "20%",
        duration: 1.5,
    },
    0.7
);