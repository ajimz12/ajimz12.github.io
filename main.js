


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


  /* OJO SAURON */


  var ball = document.getElementsByClassName("ball");
    document.onmousemove = function(){

      var x = event.clientX * 50 / window.innerHeight + "%";
      var y= event.clientY * 50 / window.innerHeight + "%";

      for(var i=0; i<2; i++){

        ball[i].style.left = x;
        ball[i].style.top = y;
        ball[i].style.transform = "translate(-"+x+", -"+y+")";


      }

    }

