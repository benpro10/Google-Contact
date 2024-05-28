const menuBurger = document.querySelector(".menuBerger");
const hiddenSection = document.querySelector(".addContact");
const infoSction = document.querySelector("#infoContactsid");
const btnCreateConact = document.querySelector(".createContact");
const createNewContact = document.querySelector(".createContact-modal");
const creatOneContact = document.querySelector(".createOneContact-modal");
const showPagecreateoneContact = document.querySelector(".InfoContactAdded");

// ------------------// click sur menu burger

menuBurger.addEventListener("click", function () {
  hiddenSection.classList.toggle("show");
  infoSction.classList.toggle("infoContactsTransition");
  showPagecreateoneContact.classList.toggle("show");
  showPagecreateoneContact.classList.toggle("infoContactsTransition");
});

// --------------------click sur créer contact
btnCreateConact.addEventListener("click", function () {
  if (createNewContact.style.opacity === "0") {
    createNewContact.style.opacity = "1";
  } else {
    createNewContact.style.opacity = "0";
  }
});

// -----------------click sur creer un seul contact
creatOneContact.addEventListener("click", function () {
  showPagecreateoneContact.style.display = "flex";
  infoSction.style.display = "none";
  createNewContact.style.opacity = "0";
});

// ---------------------survole sur college et Restaurer... afficher le corbeille et edit

// corbeilleEditvisible.addEventListener("mousemove", function () {
//   if (corbeilleEditvisible.style.opacity === "0") {
//     corbeilleEditvisible.style.opacity = "0";
//   } else {
//     corbeilleEditvisible.style.opacity = "1";
//   }
// });

// // -------------- au click sur libelle
// clickLibelle.addEventListener("click", function () {
//   createNewLibelle.addEventListener.style.display = "block";
//   // body.addEventListener.style.overflow = "hidden";
// });
