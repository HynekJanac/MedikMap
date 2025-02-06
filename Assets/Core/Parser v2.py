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

csvfile = list(csv.reader(csvSource, delimiter=','))



ClipBoard =""

Zdroje = []
for row in csvfile:
    Zdroj = dict(nazev = row[0], odkaz = row[1], popis = row[2], kategorie = row[3], ročník = row[4], jazyk = row[5], typ = row[6] )
    Zdroje.append(Zdroj)
for zdroj in Zdroje:
    ZdrojHtml = '{"nazev": "'+ zdroj["nazev"] +'",\n"odkaz": "'+zdroj["odkaz"]+'",\n"popis": "'+zdroj["popis"]+'",\n"předmět": "'+zdroj["kategorie"]+'",\n"jazyk": '+zdroj["jazyk"]+',\n"ročník": '+zdroj["ročník"]+',\n"typ": "'+zdroj["typ"]+'"},\n'
    print(ZdrojHtml)
    ClipBoard = ClipBoard + ZdrojHtml

pyperclip.copy(ClipBoard)
csvSource.close()