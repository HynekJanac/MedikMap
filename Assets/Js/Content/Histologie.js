// Soubor zajištující procedurální vytvoření seznamu odkazů
// Základní schéma
//  {"nazev": "",
//   "odkaz": "",
//   "obrazek":"",
//   "popis": "",
//   "autor": "",
//   "datum": ""}

let Clanky = [
    {"nazev": "00 – Úvod do studia histologie 🔬",
    "odkaz": "/Kurzy/Histologie/00-Uvod-do-histologie.html",
    "obrazek":"Assets/Img/Histologie/00-Uvod-do-histologie.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "01 – Histologická technika 🎨",
    "odkaz": "/Kurzy/Histologie/01-Histologicka-technika.html",
    "obrazek":"Assets/Img/Histologie/01-Histologicka-technika.jpeg",
    "autor": "Hynek Janáč",},

     {"nazev": "02 – Cytologie 🧬",
    "odkaz": "/Kurzy/Histologie/02-Cytologie.html",
    "obrazek":"Assets/Img/Histologie/02-Cytologie.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "03 – Epitelová tkáň 🛡️",
    "odkaz": "/Kurzy/Histologie/03-Epitelova-tkan.html",
    "obrazek":"Assets/Img/Histologie/03-Epitelova-tkan.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "04 – Vazivová tkáň 🪢",
    "odkaz": "/Kurzy/Histologie/04-Vazivova-tkan.html",
    "obrazek":"Assets/Img/Histologie/04-Vazivova-tkan.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "05 – Chrupavka a kost 🦴",
    "odkaz": "/Kurzy/Histologie/05-Chrupavka-a-kost.html",
    "obrazek":"Assets/Img/Histologie/05-Chrupavka-a-kost.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "06 – Svalová tkáň 💪",
    "odkaz": "/Kurzy/Histologie/06-Svalova-tkan.html",
    "obrazek":"Assets/Img/Histologie/06-Svalova-tkan.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "07 - Nervová tkáň a nervový systém 🧠",
    "odkaz": "/Kurzy/Histologie/07-Nervova-tkan-a-nervovy-system.html",
    "obrazek":"Assets/Img/Histologie/07-Nervova-tkan-a-nervovy-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "08 - Krev a krvetvorba 🩸",
    "odkaz": "/Kurzy/Histologie/08-Krev-a-krvevorba.html",
    "obrazek":"Assets/Img/Histologie/08-Krev-a-krvetvorba.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "09 - Kardiovaskulární systém 🫀",
    "odkaz": "/Kurzy/Histologie/09-Kardiovaskularni-system.html",
    "obrazek":"Assets/Img/Histologie/09-Kardiovaskularni-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "10 - Lymfatický a imunitní systém 💉",
    "odkaz": "/Kurzy/Histologie/10-Lymfaticky-a-imunitni-system.html",
    "obrazek":"Assets/Img/Histologie/10-Lymfaticky-a-imunitni-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "11 - Travicí systém I. 🦷",
    "odkaz": "/Kurzy/Histologie/11-Travici-system-1.html",
    "obrazek":"Assets/Img/Histologie/11-Travici-system-1.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "Souhrný test za zimní semestr ❄️",
    "odkaz": "/Kurzy/Histologie/Zimni-zapocet.html",
    "obrazek":"Assets/Img/Histologie/Zimni-zapocet.jpeg",
    "autor": "Hynek Janáč",},

     {"nazev": "Letní semestr ☀️",
    "odkaz": "/Kurzy/Histologie/Letni-semestr.html",
    "obrazek":"Assets/Img/Histologie/Letni-semestr.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "12 - Travicí systém II. 🍖",
    "odkaz": "/Kurzy/Histologie/12-Travici-system-2.html",
    "obrazek":"Assets/Img/Histologie/12-Travici-system-2.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "13 - Dýchací systém 🫁",
    "odkaz": "/Kurzy/Histologie/13-Dychaci-system.html",
    "obrazek":"Assets/Img/Histologie/13-Dychaci-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "14 - Močový systém 🚽",
    "odkaz": "/Kurzy/Histologie/14-Mocovy-system.html",
    "obrazek":"Assets/Img/Histologie/14-Mocovy-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "15 - Endokrinní systém 🚦",
    "odkaz": "/Kurzy/Histologie/15-Endokrinni-system.html",
    "obrazek":"Assets/Img/Histologie/15-Endokrinni-system.jpeg",
    "autor": "Hynek Janáč",},
    
    {"nazev": "16 - Mužský pohlavní systém 🍆",
    "odkaz": "/Kurzy/Histologie/16-Muzsky-pohlavni-system.html",
    "obrazek":"Assets/Img/Histologie/16-Muzsky-pohlavni-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "17 - Ženský pohlavní systém 🍑",
    "odkaz": "/Kurzy/Histologie/17-Zensky-pohlavni-system.html",
    "obrazek":"Assets/Img/Histologie/17-Zensky-pohlavni-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "18 - Kožní systém 😎",
    "odkaz": "/Kurzy/Histologie/18-Kozni-system.html",
    "obrazek":"Assets/Img/Histologie/18-Kozni-system.jpeg",
    "autor": "Hynek Janáč",},

    {"nazev": "19 - Smyslové orgány 👁️👂",
    "odkaz": "/Kurzy/Histologie/19-Smyslove-organy.html",
    "obrazek":"Assets/Img/Histologie/19-Smyslove-organy.jpeg",
    "autor": "Hynek Janáč",},

     {"nazev": "20 - Obecná embyrologie 🍼",
    "odkaz": "/Kurzy/Histologie/20-Obecna-embryologie.html",
    "obrazek":"Assets/Img/Histologie/20-Obecna-embryologie.jpeg",
    "autor": "Hynek Janáč",},

     {"nazev": "Poslední opakování před zkouškou 🏁",
    "odkaz": "/Kurzy/Histologie/Posledni-opakovani.html",
    "obrazek":"Assets/Img/Histologie/Posledni-opakovani.jpeg",
    "autor": "Hynek Janáč",},
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