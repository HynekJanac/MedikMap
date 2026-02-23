document.getElementById("Search").style.display = "flex";

let predmety = [... new Set(Zdroje.map(zdroj => zdroj.předmět))].sort();
let zdroje = [... new Set(Zdroje.map(zdroj => zdroj.nazev))].sort();
let typy = [... new Set(Zdroje.map(zdroj => zdroj.typ))].sort();
let jazyk = [... new Set(Zdroje.map(zdroj => zdroj.jazyk))]

function createFilters(options,id){
    document.createElement("option")
    for (var i = 0; i < options.length; i++) {
        let option = document.createElement("option")
        option.value = options[i] 
        option.textContent = options[i] 
        document.getElementById(id).append(option);
    }
}

createFilters(predmety,"predmet")
createFilters(typy,"typ")


function search(){
    let search = document.getElementById("SearchInput").value
    console.log(search)
    let upraveneZdroje = Zdroje.filter(zdroje => zdroje.nazev.toLowerCase().includes(search.toLowerCase()))
    console.log(upraveneZdroje)
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