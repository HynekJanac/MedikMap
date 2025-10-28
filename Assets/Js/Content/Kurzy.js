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
        {"nazev": "Kurz anatomie 🫀",
        "odkaz": "/kurz-anatomie.html",
        "obrazek":"Assets/Img/Srdce.jpeg",
        "popis": "Kurz anatomie MedikMap, jedná se převážně o doprovodné materiály k pitevním cvičením na 1. Lékařské fakultě.",
        "kategorie": "Anatomie",
        "autor": "Hynek Janáč"},

        {"nazev": "Kurz histologie 🔬",
        "odkaz": "/kurz-histologie.html",
        "obrazek":"Assets/Img/Histologie/00-Uvod-do-histologie.jpeg",
        "popis": "Kurz histologie MedikMap, pokrývá syllabus 1. Lékařské fakulty, obsahuje materiály a kvízy sloužící k systematické přípravě na zkoušku z histologie.",
        "kategorie": "Anatomie",
        "autor": "Hynek Janáč",}
]
    



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

    // Create author link
    const authorLink = document.createElement("a");
    authorLink.href = "#";
    authorLink.classList.add("cardMetadata", "metadataAuthor");
    authorLink.textContent = Clanky[i].autor;

    // Assemble elements
    metadataWrap.appendChild(metadataAction);
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