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
        // Seřadí array Zdroje abecedně podle názvu 
        upraveneZdroje.sort((a, b) => a.nazev.localeCompare(b.nazev));
        let predmety = [... new Set(upraveneZdroje.map(zdroj => zdroj.předmět))];
        predmety.sort() //Seřadí předměty podle abecedy
        
        //Zresetuje wrap
        document.getElementById("Links-Wrap").innerHTML=""
        // Pak dojde k procházení zdrojů jeden po druhém, podle předmětu
        var zdrojeCounter = 0
        for(let i=0; i < predmety.length;i++){
            // Vytvoří se html pro sekci předmětu
            const sekce = document.createElement("section")
            sekce.className = "category-container"
            sekce.id = predmety[i]
            sekce.title= predmety[i]
    
            const sekceNadpis = document.createElement("h2")
            sekceNadpis.textContent = predmety[i]
            sekceNadpis.className = "category"
            sekce.appendChild(sekceNadpis)
            //Vytvoří se for loop pro jednotlivé array 
            let jednotlivci = upraveneZdroje.filter(zdroj => zdroj.předmět == predmety[i])
            for(let z=0; z < jednotlivci.length; z++,zdrojeCounter++){                
                const zdrojWrap = document.createElement("div"); // základní wrapper
                zdrojWrap.classList.add("item-wrap");
    
                const header = document.createElement("div"); // hlavní nadpis
                header.classList.add("item-header");
    
                const nazevAodkaz = document.createElement("a");
                nazevAodkaz.href = jednotlivci[z].odkaz; 
                nazevAodkaz.classList.add("item-link");
                nazevAodkaz.target = "_blank";
                nazevAodkaz.innerHTML = jednotlivci[z].nazev;
    
                const infoIcon = document.createElement("i"); // ikonka ℹ︎
                infoIcon.classList.add("fa-solid", "fa-circle-info");
                infoIcon.setAttribute("tabindex", "0");
                infoIcon.setAttribute("title", "Více informací");
                
                infoIcon.setAttribute("onclick",`OpenCollapsible(${zdrojeCounter})`)
                infoIcon.setAttribute("onkeydown",`OpenCollapsible(${zdrojeCounter})`)
    
                const closeIcon = document.createElement("i"); // ikonka x
                closeIcon.classList.add("fa-solid", "fa-circle-xmark");
                closeIcon.setAttribute("tabindex", "0");
                closeIcon.setAttribute("title", "Méně informací");
                closeIcon.setAttribute("onclick",`CloseCollapsible(${zdrojeCounter})`)
                closeIcon.setAttribute("onkeydown",`CloseCollapsible(${zdrojeCounter})`)
    
                header.appendChild(nazevAodkaz);
                header.appendChild(infoIcon);
                header.appendChild(closeIcon);
    
                const content = document.createElement("div"); // prostor pro metadata a popiske
                content.classList.add("item-content");
    
                const metadata = document.createElement("div"); // metadata
                metadata.classList.add("item-metadata");
    
                const typIkona = document.createElement("i"); // typ zdroje
                typIkona.classList.add("fa-solid", "fa-bookmark");
                const typText = document.createTextNode(jednotlivci[z].typ);
    
                const jazykIkona = document.createElement("i"); // jazyk zdroje
                jazykIkona.classList.add("fa-solid", "fa-comment");
                const jazykText = document.createTextNode(jednotlivci[z].jazyk.join(', '));
    
                const rocnikIkona = document.createElement("i"); // doporučené ročníky
                rocnikIkona.classList.add("fa-solid", "fa-graduation-cap");
                const rocnikText = document.createTextNode("Ročník: " + jednotlivci[z].ročník.join("., "));
    
                metadata.appendChild(typIkona);
                metadata.appendChild(typText);
                
                metadata.appendChild(rocnikIkona);
                metadata.appendChild(rocnikText);
    
                metadata.appendChild(jazykIkona);
                metadata.appendChild(jazykText);
    
                const popis = document.createElement("p"); // popis zdroje
                popis.textContent = jednotlivci[z].popis
                content.appendChild(metadata);
                content.appendChild(popis);
    
                zdrojWrap.appendChild(header);
                zdrojWrap.appendChild(content);
    
                sekce.appendChild(zdrojWrap) // přidání k hlavní sekci předmětu
            }
            let target = document.getElementById("Links-Wrap")
            target.appendChild(sekce)
        }
}
zdrojeBuilder()