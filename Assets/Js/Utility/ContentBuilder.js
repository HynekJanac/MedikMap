function contentBuilder(content){
      if (!content){
            var content = contentData
        }
    document.getElementById("section").innerHTML=""
    let clanky = ""
    for(const element of content){
        let clanek = `<article class="card">
        <a class="cardLink" href="${element.odkaz}">
            <div class="cardContent">
                <img class="cardThumbnail" alt="image of a squares and circles" src="${element.obrazek}">
                <div class="cardText">
                    <h2 class="cardHeadline">${element.nazev}</h2>
                    <p class="cardDescription">${element.popis}</p>
                    <div class="cardMetadataWrap">
                        <p class="cardMetadata metadataAction">Prozkoumat <i class="fa-solid fa-angle-right"></i>
                        </p><a href="#" class="cardMetadata metadataAuthor">${element.autor}</a>
                    </div>
                </div>
            </div>
        </a>
    </article>` 
    clanky += clanek
}
// Assemble elements
let sekce = document.getElementById("section").innerHTML = clanky
}
contentBuilder()