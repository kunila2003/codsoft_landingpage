 burger=document.querySelector('.burger');
 navbar=document.querySelector('.navbar');
 navlinks=document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
navlinks.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})

