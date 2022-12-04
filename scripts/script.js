// dark theme
const theme=document.querySelector('#theme');
theme.addEventListener('click',()=>{
  document.body.classList.toggle('theme');
})

// navbar scroll dissappear
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// homepage modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn2 = document.querySelector(".gotit");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
