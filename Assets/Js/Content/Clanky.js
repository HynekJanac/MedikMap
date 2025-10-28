// Soubor zajištující procedurální vytvoření seznamu odkazů
// Základní schéma
//  {"nazev": "",
//   "odkaz": "",
//   "obrazek":"",
//   "popis": "",
//   "kategorie": "",
//   "autor": "",
//   "datum": ""}

let Clanky = [
    {"nazev": "Letní pitevna ☀️",
        "odkaz": "/Clanky/04-Letni-pitevna.html",
        "obrazek":"Assets/Img/LetniPitevna.jpg",
        "popis": "Souhrný článek k letním pitevním cvičením na 1.LF, materiály, tipy atd...",
        "kategorie": "Anatomie",
        "autor": "Hynek Janáč",
        "datum": ""},
    {"nazev": "Zimní pitevna 💪",
        "odkaz": "/Clanky/03-Zimni-pitevna.html",
        "obrazek":"Assets/Img/ZimniPitevna.jpg",
        "popis": "Souhrný článek k zimním pitevním cvičením na 1.LF, materiály, tipy atd...",
        "kategorie": "Anatomie",
        "autor": "Hynek Janáč",
        "datum": ""},
    {"nazev": "Interaktivní dráhy CNS 🧠",
    "odkaz": "/Clanky/02-Interaktivni-drahy-CNS.html",
    "obrazek":"Assets/Img/Mozek.jpeg",
    "popis": "Návod jak zprovoznit interaktivní dráhy CNS od Anatomického ústavu 1. lékařské fakulty.",
    "kategorie": "Anatomie",
    "autor": "Hynek Janáč",
    "datum": ""},
    {"nazev": "Generátor zkouškových otázek",
        "odkaz": "/Clanky/01-GeneratorOtazek.html",
        "obrazek":"Assets/Img/Nastroj.jpeg",
        "popis": "Jednoduchý a efektivní nástroj na přípravu k ústní zkoušce, umožnuje vložit vlastní seznam otázek a vygenerovat náhodný triplet, quadriplet...",
        "kategorie": "Nástroj",
        "autor": "Hynek Janáč",
        "datum": ""},
]
    
    
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

for(i = 0; i < Clanky.length; i++ ){
    const article = document.createElement("article");
    article.classList.add("card");

    // Create anchor element
    const link = document.createElement("a");
    link.classList.add("cardLink");
    link.href = Clanky[i].odkaz;

    // Create div for content
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("cardContent");

    // Create image
    const img = document.createElement("img");
    img.classList.add("cardThumbnail");
    img.alt = "image of a squares and circles";
    img.src = Clanky[i].obrazek;

    // Create text container
    const textDiv = document.createElement("div");
    textDiv.classList.add("cardText");

    // Create headline
    const headline = document.createElement("h2");
    headline.classList.add("cardHeadline");
    headline.textContent = Clanky[i].nazev;

    // Create description
    const description = document.createElement("p");
    description.classList.add("cardDescription");
    description.textContent = Clanky[i].popis;

    // Create metadata wrapper
    const metadataWrap = document.createElement("div");
    metadataWrap.classList.add("cardMetadataWrap");

    // Create metadata action
    const metadataAction = document.createElement("p");
    metadataAction.classList.add("cardMetadata", "metadataAction");
    metadataAction.innerHTML = 'Prozkoumat <i class="fa-solid fa-angle-right"></i>';

    // Create category link
    const categoryLink = document.createElement("a");
    categoryLink.href = "#";
    categoryLink.classList.add("cardMetadata", "metadataCategory");
    categoryLink.innerHTML = '<i class="fa-solid fa-hashtag"></i>' + Clanky[i].kategorie;

    // Create author link
    const authorLink = document.createElement("a");
    authorLink.href = "#";
    authorLink.classList.add("cardMetadata", "metadataAuthor");
    authorLink.textContent = Clanky[i].autor;

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