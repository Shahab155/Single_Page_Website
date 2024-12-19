let menuButton = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".nav-links");

// this is eventListener is for the navbar menu to show link when clicked
menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("showNav")  ;
    
})
