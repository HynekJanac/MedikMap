// Searches URL paremetrs for arguments
let category = new URLSearchParams(window.location.search).get('kategorie')

const kategorie = [... new Set(contentData.map(clanek => clanek.kategorie))].sort();
console.log(kategorie)

function createFilters(options,id){
    document.createElement("option")
    for (const option of options) {
        let select = document.createElement("option")
        select.value = option
        select.textContent = option 
        document.getElementById(id).append(select);
    }
}

createFilters(kategorie,"kategorie")

function filter(){
    if(category){
        var kategorie = category
    }else{
        var kategorie = document.getElementById("kategorie").value
    }

    if (kategorie != "NoFilter"){
        let uppraveneZdroje = contentData.filter(clanek => clanek.kategorie == kategorie)
        contentBuilder(uppraveneZdroje)
    }
    if (kategorie =="NoFilter"){
        contentBuilder()
    }
}

function resetFilters(){
    document.getElementById("kategorie").value = "NoFilter"
    contentBuilder()
}
filter()