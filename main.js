

/*  MENU MOVIL  */ 


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".navbar")

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("navbar_visible")

})


/*  AUDIO DE SANS  */ 


const imagen = document.getElementById("sansimg");
const audio = document.getElementById("audiosans");

imagen.addEventListener("mouseover", function() {
    audio.play();
  });
  
  imagen.addEventListener("mouseout", function() {
    audio.pause();
  });