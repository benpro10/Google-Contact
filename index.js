let menuBurger = document.querySelector(".menuBerger");
let hiddenSection = document.querySelector(".addContact");
let infoSction = document.querySelector("#infoContactsid");

menuBurger.addEventListener("click", function () {
  if (hiddenSection.style.display === "none") {
    hiddenSection.style.display = "inline-block";
    infoSction.style.width = "78%";
    hiddenSection.style.transform = "translate(0)";
  } else {
    hiddenSection.style.display = "none";
    infoSction.style.width = "100%";
    hiddenSection.style.transform = "translate(-100%)";
    hiddenSection.style.transition= "0.5s";
  }
});
