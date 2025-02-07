
function TableOfContents(){
  let TableOfContents = document.createElement("nav")
  TableOfContents.role = "navigation"
  TableOfContents.className = "table-of-contents"
  
  let ToCHeading = document.createElement("h2")
  ToCHeading.className = "contents-title"
  ToCHeading.innerText = "Obsah"
  let ShowHideTocBtn  = document.createElement("a")
  ShowHideTocBtn.id = "showhide-contents"
  ShowHideTocBtn.setAttribute("onclick", "ShowHideContents()")
  ShowHideTocBtn.innerText = "(skrýt)"


  // Create a list for the ToC entries
  let tocList = document.createElement("ul");
  tocList.className = "table-of-contents-list"
  tocList.id = "table-of-contents-list"   

  // Get the h3 tags - ToC entries
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

  TableOfContents.appendChild(ToCHeading)
  TableOfContents.appendChild(ShowHideTocBtn)
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
if (document.getElementById("table-of-contents-list").style.display == "none"){
  document.getElementById("table-of-contents-list").style.display = "block";
  document.getElementById("showhide-contents").innerText = "(skrýt)"
}
else{
  document.getElementById("table-of-contents-list").style.display = "none";
  document.getElementById("showhide-contents").innerText = "(ukázat)"
}
}

//Script used to find url for sharing


function Sharing(){
  let currenturl = window.location.href
  var windowname = document.title
  
  let ShareDialog = document.createElement("div")
  
  let ShareGrid = document.createElement("div")
  ShareGrid.className = "social-grid share-wrap"

  let ShareCopy = document.createElement("input")
  ShareCopy.type = "text"
  ShareCopy.id = "Copy"
  ShareCopy.value = currenturl

  let CopyInfo = document.createElement("p")
  CopyInfo.id = "Copy_Info"
  CopyInfo.innerText = "Odkaz byl zkopírován"

  var ShareButtons = [
    {
      title: 'Odkaz byl zkopírován',
      href: '#Copy',
      target: "_Self",
      iconClassName: 'icon fas fa-link'
    },
    {
      title: 'Sdílet na Facebooku',
      href: "https://www.facebook.com/sharer/sharer.php?u=" + currenturl,
      target: "_blank",
      iconClassName: 'icon fab fa-facebook'
    },
    {
      title: 'Sdílet na x.com',
      href: "https://twitter.com/intent/tweet?text=" + windowname + "%20na%20Medikmap.cz%20" + currenturl,
      target: "_blank",
      iconClassName: 'icon fa-brands fa-x-twitter'
    }];

    // Create the initial links
    for (let i = 0; i < ShareButtons.length; i++) {
      let ShareButtonData = ShareButtons[i];
      var ShareButton = document.createElement('a');
      ShareButton.title = ShareButtonData.title;
      ShareButton.className = 'social';
      ShareButton.setAttribute("onclick", "CopyLink()")
      ShareButton.href = ShareButtonData.href;

      var iconElement = document.createElement('i');
      iconElement.className = ShareButtonData.iconClassName;

      ShareButton.appendChild(iconElement);
      ShareGrid.appendChild(ShareButton);
  }
  ShareDialog.appendChild(ShareGrid)
  ShareDialog.appendChild(ShareCopy)
  ShareDialog.appendChild(CopyInfo)
  let article = document.getElementsByTagName("article")[0]
  document.getElementsByTagName("main")[0].insertBefore(ShareDialog, article)


}

function ArticleImageViewer(){
  let images = Array.from(document.querySelectorAll('article img'))
  images.forEach( function(image){
      image.setAttribute('onclick','ViewImage('+ images.indexOf(image)  + ')');
  } 
      
   )
   document.getElementById("zoom_image--close").onclick = () => {
      document.getElementById('zoom_image--container').style.display = "none";
  }
  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        document.getElementById('zoom_image--container').style.display = "none";
        }
    });
}

function ViewImage(image_id){
  
  let images = Array.from(document.querySelectorAll('article img'))
  let caption = document.getElementsByClassName("caption")[image_id].textContent
  
  document.getElementById('zoom_image--container').style.display = "flex";
  document.getElementById("zoom_image--image").src = images[image_id].getAttribute('src')
  document.getElementsByClassName("zoom_image--caption")[0].innerHTML = caption
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
Sharing()
TableOfContents()
