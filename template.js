// 1.0 Typewriter effects 
const typeWriter = document.getElementById('typewriter-text');
const text = 'BIS (Data Analytics)';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
// End of typewriter effects

//2.0 Scroll to the top function
var mybutton = document.getElementById("appear");

window.onscroll = function() {scrollFunction()}; // When the user scrolls down 20px from the top of the document, show the button

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