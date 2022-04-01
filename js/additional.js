//Get the button
let mybutton = document.getElementById("btn-back-to-top");

const navbar = document.querySelector('.main-navigation');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 160 ||
    document.documentElement.scrollTop > 160
  ) {
    mybutton.style.display = "block";
    navbar.classList.add('main-navigation-active');
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove('main-navigation-active');
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
