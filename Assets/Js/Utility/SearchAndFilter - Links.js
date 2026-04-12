document.getElementById("Search").style.display = "flex";

let predmety = [... new Set(Zdroje.map(zdroj => zdroj.předmět))].sort();
let zdroje = [... new Set(Zdroje.map(zdroj => zdroj.nazev))].sort();
let typy = [... new Set(Zdroje.map(zdroj => zdroj.typ))].sort();
let jazyk = [... new Set(Zdroje.map(zdroj => zdroj.jazyk))]

function createFilters(options,id){
    document.createElement("option")
    for (const option of options) {
        let select = document.createElement("option")
        select.value = option
        select.textContent = option
        document.getElementById(id).append(select);
    }
}

createFilters(predmety,"predmet")
createFilters(typy,"typ")


function search(){
    let search = document.getElementById("SearchInput").value
    let upraveneZdroje = Zdroje.filter(zdroje => zdroje.nazev.toLowerCase().includes(search.toLowerCase()))
    zdrojeBuilder(upraveneZdroje)
}


function filter(){
    let predmet = document.getElementById("predmet").value
    let typ = document.getElementById("typ").value
    
    if (predmet == "NoFilter" && typ == "NoFilter"){
        zdrojeBuilder()
    }
    if (predmet == "NoFilter" && typ != "NoFilter"){
        let uppraveneZdroje = Zdroje.filter(zdroj => zdroj.typ == typ)
        zdrojeBuilder(uppraveneZdroje)
    }
    if (typ == "NoFilter" && predmet != "NoFilter"){
        let uppraveneZdroje = Zdroje.filter(zdroj => zdroj.předmět == predmet)
        zdrojeBuilder(uppraveneZdroje)
    }
    if (predmet != "NoFilter" && typ != "NoFilter"){
        let uppraveneZdroje = Zdroje.filter(zdroj => zdroj.předmět == predmet && 
        zdroj.typ == typ)
        zdrojeBuilder(uppraveneZdroje)
    }
}

function resetFilters(){
    document.getElementById("predmet").value = "NoFilter"
    document.getElementById("typ").value = "NoFilter"
     document.getElementById("SearchInput").value = ""
    zdrojeBuilder()
}