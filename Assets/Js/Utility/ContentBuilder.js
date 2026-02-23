function contentBuilder(content){
      if (!content){
            var content = contentData
        }
    document.getElementById("section").innerHTML=""
    for(i = 0; i < content.length; i++ ){
        const article = document.createElement("article");
        article.classList.add("card");

        // Create anchor element
        const link = document.createElement("a");
        link.classList.add("cardLink");
        link.href = content[i].odkaz;

        // Create div for content
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("cardContent");

        // Create image
        const img = document.createElement("img");
        img.classList.add("cardThumbnail");
        img.alt = "image of a squares and circles";
        img.src = content[i].obrazek;

        // Create text container
        const textDiv = document.createElement("div");
        textDiv.classList.add("cardText");

        // Create headline
        const headline = document.createElement("h2");
        headline.classList.add("cardHeadline");
        headline.textContent = content[i].nazev;

        // Create description
        const description = document.createElement("p");
        description.classList.add("cardDescription");
        description.textContent = content[i].popis;

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
        authorLink.textContent = content[i].autor;

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
}
contentBuilder()