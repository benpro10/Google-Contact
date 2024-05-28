const createContactBtn = document.querySelector(".home__left-btn");
const homeRightContactList = document.querySelector(
  ".home__right-contact--list"
);
const homeRightCreateContact = document.querySelector(
  ".home__right-contact--add"
);
const contactList = document.getElementById("contact__item");
const saveContactBtn = document.querySelector(".home__right-contact--btn");
const prenomValue = document.getElementById("prenom");
const nameValue = document.getElementById("name");
const entrepriseValue = document.getElementById("entreprise");
const fonctionValue = document.getElementById("fonction");
const emailValue = document.getElementById("email");
const phoneValue = document.getElementById("phone");

function createElement(tag, properties = {}) {
  const element = document.createElement(tag);
  Object.assign(element, properties);
  return element;
}

function createContact(
  prenom,
  nom,
  email,
  phoneNumb,
  fonction,
  entreprise,
  libelle
) {
  const ulBlock = createElement("ul", {
    className: "home__right-contact--element",
  });

  const contactTitle = createElement("li", {
    className: "home__right-contact--item",
    textContent: `${prenom} ${nom}`,
  });
  const contactEmail = createElement("li", {
    className: "home__right-contact--item",
    textContent: email,
  });
  const contactTel = createElement("li", {
    className: "home__right-contact--item",
    textContent: phoneNumb,
  });
  const contactFonctionEntreprise = createElement("li", {
    className: "home__right-contact--item",
    textContent: `${fonction}, ${entreprise}`,
  });
  const contactLibelle = createElement("li", {
    className: "home__right-contact--item",
    textContent: libelle,
  });

  ulBlock.append(
    contactTitle,
    contactEmail,
    contactTel,
    contactFonctionEntreprise,
    contactLibelle
  );

  contactList.appendChild(ulBlock);
}

createContactBtn.addEventListener("click", function () {
  homeRightContactList.style.display = "none";
  homeRightCreateContact.style.display = "block";
});

let contactCount = 0;
const contactCountLeft = document.querySelector(".home__left-count");
const contactCountRight = document.querySelector(".home__right-contact--count");
saveContactBtn.addEventListener("click", function () {
  if (
    prenomValue.value === "" ||
    nameValue.value === "" ||
    emailValue.value === "" ||
    phoneValue.value === "" ||
    fonctionValue.value === "" ||
    entrepriseValue.value === ""
  ) {
    return;
  } else {
    createContact(
      prenomValue.value,
      nameValue.value,
      emailValue.value,
      phoneValue.value,
      fonctionValue.value,
      entrepriseValue.value,
      "Libellé"
    );

    homeRightContactList.style.display = "block";
    homeRightCreateContact.style.display = "none";
    contactCount += 1;
    contactCountLeft.textContent = contactCount;
    contactCountRight.textContent = `(${contactCount})`;

    prenomValue.value = "";
    nameValue.value = "";
    emailValue.value = "";
    phoneValue.value = "";
    fonctionValue.value = "";
    entrepriseValue.value = "";
  }
});
