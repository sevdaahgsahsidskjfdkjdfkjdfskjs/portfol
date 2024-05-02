
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};


  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
   section.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');  

       if(top >= offset && top < offset + height) {
           navLinks.forEach(links => {
               links.classList.remove('active-link');
               document.querySelector('headernav a[href*=' + id +']').classList.add('active');
           });
       };
   });

   let header = document.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};

ScrollReval ({
//    reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReval ().reveral('.home-content, .heading', {origin: 'top'});
ScrollReval ().reveral('.home img, .services-contanier, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReval ().reveral('.home content h1, .about-img', {origin: 'left'});
ScrollReval ().reveral('.home content p, .home content p, .about-content', {origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});