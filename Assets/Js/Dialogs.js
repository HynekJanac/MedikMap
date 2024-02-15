
let OpenCollasibleBtns = document.getElementsByClassName("open-icon")
let CloseCollasibleBtns= document.getElementsByClassName("close-icon")

for (i = 0; i < OpenCollasibleBtns.length; i++) {
    OpenCollasibleBtns[i].setAttribute("onclick", "OpenCollapsible(" + String(i)  + ")")
    CloseCollasibleBtns[i].setAttribute("onclick", "CloseCollapsible(" + String(i)  + ")")
}

function OpenCollapsible(CollapsibleIndex){
    // Opens collapsible
    let Collapsibles = document.getElementsByClassName("link-content")[CollapsibleIndex].style.maxHeight = "200px"
    document.getElementsByClassName("open-icon")[CollapsibleIndex].style.display = "none"
    document.getElementsByClassName("close-icon")[CollapsibleIndex].style.display = "block"
}


function CloseCollapsible(CollapsibleIndex){
    // Opens collapsible
    let Collapsibles = document.getElementsByClassName("link-content")[CollapsibleIndex].style.maxHeight = "0"
    document.getElementsByClassName("open-icon")[CollapsibleIndex].style.display = "block"
    document.getElementsByClassName("close-icon")[CollapsibleIndex].style.display = "none"
}

