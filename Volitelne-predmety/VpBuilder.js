function OpenCollapsible(CollapsibleIndex){
    // Opens collapsible
    document.getElementsByClassName("item-content")[CollapsibleIndex].style.maxHeight = "700px"
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
            var upraveneZdroje = Predmety
        }
        // Seřadí array Zdroje abecedně podle názvu 
        upraveneZdroje.sort((a, b) => a.nazev.localeCompare(b.nazev));
        let semestry = [... new Set(upraveneZdroje.map(predmet => predmet.semestr))];
        semestry.sort().reverse() //Seřadí předměty podle abecedy
        //Zresetuje wrap
        document.getElementById("Links-Wrap").innerHTML=""
        // Pak dojde k procházení zdrojů jeden po druhém, podle předmětu
        let counter = 0
        for(const semestr of semestry){
            // Vytvoří se html pro sekci předmětu
            let sekce = `<section class="category-container" id="${semestr}" title="${semestr}"><h2 class="category">${semestr}</h2></section>`
             document.getElementById("Links-Wrap").innerHTML+=sekce
            let content = ""
            let jednotlivci = upraveneZdroje.filter(zdroj => zdroj.semestr == semestr)
            for(const predmet of jednotlivci){
                let output = `<div class="item-wrap">
                 <div class="item-header">
                    <a href="${predmet.odkaz}" class="item-link" target="_blank">${predmet.nazev}</a>
                    <i class="fa-solid fa-circle-info" tabindex="0" title="Více informací" onclick="OpenCollapsible(${counter})" onkeydown="OpenCollapsible(${counter})" style="display: block;"></i>
                    <i class="fa-solid fa-circle-xmark" tabindex="0" title="Méně informací" onclick="CloseCollapsible(${counter})" onkeydown="CloseCollapsible(${counter})" style="display: none;"></i>
                </div>
                <div class="item-content" style="max-height: 0px;">
                    <div class="item-metadata">
                        <i class="fa-solid fa-star"></i>Hodnocení učitele: <b>${predmet.hodnoceni.ucitel.replace("0","nehodnoceno")}</b> Teoretické výuky: <b>${predmet.hodnoceni.teorie.replace("0","nehodnoceno")}</b> Praktické výuky: <b>${predmet.hodnoceni.praxe.replace("0","nehodnoceno")}</b> <i>(1 - nejlepší, 4 - nejhorší)</i> 
                        <i class="fa-solid fa-calendar-check"></i>Semestr: <b>${predmet.semestr}</b>
                        <i class="fa-solid fa-graduation-cap"></i>Ročník: <b>${predmet.rocnik.sort()}</b>
                        <i class="fa-solid fa-trophy"></i>Kredity: <b>${predmet.kredity}</b>
                        <i class="fa-solid fa-user-group"></i>Kapacita: <b>${predmet.kapacita}</b>
                    </div>
                        <p>${predmet.anotace}</p>
                        <div style="text-align: center;">
                        <a class="hodnoceni" target=_blank href="https://docs.google.com/forms/d/e/1FAIpQLSfh_i6glAXoPUaIfrfmkjUcXeDWEy8Kn9I3qhIoHzkbL8_Ung/viewform?usp=pp_url&entry.1959998708=${encodeURI(predmet.nazev)}">Ohodnotit předmět <i class="fa-solid fa-star"></i></a>
                        </div>
                    </div>
            </div>`
            content = content + output
            counter = counter + 1
        }
        document.getElementById(semestr).innerHTML+=content
        
    }
}
zdrojeBuilder()