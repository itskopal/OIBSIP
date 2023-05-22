// /*MENU SHOW Y HIDDEN*/ 

const toggleBtn = document.querySelector('.toggle-btn');
const navbarList = document.querySelector('.nav-links-container');
const navbar = document.querySelector('.navbar');
const navItems = [...document.querySelectorAll('.link')];

 
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navbarList.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    if(scrollY > 81){
        navbar.style.backgroundColor = 'var(--navbar-color)';
    } else{
        navbar.style.backgroundColor = 'transparent';
    }
})

navItems.map(item => {
    item.addEventListener('click', () => {
        navItems.map(ele => ele.classList.remove('active'));
        item.classList.add('active');
    })
})


// scrollup button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}