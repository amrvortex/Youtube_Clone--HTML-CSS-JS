let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-small");
  container.classList.toggle("container-large");
});

/*==================== DARK LIGHT THEME ====================*/
// ************* Dark Mode *****************
var darkbtn = document.querySelector(".dark-btn");
let logoimg = document.querySelector(".logo");
function darkonclick() {
  darkbtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    logoimg.src = "images/darklogo.png";
    darkbtn.src = "images/dark theme icon/sun.png";
  } else {
    localStorage.setItem("theme", "light");
    logoimg.src = "images/logo.png";
    darkbtn.src = "images/dark theme icon/moon2.png";
  }
}

if (localStorage.getItem("theme") == "light") {
  darkbtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  logoimg.src = "images/logo.png";
  darkbtn.src = "images/dark theme icon/moon2.png";
} else if (localStorage.getItem("theme") == "dark") {
  darkbtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  logoimg.src = "images/darklogo.png";
  darkbtn.src = "images/dark theme icon/sun.png";
} else {
  localStorage.setItem("theme", "light");
  logoimg.src = "images/logo.png";
  darkbtn.src = "images/dark theme icon/moon2.png";
}
