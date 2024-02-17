#Parser pro csv soubor s názvem, odkazem, popisem a kategorií jednotlivých zdrojů
# Protože seznam zdrojů se nachází v google tabulkách (to umožnuje jednoduchou spolupráci a sanadný přehled), tak je nutné převést tato data do html
# Zakládní postup je následující Google -> CSV  -> HTML
# Při převodu je nutno zachovat rozdělení dle kategorií a abecední seřazení zdrojů.
# Výsledek je vypsán v terminálu a zároveň zkopírován do schránky

import csv
from datetime import datetime
import pyperclip

PosledniAktualizace = datetime.now().strftime("%d.%m.%Y")


csvSource = open("Assets/Core/Zdroje.csv", "r")
sections = []
csvfile = list(csv.reader(csvSource, delimiter=','))

for row in csvfile:
    if row[3] not in sections:
        sections.append(row[3].capitalize())
    sections = sorted(sections)

ClipBoard =""
for section in sections:
    SekceHtml = '<section class="category-container" title="' + section +'"> <h2 class="category">'+ section + '</h2>'
    print(SekceHtml)
    ClipBoard = ClipBoard + SekceHtml
    Zdroje = []
    for row in csvfile:
        Zdroj = dict(nazev = row[0], odkaz = row[1], popis = row[2], kategorie = row[3], ročník = row[4], jazyk = row[5] )

        if Zdroj["kategorie"] == section:
            Zdroje.append(Zdroj)


    ZdrojeSorted = sorted(Zdroje, key=lambda x: x['nazev'])
    for zdroj in ZdrojeSorted:
        ZdrojHtml = '<div class="link-wrap"><div class="link-header"><a href="' + zdroj["odkaz"] + '" class="link-link" target="_blank">'+ zdroj["nazev"] +'</a><i tabindex="0" class="fa-solid fa-circle-info open-icon" title="Více informací"></i><i tabindex="0" class="fa-solid fa-circle-xmark close-icon" title="Méně informací"></i></div><div class="link-content"><div class="link-metadata-wrap"><div class="link-metadata" title="Jazyk"><i class="fa-regular fa-comment"></i>'+ zdroj["jazyk"] +'</div><div class="link-metadata" title="Ročník"><i class="fa-solid fa-graduation-cap"></i>'+ zdroj["ročník"] +'</div></div><p>'+ zdroj["popis"] +'</p></div></div>'
        print(ZdrojHtml)
        ClipBoard = ClipBoard + ZdrojHtml
    print("</section>")
    ClipBoard = ClipBoard + "</section>"

print('<p class="aktualizace">Poslední aktualizace '+ PosledniAktualizace + '</p>')
ClipBoard = ClipBoard + '<p class="aktualizace">Poslední aktualizace '+ PosledniAktualizace + '</p>'

pyperclip.copy(ClipBoard)
csvSource.close()