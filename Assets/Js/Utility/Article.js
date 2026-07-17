function TableOfContents(){
  let TableOfContents = document.createElement("nav")
  TableOfContents.role = "navigation"
  TableOfContents.className = "toc"
  
  let tocHeading = document.createElement("h2")
  tocHeading.className = "contentsTitle"
  tocHeading.innerText = "Obsah"
  let ShowHidetocBtn  = document.createElement("a")
  ShowHidetocBtn.id = "showHideContents"
  ShowHidetocBtn.setAttribute("onclick", "ShowHideContents()")
  ShowHidetocBtn.innerText = "(skrýt)"


  // Create a list for the toc entries
  let tocList = document.createElement("ul");
  tocList.className = "tocList"
  tocList.id = "tocList"   

  // Get the h3 tags - toc entries
  headers = document.getElementsByTagName("h2");

  // For each h2
  for (const heading of headers){
  
    // a list item for the entry
    tocListItem = document.createElement("li");

    // a link for the h3
    tocEntry = document.createElement("a");
    tocEntry.setAttribute("href","#"+ heading.id);
    tocEntry.innerText=heading.innerText;
  
    tocListItem.appendChild(tocEntry);
    tocList.appendChild(tocListItem);
  }

  TableOfContents.appendChild(tocHeading)
  TableOfContents.appendChild(ShowHidetocBtn)
  TableOfContents.appendChild(tocList)
  let article = document.getElementsByTagName("article")[0]
  document.getElementsByTagName("main")[0].insertBefore(TableOfContents, article)

}

// When the user clicks on the button, hide or show table of contents
function ShowHideContents(){
if (document.getElementById("tocList").style.display == "none"){
  document.getElementById("tocList").style.display = "block";
  document.getElementById("showHideContents").innerText = "(skrýt)"
}
else{
  document.getElementById("tocList").style.display = "none";
  document.getElementById("showHideContents").innerText = "(ukázat)"
}
}

function ReadNext(){
  // Fukce vybere náhodné tři články k dalšímu čtení
    if(typeof contentData !== "undefined"){
    let bezSoucasneho = contentData.filter((clanek => window.location.pathname.search(clanek.odkaz) === -1))
    let NahodneClanky = [...bezSoucasneho].sort(() => Math.random() - 0.5).slice(0, 3);
    let clanky = ""
    for(const element of NahodneClanky){
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
let sekce = `<h1>Další články</h1>
<section class="section" id="section">${clanky}</section>`
document.getElementById("endblock").insertAdjacentHTML("beforebegin",sekce)
  }
}

function ArticleImageViewer(){
  let images = Array.from(document.querySelectorAll('article img:not(.cardThumbnail)'))
  if (typeof images !== "undefined"){
    images.forEach( function(image){
      image.setAttribute('onclick',`ViewImage(${images.indexOf(image)})`)
  } 
      
   )
   document.getElementById("imageZoomClose").onclick = () => {
      document.getElementById('imageZoomContainer').style.display = "none";
  }
  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        document.getElementById('imageZoomContainer').style.display = "none";
        }
    });
  document.getElementById("imageZoomImage").onclick = () => {
      document.getElementById('imageZoomContainer').style.display = "none";
  }
  }
}

function ViewImage(image_id){  
  let images = Array.from(document.querySelectorAll('article img:not(.cardThumbnail)'))
  let caption = document.getElementsByClassName("caption")[image_id].textContent

  document.getElementById("imageZoomContainer").style.display = "flex";
  document.getElementById("imageZoomImage").src = images[image_id].getAttribute('src')
  document.getElementsByClassName("imageZoomCaption")[0].innerHTML = caption
  var image_id_left = image_id - 1
  var image_id_right = image_id + 1

  if (image_id == 0){
      var image_id_left = images.length - 1
  }
  if (image_id == images.length - 1){
      var image_id_right = 0
  }
  
  let controls_right = document.getElementById("controls-right")
  let controls_left = document.getElementById("controls-left")
  controls_right.setAttribute("onclick", `ViewImage(${image_id_right})`)
  controls_left.setAttribute("onclick", `ViewImage(${image_id_left})`)
}
document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowRight") {
          document.getElementById("controls-right").click()
        }
    });
document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
          document.getElementById("controls-left").click()
        }
    }); 

TableOfContents()
ArticleImageViewer()
ReadNext()