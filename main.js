console.log("Hello World");

// pre loader
setTimeout(function () {
  var loader = document.querySelector(".pre-loader");
  loader.style.display = "none";
}, 10);

//navigation
var navi = document.querySelector("nav");
var pos = navi.offsetTop;
var upArrow = document.querySelector(".scroll-up-item");

console.log(pos);
window.onscroll = () => {
  if (window.pageYOffset >= pos) {
    navi.classList.add("sticky");
  } else {
    navi.classList.remove("sticky");
  }
  if (window.pageYOffset >= 300) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
};

//mobile nav
var x = 0;
var burger = document.querySelector(".burger");
var burgerIcon = document.querySelector("#menu-icon");
var crossIcon = document.querySelector("#menu-cross");
var mobilenav = document.querySelector(".navi ul");

burger.onclick = () => {
  if (x == 0) {
    mobilenav.classList.add("shownav");
    burgerIcon.style.display = "none";
    crossIcon.style.display = "block";

    x = 1;
  } else {
    mobilenav.classList.remove("shownav");

    x = 0;
  }
};

var goto = () => {
  mobilenav.classList.remove("shownav");

  x = 0;
};
/* gallery click */

var clickMe = (ev, name) => {
  var photo = document.querySelectorAll(".photo");
  // console.log(active);
  for (i of photo) {
    i.style.display = "none";
  }
  document.getElementById(name).style.display = "flex";
};

//need to do gallery active button color
document.querySelector(".default").click();
