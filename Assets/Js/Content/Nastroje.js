// Soubor zajištující procedurální vytvoření seznamu odkazů
// Základní schéma
//  {"nazev": "",
//   "odkaz": "",
//   "obrazek":"",
//   "popis": "",
//   "kategorie": "",
//   "autor": "",
//   "datum": ""}

let Nastroje = [
    {"nazev": "Generátor zkouškových otázek",
    "odkaz": "./Nastroje/GeneratorOtazek.html",
    "obrazek":"Assets/Img/Generic1.png",
    "popis": "Jednoduchý a efektivní nástroj na přípravu k ústní zkoušce, umožnuje vložit vlastní seznam otázek a vygenerovat náhodný triplet, quadriplet...",
    "kategorie": "Nástroj",
    "autor": "Hynek Janáč",
    "datum": ""},
]
    
    
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

for(i = 0; i < Nastroje.length; i++ ){
    const article = document.createElement("article");
    article.classList.add("card");

    // Create anchor element
    const link = document.createElement("a");
    link.classList.add("card__link");
    link.href = Nastroje[i].odkaz;

    // Create div for content
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card__content");

    // Create image
    const img = document.createElement("img");
    img.classList.add("card__thumbnail");
    img.alt = "image of a squares and circles";
    img.src = Nastroje[i].obrazek;

    // Create text container
    const textDiv = document.createElement("div");
    textDiv.classList.add("card__text");

    // Create headline
    const headline = document.createElement("h2");
    headline.classList.add("card__headline");
    headline.textContent = Nastroje[i].nazev;

    // Create description
    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = Nastroje[i].popis;

    // Create metadata wrapper
    const metadataWrap = document.createElement("div");
    metadataWrap.classList.add("card__metadata--wrap");

    // Create metadata action
    const metadataAction = document.createElement("p");
    metadataAction.classList.add("card__metadata", "metadata--action");
    metadataAction.innerHTML = 'Prozkoumat <i class="fa-solid fa-angle-right"></i>';

    // Create category link
    const categoryLink = document.createElement("a");
    categoryLink.href = "#";
    categoryLink.classList.add("card__metadata", "metadata--category");
    categoryLink.innerHTML = '<i class="fa-solid fa-hashtag"></i>' + Nastroje[i].kategorie;

    // Create author link
    const authorLink = document.createElement("a");
    authorLink.href = "#";
    authorLink.classList.add("card__metadata", "metadata--author");
    authorLink.textContent = Nastroje[i].autor;

    // Assemble elements
    metadataWrap.appendChild(metadataAction);
    metadataWrap.appendChild(categoryLink);
    metadataWrap.appendChild(authorLink);

    textDiv.appendChild(headline);
    textDiv.appendChild(description);
    textDiv.appendChild(metadataWrap);

    contentDiv.appendChild(img);
    contentDiv.appendChild(textDiv);

    link.appendChild(contentDiv);
    article.appendChild(link);

    let sekce = document.getElementById("section")
    sekce.appendChild(article)
}