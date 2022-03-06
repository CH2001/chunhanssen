// Typewriter effects 
const typeWriter = document.getElementById('typewriter-text');
const text = 'BIS (Data Analytics)';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
// End of typewriter effects

//Scroll to the top button
var mybutton = document.getElementById("appear");

window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function gotopFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//End of scroll to the top button
