document.getElementById("Search").style.display = "flex";

let semestr = [... new Set(Predmety.map(predmet => predmet.semestr))].sort().reverse();
let rocnik = [... new Set(Predmety.map(predmet => predmet.rocnik).flat())].sort();
let obor = [... new Set(Predmety.map(predmet => predmet.obor).flat())].sort();
let kredity = [... new Set(Predmety.map(predmet => predmet.kredity))].sort()

function createFilters(options,id){
    document.createElement("option")
    for (const option of options) {
        let select = document.createElement("option")
        select.value = option
        select.textContent = option
        document.getElementById(id).append(select);
    }
}

createFilters(semestr,"semestr")
createFilters(rocnik,"rocnik")
createFilters(kredity,"kredity")
createFilters(obor,"obor")

function search(){
    let search = document.getElementById("SearchInput").value
    let upraveneZdroje = Predmety.filter(zdroje => zdroje.nazev.toLowerCase().includes(search.toLowerCase()))
    zdrojeBuilder(upraveneZdroje)
}


function filter(){
    let semestr = document.getElementById("semestr").value
    let rocnik = document.getElementById("rocnik").value
    let obor = document.getElementById("obor").value
    let kredity = document.getElementById("kredity").value
    

    let upraveneZdroje = Predmety.filter(predmet => 
    (semestr === "NoFilter" || predmet.semestr === semestr) &&
    (rocnik === "NoFilter" || predmet.rocnik.includes(Number(rocnik))) && 
    (obor === "NoFilter" || predmet.obor.includes(obor)) && 
    (kredity === "NoFilter" || predmet.kredity === Number(kredity)))
    zdrojeBuilder(upraveneZdroje)

}

function resetFilters(){
    document.getElementById("semestr").value = "NoFilter"
    document.getElementById("rocnik").value = "NoFilter"
    document.getElementById("obor").value = "NoFilter"
    document.getElementById("kredity").value = "NoFilter"
    document.getElementById("SearchInput").value = ""
    zdrojeBuilder()
}