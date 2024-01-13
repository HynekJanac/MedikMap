function GalleryImageViewer(){
    let images = Array.from(document.querySelectorAll('gallery img'))
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
    
    let images = Array.from(document.querySelectorAll('gallery img'))
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


//Basicaly slightly modified searchandfilter script
function SearchAndFilter(request_type, search_request){
    // Declare variabless
    var filter, container, card, target, i, txtValue, class_selector, search_request;
    filter = search_request.toUpperCase();
    if (request_type == "category"){
        class_selector = "category"
    }
    
    container = document.getElementById("gallery-grid");
    card = container.getElementsByClassName('grid-item');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < card.length; i++) {
    target = card[i].getElementsByClassName(class_selector)[0];
    txtValue = target.textContent || target.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
    } else {
        card[i].style.display = "none";
    }
    }

}


// This code finds all the tags attached to articles and generates filters
var Alltags = document.getElementsByClassName("category")
var categories = []
for (var i = 0; i < Alltags.length; i++) {
    categories.push(Alltags[i].innerText);
    Alltags[i].setAttribute('onclick','SearchAndFilter("category" , "' + Alltags[i].innerText + '")');
}

let uniquecategories = [...new Set(categories)];

for (var i = 0; i < uniquecategories.length; i++) {
    document.getElementById("filter").innerHTML += '<a class="filter__btn" href="#"></a>';
    
    document.getElementsByClassName("filter__btn")[i].setAttribute('onclick','SearchAndFilter("category" ,"' + uniquecategories[i] + '")')
    document.getElementsByClassName("filter__btn")[i].innerText = uniquecategories[i] 
}



GalleryImageViewer()