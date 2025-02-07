
let OpenCollasibleBtns = document.getElementsByClassName("fa-circle-info")
let CloseCollasibleBtns= document.getElementsByClassName("fa-circle-xmark")

for (i = 0; i < OpenCollasibleBtns.length; i++) {
    OpenCollasibleBtns[i].setAttribute("onclick", "OpenCollapsible(" + String(i)  + ")")
    OpenCollasibleBtns[i].setAttribute("onkeydown", "OpenCollapsible(" + String(i)  + ")")
    CloseCollasibleBtns[i].setAttribute("onclick", "CloseCollapsible(" + String(i)  + ")")
    CloseCollasibleBtns[i].setAttribute("onkeydown", "CloseCollapsible(" + String(i)  + ")")
}

function OpenCollapsible(CollapsibleIndex){
    // Opens collapsible
    let Collapsibles = document.getElementsByClassName("item-content")[CollapsibleIndex].style.maxHeight = "200px"
    document.getElementsByClassName("fa-circle-info")[CollapsibleIndex].style.display = "none"
    document.getElementsByClassName("fa-circle-xmark")[CollapsibleIndex].style.display = "block"
}


function CloseCollapsible(CollapsibleIndex){
    // Opens collapsible
    let Collapsibles = document.getElementsByClassName("item-content")[CollapsibleIndex].style.maxHeight = "0"
    document.getElementsByClassName("fa-circle-info")[CollapsibleIndex].style.display = "block"
    document.getElementsByClassName("fa-circle-xmark")[CollapsibleIndex].style.display = "none"
}

