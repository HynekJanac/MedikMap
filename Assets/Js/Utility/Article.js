
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
  for (i = 0; i < headers.length; i++){
  
    // a list item for the entry
    tocListItem = document.createElement("li");

    // a link for the h3
    tocEntry = document.createElement("a");
    tocEntry.setAttribute("href","#"+ headers[i].id);
    tocEntry.innerText=headers[i].innerText;
  
    tocListItem.appendChild(tocEntry);
    tocList.appendChild(tocListItem);
  }

  TableOfContents.appendChild(tocHeading)
  TableOfContents.appendChild(ShowHidetocBtn)
  TableOfContents.appendChild(tocList)
  let article = document.getElementsByTagName("article")[0]
  document.getElementsByTagName("main")[0].insertBefore(TableOfContents, article)

}

function CopyLink() {
  document.getElementById("Copy").style.display = "block";
  //select the text in the text box
  document.getElementById("Copy").select();
  //copy the text to the clipboard
  document.execCommand("copy");
  document.getElementById("Copy").style.display = "none";
  
  document.getElementById("Copy_Info").style.opacity = "1";
  document.getElementById("Copy_Info").style.position = "relative";
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

//Script used to find url for sharing



function ArticleImageViewer(){
  let images = Array.from(document.querySelectorAll('article img'))
  images.forEach( function(image){
      image.setAttribute('onclick','ViewImage('+ images.indexOf(image)  + ')');
  } 
      
   )
   document.getElementById("zoom_image--close").onclick = () => {
      document.getElementById('imageZoomContainer').style.display = "none";
  }
  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        document.getElementById('imageZoomContainer').style.display = "none";
        }
    });
}

function ViewImage(image_id){
  
  let images = Array.from(document.querySelectorAll('article img'))
  let caption = document.getElementsByClassName("caption")[image_id].textContent
  
  document.getElementById('imageZoomContainer').style.display = "flex";
  document.getElementById("imageZoomImage").src = images[image_id].getAttribute('src')
  document.getElementsByClassName("imageZoomCaption")[0].innerHTML = caption
  var image_id_left = String(image_id - 1)
  var image_id_right = String(image_id + 1)

  if (image_id == 0){
      var image_id_left = String(images.length - 1)
      
  }
  if (image_id == images.length - 1){
      var image_id_right = String(0)
  }
  

  let controls_right = document.getElementById("controls-right")
  let controls_left = document.getElementById("controls-left")
  
  controls_right.setAttribute("onclick", "ViewImage(" + image_id_right  +")")
  controls_left.setAttribute("onclick", "ViewImage(" + image_id_left +")")
  
    
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

ArticleImageViewer()
TableOfContents()