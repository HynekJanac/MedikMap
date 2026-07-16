function OpenCollapsible(CollapsibleIndex){
    // Opens collapsible
    document.getElementsByClassName("item-content")[CollapsibleIndex].style.maxHeight = "200px"
    document.getElementsByClassName("fa-circle-info")[CollapsibleIndex].style.display = "none"
    document.getElementsByClassName("fa-circle-xmark")[CollapsibleIndex].style.display = "block"
}

function CloseCollapsible(CollapsibleIndex){
    // Opens collapsible
    document.getElementsByClassName("item-content")[CollapsibleIndex].style.maxHeight = "0"
    document.getElementsByClassName("fa-circle-info")[CollapsibleIndex].style.display = "block"
    document.getElementsByClassName("fa-circle-xmark")[CollapsibleIndex].style.display = "none"
}

function zdrojeBuilder(upraveneZdroje){
     if (!upraveneZdroje){
            var upraveneZdroje = Zdroje
        }
        // Seřadí array Zdroje abecedně podle názvu 
        upraveneZdroje.sort((a, b) => a.nazev.localeCompare(b.nazev));
        let predmety = [... new Set(upraveneZdroje.map(predmet => predmet.predmet))];
        predmety.sort() //Seřadí předměty podle abecedy
        //Zresetuje wrap
        document.getElementById("Links-Wrap").innerHTML=""
        // Pak dojde k procházení zdrojů jeden po druhém, podle předmětu
        
        let counter = 0
        for(const predmet of predmety){
            // Vytvoří se html pro sekci předmětu
            let sekce = `<section class="category-container" id="${predmet}" title="${predmet}"><h2 class="category">${predmet}</h2></section>`
             document.getElementById("Links-Wrap").innerHTML+=sekce
            let content = ""
            let zdrojePodlePredmetu = upraveneZdroje.filter(zdroj => zdroj.predmet == predmet)
            for(const zdroj of zdrojePodlePredmetu){
                let item = `<div class="item-wrap">
    <div class="item-header">
        <a href="${zdroj.odkaz}" class="item-link" target="_blank">${zdroj.nazev}</a>
        <i class="fa-solid fa-circle-info" tabindex="0" title="Více informací" onclick="OpenCollapsible(${counter})" onkeydown="OpenCollapsible(${counter})"></i>
        <i class="fa-solid fa-circle-xmark" tabindex="0" title="Méně informací" onclick="CloseCollapsible(${counter})" onkeydown="CloseCollapsible(${counter})"></i>
    </div>
    <div class="item-content">
        <div class="item-metadata">
            <i class="fa-solid fa-bookmark"></i>${zdroj.typ}
            <i class="fa-solid fa-graduation-cap"></i>Ročník: ${zdroj.rocnik}
            <i class="fa-solid fa-comment"></i>${zdroj.jazyk}
        </div>
        <p>${zdroj.popis}</p>
    </div>
</div>`
        content = content + item
        counter = counter + 1
        }
        document.getElementById(predmet).innerHTML+=content
}}
zdrojeBuilder()