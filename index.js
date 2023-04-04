let i=0;
let txt="Full Stack Web Developer.";
let speed=75;

typeWriter()

function typeWriter() {
    if(i < txt.length){
      document.getElementById("user-detail-name").style.color="white";
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {
      // reset the index when it reaches the end of the text
      i = 0;
      // clear the text
      document.getElementById("demo1").innerHTML = "";
      // make the recursive call
      document.getElementById("user-detail-name").style.color="#71e281";
      setTimeout(typeWriter, speed);
    }
  }


  var myNav = document.getElementById('nav-menu');
  var myNav2 = document.getElementById('main');
  window.onscroll = function () { 
      if ( document.documentElement.scrollTop >= 15 ) {
          myNav.classList.add("nav-colored");
          myNav2.classList.add("nav-colored");
          // myNav.classList.remove("nav-transparent");
      } 
      else {
          // myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
          myNav2.classList.remove("nav-colored");
      }
  };

  GitHubCalendar(".calendar", "manoharmeena123", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });

  document.getElementById("resume-link-1").onclick=()=>{
window.open("https://drive.google.com/file/d/19qQeKt0qR2R1WCpi8vNCU48BQ5DgiW6r/view?usp=share_link")
  }

  document.getElementById("resume-link-2").onclick=()=>{
   window.open("https://drive.google.com/file/d/19qQeKt0qR2R1WCpi8vNCU48BQ5DgiW6r/view?usp=share_link")
  }
     
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }

  let mode = document.getElementById("mode");
  mode.addEventListener("click", darkMode)

  function darkMode(event){
    let mode = event.target.alt;
    if(mode == "dark"){
      document.querySelector("body").style.backgroundColor = "rgb(21,74,129)";
       event.target.alt = "light";
    }else{
      document.querySelector("body").style.backgroundColor = "#000";
       event.target.alt = "dark";
    }
  }
