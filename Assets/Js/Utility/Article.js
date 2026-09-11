function ToC(){
  // For each h2
  let item = `<li><a href="#Uvodni-informace">Recenze 🔍</a></li>`
  headers = document.getElementsByTagName("h2");
  let contents = ""
  for (const heading of headers){
    // a list item for the entry
    let item = `<li><a href="#${heading.id}">${heading.innerText}</a></li>`
    contents += item
  }
  let ToC = `<nav role="navigation" class="toc">
    <h2 class="contentsTitle">Obsah</h2>
    <a id="showHideContents" onclick="viewToC()">(skrýt)</a>
    <ul class="tocList" id="tocList">
        ${contents}
    </ul>
</nav>`
  document.getElementsByTagName("article")[0].insertAdjacentHTML("beforebegin",ToC)  
}

// When the user clicks on the button, hide or show table of contents
function viewToC(){
if (document.getElementById("tocList").style.display == "none"){
  document.getElementById("tocList").style.display = "block";
  document.getElementById("showHideContents").innerText = "(skrýt)"
}
else{
  document.getElementById("tocList").style.display = "none";
  document.getElementById("showHideContents").innerText = "(ukázat)"
}
}

function readNext(){
  // Fukce vybere náhodné tři články k dalšímu čtení
    if(typeof contentData !== "undefined"){
    let bezSoucasneho = contentData.filter((clanek => !window.location.pathname.includes(clanek.odkaz.replace("\.html",""))))
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

function imageViewer(){
  let images = Array.from(document.querySelectorAll('article img:not(.cardThumbnail)'))
  if (typeof images !== "undefined"){
    images.forEach( function(image){
      image.setAttribute('onclick',`viewImage(${images.indexOf(image)})`)
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

function viewImage(image_id){  
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
  controls_right.setAttribute("onclick", `viewImage(${image_id_right})`)
  controls_left.setAttribute("onclick", `viewImage(${image_id_left})`)
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

ToC()
imageViewer()
readNext()