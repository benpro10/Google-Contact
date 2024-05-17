let menuBurger = document.querySelector(".menuBerger");
let hiddenSection = document.querySelector(".addContact");
let infoSction = document.querySelector("#infoContactsid");
let corbeilleEditvisible = document.querySelector(
  ".manageIconDeleteEdit--opacity"
);
let clickLibelle = document.querySelector(".iconLibelle--cursorpointer");
let createNewLibelle = document.querySelector(".creatLibelle");
console.log(createNewLibelle);
const body = document.getElementsByTagName("body");

// ------------------// click sur menu burger

menuBurger.addEventListener("click", function () {
  console.log(hiddenSection);
  hiddenSection.classList.toggle("show");
  infoSction.classList.toggle("infoContactsTransition");
});

// ---------------------survole sur college et Restaurer... afficher le corbeille et edit

corbeilleEditvisible.addEventListener("mousemove", function () {
  if (corbeilleEditvisible.style.opacity === "0") {
    corbeilleEditvisible.style.opacity = "0";
  } else {
    corbeilleEditvisible.style.opacity = "1";
  }
});

// -------------- au click sur libelle
clickLibelle.addEventListener("click", function () {
  createNewLibelle.addEventListener.style.display = "block";
  // body.addEventListener.style.overflow = "hidden";
});
