document.getElementById("Search").style.display = "flex";

let predmety = [... new Set(Zdroje.map(zdroj => zdroj.predmet))].sort();
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

    let upraveneZdroje = Zdroje.filter(zdroj => 
    (predmet === "NoFilter" || zdroj.predmet === predmet) &&
    (typ === "NoFilter" || zdroj.typ === typ))

    zdrojeBuilder(upraveneZdroje)
}
function resetFilters(){
    document.getElementById("predmet").value = "NoFilter"
    document.getElementById("typ").value = "NoFilter"
     document.getElementById("SearchInput").value = ""
    zdrojeBuilder()
}