
// Searches URL paremetrs for arguments
let search = new URLSearchParams(window.location.search).get('search')
let category = new URLSearchParams(window.location.search).get('category')

// Displays search field

document.getElementById("Search").style.display = "flex";

// SearchAndFilter function searches through articles in blog.html, and shows results
// It accepts 3 types of requests, 1. text search headline, 2. search categories, 3. search authors
// The function itself has 3 arguments, search_request = target searcg string, class_selector = specifies range
function SearchAndFilter(request_type, search_request){
    // Declare variabless
    var filter, card, target, i, txtValue, class_selector, search_request;
    if (request_type == "search"){
        search_request = document.getElementById('SearchInput');
        filter = search_request.value.toUpperCase();
        class_selector = "item-link"
        container_selector = "item-wrap"
       
    } else {filter = search_request.toUpperCase();}
     
    if (request_type == "category"){
        class_selector = "category"
        container_selector = "category-container"
    }
    card = document.getElementById("Links-Wrap").getElementsByClassName(container_selector);
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < card.length; i++) {
    target = card[i].getElementsByClassName(class_selector)[0];
    txtValue = target.textContent || target.innerText || target.getAttribute("title");
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
}

let uniquecategories = [...new Set(categories)];

for (var i = 0; i < uniquecategories.length; i++) {
    document.getElementById("filter").innerHTML += '<a class="filterBtn" href="#'+ uniquecategories[i] +'"></a>';
    document.getElementsByClassName("filterBtn")[i].setAttribute('onclick','SearchAndFilter("category" ,"' + uniquecategories[i] + '")')
    document.getElementsByClassName("filterBtn")[i].innerText = uniquecategories[i] 
}


if (category != null){
    SearchAndFilter("category" ,category)
}