/*document parts */

const navBar = document.getElementById("mainHeader");
const userTools = document.getElementById("currentUser");
const accountOptions = document.querySelector(".accountOptions");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});

/*
userTools.addEventListener("mouseover", showAccountSettings);
accountOptions.addEventListener("mouseover", showAccountSettings);

userTools.addEventListener("mouseleave", hideAccountSettings);
accountOptions.addEventListener("mouseleave", hideAccountSettings);


function showAccountSettings() {
  accountOptions.style.display = "block";
}
*/
