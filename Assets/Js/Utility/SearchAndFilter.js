
// Searches URL paremetrs for arguments
let search = new URLSearchParams(window.location.search).get('search')
let category = new URLSearchParams(window.location.search).get('category')
let author = new URLSearchParams(window.location.search).get('author')

// Displays search field
if (search != null){
    document.getElementById("Search").style.display = "flex";
}
// SearchAndFilter function searches through articles in blog.html, and shows results
// It accepts 3 types of requests, 1. text search headline, 2. search categories, 3. search authors
// The function itself has 3 arguments, search_request = target searcg string, class_selector = specifies range
function SearchAndFilter(request_type, search_request){
    // Declare variabless
    var filter, container, card, target, i, txtValue, class_selector, search_request;
    if (request_type == "search"){
        search_request = document.getElementById('Search__input');
        filter = search_request.value.toUpperCase();
        class_selector = "card__headline"
       
    } else {filter = search_request.toUpperCase();}
     
    if (request_type == "category"){
        class_selector = "metadata--category"
    }
    if (request_type == "author"){
        class_selector = "metadata--author"
    }
    
    container = document.getElementById("content");
    card = container.getElementsByClassName('card');
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
var Alltags = document.getElementsByClassName("metadata--category")
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


if (category != null){
    SearchAndFilter("category" ,category)
}
//author element is hidden by default
if (author != null && category == null) {
    SearchAndFilter("author" ,author)
}