
let OpenDialogBtns = document.getElementsByClassName("info-icon")
let CloseDialogBtns = document.getElementsByClassName("close-button")
console.log(OpenDialogBtns)
for (i = 0; i < OpenDialogBtns.length; i++) {
    console.log(OpenDialogBtns[i])
    OpenDialogBtns[i].setAttribute("onclick", "OpenDialog(" + String(i)  + ")")
    CloseDialogBtns[i].setAttribute("onclick", "CloseDialog(" + String(i)  + ")")
}

function OpenDialog(dialog){
    let dialogs = document.getElementsByTagName("dialog")
    dialogs[dialog].show()

}
function CloseDialog(dialog){
    let dialogs = document.getElementsByTagName("dialog")
    dialogs[dialog].close()

}