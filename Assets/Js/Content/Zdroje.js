// Návod na přidání nového zdroje
// Zdroj lze přidat kamkoliv do seznamu, stránka ho zařadí do kategorie sama
// Je nutné vyplnit všechny informace ve stanoveném formátu (viz ostatní položky)

let Zdroje = [
   {
  "nazev": " ",
  "odkaz": "https://www.mypathologyreport.ca/cs/",
  "popis": " ",
  "předmět": "Patologie 💀",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "Výukové materiály"
},
  {
  "nazev": "PropdeutikA – LF2",
  "odkaz": "http://new.propedeutika.cz/",
  "popis": "Výukové materiály k propedeutice vnitřního lékařství z 2. Lékařské faukulty, obsahují články k tématům chorobobips, fyzikální vyšetření atd. ",
  "předmět": "Interní propedeutika 🩺",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "Výukové materiály"
},
  {
  "nazev": "Přednášky a výukové materiály LF2",
  "odkaz": "https://patologie.lf2.cuni.cz/vseobecne-lekarstvi/vyukove-materialy",
  "popis": "Záznamy z přednášek patologie z 2. Lékařské fakulty a další materiály.",
  "předmět": "Patologie 💀",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "Přednášky"
},
  {
  "nazev": "Obvazová technika",
  "odkaz": "https://www.youtube.com/watch?v=QXkmfZR3tcQ&list=PLckO12CLqdz3ff6eu6U4TfAJq6GO_3bcV",
  "popis": "Videa základních obvazových techniky",
  "předmět": "Chirurgická propedeutika 🔪",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "Youtube playlist"
},
  {
  "nazev": "Přednášky a výukové materiály LF2",
  "odkaz": "https://fyziologie.lf2.cuni.cz/vseobecne-lekarstvi/vyukove-materialy",
  "popis": "Záznamy z přednášek fyziologie z 2. Lékařské fakulty a další materiály.",
  "předmět": "Fyziologie 💧",
  "jazyk": ["Čeština"],
  "ročník": [2],
  "typ": "Přednášky"
},
   {
  "nazev": "Testy z patologické fyziologie",
  "odkaz": "https://www.wikiskripta.eu/w/Port%C3%A1l:Procvi%C4%8Dov%C3%A1n%C3%AD_patofyziologie",
  "popis": "Interaktivní cvičné testy z patologické fyziologie na wikiskriptech, skvělé k vlastní kontrole nabitých znalostí.",
  "předmět": "Patofyziologie 💔",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "WikiSkripta"
},
  {
  "nazev": "Atlas makroskopické patologické anatomie",
  "odkaz": "https://lf1.smartzoom.com/s8/course10/f24/f25/",
  "popis": "Atlas makroskopické obecné patologie, obsahuje snímky s popisky jednotlivých nálezů.",
  "předmět": "Patologie 💀",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "Virtuální mikroskop"
},
  {
  "nazev": "Přednášky 1LF UK",
  "odkaz": "https://www.medicalmedia.eu/cs/media/3f95c29e1b8c4e4aa08b7bda949f65c0/54410103764d4dc7ab2337f5267e1ef9",
  "popis": "Záznamy přednášek z propedeutiky vnitřního lékařství.",
  "předmět": "Interní propedeutika 🩺",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "MedicalMedia playlist"
},
    {
  "nazev": " ⭐️ Kurz histologie MedikMap",
  "odkaz": "/Kurz-histologie.html",
  "popis": "Online výukový kurz zaměření na histologii, rozdělen do tématických celků s doporučenými materiály a souhrnými kvízy. ",
  "předmět": "Histologie 🔬",
  "jazyk": ["Čeština"],
  "ročník": [1],
  "typ": "MedikMap kurz"
},
    {
  "nazev": "Webináře z chirugické propedeutiky",
  "odkaz": "https://www.youtube.com/watch?v=Qldcx4j8sfc&list=PLE9pe8e7_OMw1KMs9ay4HnkaSqMtKvQ3j",
  "popis": "Webináře chirugické propedeutiky od doktora Jana Pastora",
  "předmět": "Chirurgická propedeutika 🔪",
  "jazyk": ["Čeština"],
  "ročník": [3],
  "typ": "YouTube playlist"
},
    {
  "nazev": "Anatomie - Jan Pastor",
  "odkaz": "https://www.youtube.com/playlist?list=PLE9pe8e7_OMwb4Hm8VfnD7UsDcO5o5WjX",
  "popis": "Webináře z anatomie od doktora Jana Pastora.",
  "předmět": "Anatomie 🫀",
  "jazyk": ["Čeština"],
  "ročník": [1],
  "typ": "Přednášly"
},
{
  "nazev": "Anatomie - Jiří Beneš",
  "odkaz": "https://www.youtube.com/watch?v=u-uqQiDviAg&list=PLgGmZrDa3cFNhaFBVDgYKuNBUL47Nijt7",
  "popis": "Přednášky z anatomie od doktora Jiřího Beneše.",
  "předmět": "Anatomie 🫀",
  "jazyk": ["Čeština"],
  "ročník": [1],
  "typ": "Přednášky"
},
    {
  "nazev": "Zimní pitevna LF3",
  "odkaz": "https://www.youtube.com/@zimnipitevna3LF/videos",
  "popis": "Videodemonstrace topografických útvarů zimní pitevny. ",
  "předmět": "Anatomie 🫀",
  "jazyk": ["Čeština"],
  "ročník": [1],
  "typ": "YouTube kanál"
},
    {
  "nazev": "⭐️ Ošetřovatelské postupy FZS TUL",
  "odkaz": "https://www.youtube.com/playlist?list=PLlRBRonUT-haniD94Tx6t5U2ErZs5DnnK",
  "popis": "Velmi kvalitně (možná až příliš) natočeny, základní ošetřovatelské postupy. Bohužel bez slovního komentáře.",
  "předmět": "Ošetřovatelství 💉",
  "jazyk": ["Česky"],
  "ročník": [2],
  "typ": "YouTube videa"
    },
    {
        "nazev": "Atlas řezů mozkem",
        "odkaz": "https://www.nan.upol.cz/atlas-mozku/",
        "popis": "Interaktivní atlas řezů mozkem, s možností vlastního zkoušení. ",
        "předmět": "Anatomie 🫀",
        "jazyk": ["Čeština","English"],
        "ročník": [1],
        "typ": "Webová stránka"
      },
    {
        "nazev": "Národní ošetřovatelské postupy",
        "odkaz": "https://mzd.gov.cz/narodni-osetrovatelske-postupy/",
        "popis": "Oficiální ošetřovatelské postupy ministerstva zdravotnictví ČR, web obsahuje detailně popsané doporučené postupy při provádění ošetřovatelských výkonů.",
        "předmět": "Ošetřovatelství 💉",
        "jazyk": ["Čeština"],
        "ročník": [2],
        "typ": "Webová stránka"
      },
    {
        "nazev": "LF2 Prezentace",
        "odkaz": "https://anatomie.lf2.cuni.cz/vseobecne-lekarstvi/vyukove-materialy",
        "popis": "Prezentace z přednášek a další doplňkové výukové materiály anatomického ústavu 2. lékařské fakulty Univerzity Karlovy.",
        "předmět": "Anatomie 🫀",
        "jazyk": ["Čeština"],
        "ročník": [1],
        "typ": "Prezentace"
      },
    {
        "nazev": " ⭐️ Ošetřovatelské postupy",
        "odkaz": "https://www.youtube.com/@osetrovatelskepostupy/videos",
        "popis": "YouTube kanál Všeobecné fakultní nemocnice, ukazující správné provedení běžných ošetřovatelských výkonů.",
        "předmět": "Ošetřovatelství 💉",
        "jazyk": ["Čeština"],
        "ročník": [2],
        "typ": "YouTube kanál"},
    {
        "nazev": " ⭐️ Přehled témat k letní pitevně",
        "odkaz": "https://docs.google.com/document/d/1j_zVU4xXUgUL6zmkXyYZyD5DqEZ5dAeiL6yBFxkoVzk/edit?usp=sharing",
        "popis": "Dokument s uceleným přehledem doporučených znalostí k letní pitevně.",
        "předmět": "Anatomie 🫀",
        "jazyk": ["Čeština"],
        "ročník": [1],
        "typ": "Dokument"},
    {
        "nazev": " ⭐️ Přehled témat k zimní pitevně",
        "odkaz": "https://docs.google.com/document/d/1Ct4nWM1yJ0CZmGdhZYfWJn_Wyzizu6F6LJFEg2GmG6o/edit?usp=sharing",
        "popis": "Dokument s uceleným přehledem doporučených znalostí k zimní pitevně.",
        "předmět": "Anatomie 🫀",
        "jazyk": ["Čeština"],
        "ročník": [1],
        "typ": "Dokument"},
        
    {
        "nazev": "Příklady z lékařské genetiky",
        "odkaz": "https://www.wikiskripta.eu/w/Procvičování:Příklady_z_lékařské_genetiky",
        "popis": "Příklady k procvičení znalostí lékařské genetiky na WikiSkriptech.",
        "předmět": "Biologie a genetika 🧬",
        "jazyk": ["Čeština"],
        "ročník": [1,2],
        "typ": "Testy"},
    {
        "nazev": " ⭐️ Physeo – Bakterie",
        "odkaz": "https://youtube.com/playlist?list=PLfJxXWqsLMw_D72oHzNk9YI0vukZzQY9V&si=h1wKr9-LM4KEZwRz",
        "popis": "Videa popisující charakteristiky jednotlivých bakterií, pomocí kresby. Každá bakterie má svoji scénu, na které jsou pomocí metafor znázorněné její vlastnosti (fialové pozadí = G+ bakterie...). Tento styl videí je zábavnější a snadněji zapamatovatelný způsob jak se jednotlivé bakterie naučit.",
        "předmět": "Mikrobiologie 🧫",
        "jazyk": ["English"],
        "ročník": [2,3],
        "typ": "YouTube"},

    {"nazev": " ⭐️ Physeo – Viry",
        "odkaz": "https://youtube.com/playlist?list=PLfJxXWqsLMw-mM4PT-EjFSMsfh1vdFcJA&si=byXYKphbl7SGoHKX",
        "popis": "Videa popisující charakteristiky jednotlivých virů, pomocí kresby. Každý virus má svoji scénu, na které jsou pomocí metafor znázorněné jeho vlastnosti (fialové pozadí = DNA virus.). Tento styl videí je zábavnější a snadněji zapamatovatelný způsob jak se jednotlivé viry naučit.",
        "předmět": "Mikrobiologie 🧫",
        "jazyk": ["English"],
        "ročník": [2,3],
        "typ": "YouTube"},

    {"nazev": " ⭐️ Physeo – Paraziti",
        "odkaz": "https://youtube.com/playlist?list=PLfJxXWqsLMw-_x_DornZ5kgyd5xTZZ4ur&si=RtAoq9otVTHus4yu",
        "popis": "Videa popisující charakteristiky jednotlivých parazitů, pomocí kresby. Každý parazit má svoji scénu, na které jsou pomocí metafor znázorněné jeho vlastnosti.Tento styl videí je zábavnější a snadněji zapamatovatelný způsob jak se jednotlivé bakterie naučit.",
        "předmět": "Mikrobiologie 🧫",
        "jazyk": ["English"],
        "ročník": [2,3],
        "typ": "YouTube"},

    {"nazev": " ⭐️ Biochemie  – Anki",
        "odkaz": "https://drive.google.com/file/d/1METZt7hYeBPoZ8w0ponTBqjkBenXt3_X/view?usp=sharing",
        "popis": "Anki balíček biochemie podle výuky 1. paralelky 1.LF, balíček je stále v aktivní tvorbě, pro dostupnost aktualizací zkontrolujte popisek hlavního balíčku. Obsahuje kartičky na vzorce požadované u zkouškového testu, balíček na názvy enzymů v jednotlivých krocích metabolismu a postupně se přidají další.",
        "předmět": "Biochemie ⚗️",
        "jazyk": ["Čeština"],
        "ročník": [2],
        "typ": "Anki balíček"},

    {"nazev": " ⭐️ Anatomie – Anki",
    "odkaz": "https://drive.google.com/file/d/1YHY-Z3AkWFoBZdrW0UnOQ6sGBMhNZmcO/view?usp=sharing",
    "popis": "Asi nejlepší Anki balíček na anatomii, obsahuje popsané obrázky z učebnice Anatomie 1,2,3 od profesora Čiháka, balíček je rozdělen tak, aby kopíroval postup výuky.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Anki balíček"},
    
    {"nazev": " ⭐️ Ústav Anatomie LF2",
    "odkaz": "https://www.youtube.com/c/%C3%9Astavanatomie2LFUK",
    "popis": "V době distanční výuky nahrál Ústav Anatomie LF2 své přednášky na YouTube, přednáší pan profesor David Kachlík. Na rychlosti 1,5x se jedná o perfektní úvod do jednotlivých systémů, zvlášť pokud se někomu špatně učí z učebnice.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Anatom.cz",
    "odkaz": "https://anatom.cz/",
    "popis": "Doprovodná webová stránka k Memorix anatomii, umožňuje prozkoušet své znalosti anatomických struktur na dobře známých schématech.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Databáze snímků ze zobrazovacích metod na webu Anatomického ústavu",
    "odkaz": "https://anat.lf1.cuni.cz/materialy/zobrazeni.php",
    "popis": "Databáze radiologických snímků vhodná pro procvičení rozpoznávání anatomických struktur, průběžné testy navíc tyto snímky často používají. ",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Neuroanatomie",
    "odkaz": "https://publi.cz/books/219/index.html?secured=false#Cover",
    "popis": "Online učebnice neuroanatomie z LFHK, poskytuje studijní materiál a zároveň zajišťuje zpětnou vazbu v podobě testů.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Neuroanatomie UPOL",
    "odkaz": "https://www.nan.upol.cz/neuro/index.html",
    "popis": "Neuroanatomie LF UPOL",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": " ⭐️ Schémata z embryologie LFP",
    "odkaz": "https://www.youtube.com/playlist?list=PL1VZpcaQ43L2LE0MgeERAHMUm4wNXgTu5",
    "popis": "Krátká videa z LFP, vysvětlující vývoj jednotlivých systémů pomocí jednoduchých schémat.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Skelet 3D",
    "odkaz": "http://skelet3d.lf3.cuni.cz/index.xhtml",
    "popis": "3D Atlas kostí, sice žádná hitparáda, ale lze otevřít zadarmo v prohlížeči.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Úvod do CNS – LF3",
    "odkaz": "http://www.cnsonline.cz/",
    "popis": "Cílem tohoto kurzu je především usnadnit studentům první kroky v džungli, kterou CNS představuje. ",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "3LF Letní pitevna",
    "odkaz": "https://web.archive.org/web/20180828191307/http://topografietela.cz/index.html",
    "popis": "Interaktivní portál topografické anatomie na letní pitvení cvičení, obsahuje část výkladovou, ale také testovou, kde můžete ověřit své znalosti. Výkladovou část lze stáhnout jako skripta ve formátu pdf.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Skripta"},
    {"nazev": " ⭐️ Skripta na letní pitevnu LF3",
        "odkaz": "https://drive.google.com/file/d/19S7E9CcpIX6O52sp6gX3x2iHk1X99zj9/view?usp=sharing",
        "popis": "Skripta na letní pitevnu ve formátu PDF.",
        "předmět": "Anatomie 🫀",
        "jazyk": ["Čeština"],
        "ročník": [1],
        "typ": "Skripta"},
    
    {"nazev": " ⭐️ Topografická anatomie LF3",
    "odkaz": "https://web.archive.org/web/20250207091403/http://anatomie.lf3.cuni.cz/prezentace_topografie.htm",
    "popis": "Soubor prezentací z topografické anatomie, obsahuje přehledná schémata a informace o topografických útvarech.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština", "English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Studijní materiály LF3",
    "odkaz": "https://web.archive.org/web/20250216091052/http://anatomie.lf3.cuni.cz/studijnimaterialy.htm",
    "popis": "Studijní materiály pro studium anatomie od prof. Kachlíka. Přehledné tabulky a schémata.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["Čeština", "English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Anatomy Learning",
    "odkaz": "https://anatomylearning.com/",
    "popis": "3D Anatomický atlas, který je zdarma a funguje i v prohlížeči.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Anatomy Standard",
    "odkaz": "https://www.anatomystandard.com/",
    "popis": "Interaktivní anatomické ilustrace, za použití kvalitních 3D modelů",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Gray's Anatomy – 1918",
    "odkaz": "https://www.bartleby.com/lit-hub/anatomy-of-the-human-body/",
    "popis": "Digitalizované vydání původní Grayovy Anatomie, spíše pro nadšence do historie anatomie.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Radiology Web Lab",
    "odkaz": "http://uwmsk.org/",
    "popis": "Interaktivní CT řezy, pokud si chcete do podrobna prozkoumat např. os temporale, je tato stránka skvělá.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Radiopaedia",
    "odkaz": "https://radiopaedia.org/?lang=us",
    "popis": "Radiologická wikipedie, velká databáze radiologických snímků.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Sam Webster",
    "odkaz": "https://www.youtube.com/@SamWebster",
    "popis": "Britský anatom, který převážně využívá anatomické modely, tato prezentace umožní jednodušeji pochopit vzájemné vztahy jednotlivých struktur.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Youtube"},
    
    {"nazev": "Terminologia Anatomica 2.0",
    "odkaz": "https://ta2viewer.openanatomy.org/",
    "popis": "Nástroj na prohledávání kodifikovaného názvosloví anatomie Terminologia Anatomica 2.0, dá se využít k ověření správnosti anatomických názvů + poskytuje užitečné odkazy k dalšímu studiu.",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},

    
    {"nazev": "UBC Neuroanatomy",
    "odkaz": "http://www.neuroanatomy.ca",
    "popis": "Portál úvodu do neuroanatomie Univerzity Britské Kolumbie, obsahuje kvalitní videa a interaktivní řezy mozkem",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "About Medicine",
    "odkaz": "https://www.youtube.com/@aboutmedicine",
    "popis": "Videa usnadňující představu anatomických struktur a jejich vzájemných vztahů pomocí zjednodušených 3D schémat",
    "předmět": "Anatomie 🫀",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Biofyzika – Anki",
    "odkaz": "https://drive.google.com/file/d/1gSv97JcKxVXFwmSba6uk-EsLEVMuB7tl/view?usp=sharing",
    "popis": "Balíček sloužící  k přípravě na zápočtový test a následnou zkoušku z biofyziky. Je rozdělen do tématických okruhů, obsahuje otázky, diagramy a vzorečky (POZOR! nesklouzněte k pouhému memorování vzorců, zkoušející spíš zajímá jestli daným vzorcům rozumíte, proto jsou kartičky na ně postaveny formou otázek) ",
    "předmět": "Biofyzika ⚙️",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Principy zobrazovacích metod",
    "odkaz": "https://radio.lf1.cuni.cz/prope",
    "popis": "Radiodiagnostická klinika 1. LF UK má na svých stránkách dostupné komentované prezentace vysvětlující princip jednotlivých zobrazovacích metod. Pro biofyziku je užitečný popis fungování RTG, CT, ultrazvuku a MRI. ",
    "předmět": "Biofyzika ⚙️",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Feynmanovy přednášky z fyziky",
    "odkaz": "https://www.feynmanlectures.caltech.edu/",
    "popis": "Webová verze Feynmanových přednášek z fyziky, Richard Feynman vynikal svojí schopností vysvětlit složité fyzikální koncepty tak, aby byly snadné na pochopení. Určená ale výhradně pro nadšence do fyziky, protože obsahově zdaleka překračuje hloubku a podrobnosti požadovaných znalostí.",
    "předmět": "Biofyzika ⚙️",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "MRI basics – videa",
    "odkaz": "https://www.youtube.com/watch?v=pcyfvwnHddA&list=PL4E0ELDXZF56f1hSER--o-moNmTwgPiII",
    "popis": "Za nás nejlepší série videí na naučení principu magnetické rezonance.",
    "předmět": "Biofyzika ⚙️",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Prezentace a další studijní materiály ULBLD",
    "odkaz": "http://biochemie.euweb.cz/",
    "popis": "Prezentace a studijní materiály ústavu ULBLD od prof. Navrátila, obsahuje hlavně prezentace pro zimní semestr",
    "předmět": "Biochemie ⚗️",
    "jazyk": ["Čeština", "English"],
    "ročník": [2],
    "typ": "Webová stránka"},
    
    {"nazev": "Přednášky z biochemie 3LF",
    "odkaz": "https://www.youtube.com/@jantrnka227",
    "popis": "Videopřednášky z lékařské biochemie od doc. Jana Trnky z 3. lékařské fakulty.",
    "předmět": "Biochemie ⚗️",
    "jazyk": ["Čeština", "English"],
    "ročník": [2],
    "typ": "YouTube"},
    
    {"nazev": "Metabolické dráhy - ROCHE",
    "odkaz": "https://web.archive.org/web/20230614121818/http://biochemical-pathways.com/#/map/1",
    "popis": "Obrovské schéma všech metabolických drah ve vzájemném kontextu ",
    "předmět": "Biochemie ⚗️",
    "jazyk": ["English"],
    "ročník": [2],
    "typ": "Webová stránka"},
    
    {"nazev": "Genetika-biologie.cz",
    "odkaz": "http://www.genetika-biologie.cz/",
    "popis": "Stránka doktora Antonína Šípka mladšího, obsahuje základy lékařské genetiky, cvičné testy, a pomůcky k praktickým cvičením",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["Čeština"],
    "ročník": [1, 2],
    "typ": "Webová stránka"},
    
    {"nazev": "Vrozene-vady.cz",
    "odkaz": "http://www.vrozene-vady.cz/",
    "popis": "Stránka doktora Antonína Šípka mladšího, obsahuje prezentace pokrývající základy teratologie",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["Čeština"],
    "ročník": [1, 2],
    "typ": "Webová stránka"},
    
    {"nazev": "Řešené příklady z obecné genetiky",
    "odkaz": "https://is.muni.cz/do/1499/el/estud/prif/ps07/genetika/texty/index.html",
    "popis": "Jedná se o sadu základních příkladů z lékařské genetiky, výhodou je, že příklady obsahují vzorová řešení.",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["Čeština"],
    "ročník": [1, 2],
    "typ": "Webová stránka"},
    
    {"nazev": "Učebnice DNA diagnostiky",
    "odkaz": "https://kolweb.lf2.cuni.cz/Projekty/prusa-dna/newlook/defa.htm",
    "popis": "Multimediální učebnice DNA diagnostiky od 2.LF, jedná se o projekt z roku 1998, takže nečekejte nejnovější informace, jsou tady detailně probrány postupy základních technik DNA diagnostiky.",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["Čeština"],
    "ročník": [1, 2],
    "typ": "Webová stránka"},
    
    {"nazev": " ⭐️ Biologie a genetika – Anki",
    "odkaz": "https://drive.google.com/file/d/1rSCO5MvFyjRBsddgdqVSi_uXo8_u29S0/view?usp=sharing",
    "popis": "Anki balíček biologie a genetiky pro 1.LF samotný k výuce určitě nestačí, ale k zopakování například umístění genů atd. se hodí.",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["Čeština"],
    "ročník": [1, 2],
    "typ": "Anki balíček"},
    
    {"nazev": "OMIM",
    "odkaz": "https://www.omim.org/",
    "popis": "Online databáze lidských genů a genetických chorob. Určen spíš pro rychlé vyhledání informací o genetických chorobách (typ dědičnosti...)",
    "předmět": "Biologie a genetika 🧬",
    "jazyk": ["English"],
    "ročník": [1, 2],
    "typ": "Webová stránka"},
    
    {"nazev": "Úvod do Fyziologie člověka",
    "odkaz": "https://fyziebook.lf1.cuni.cz/",
    "popis": "Online video učebnice fyziologie od prof. Kittnara. Obsahuje krátká názorná videa vysvětlující základní fyziologické principy.",
    "předmět": "Fyziologie 💧",
    "jazyk": ["Čeština"],
    "ročník": [2],
    "typ": "Webová stránka"},
    
    {"nazev": " ⭐️ EKG simulace",
    "odkaz": "https://www.skillstat.com/ecg-sim/",
    "popis": "Online simulátor EKG, obsahuje databázi rytmů s podrobným popisem a interaktivní kvíz.",
    "předmět": "Fyziologie 💧",
    "jazyk": ["English"],
    "ročník": [2],
    "typ": "Webová stránka"},
    
    {"nazev": " ⭐️ Procvičování z histologie – Wikiskripta",
    "odkaz": "https://www.wikiskripta.eu/w/Procvi%C4%8Dov%C3%A1n%C3%AD:Testy_z_histologie",
    "popis": "Na Wikiskriptech jsou také cvičné testy, vhodné pro procvičení před průběžným nebo zápočtovým testem.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Histologický atlas LF MU",
    "odkaz": "https://is.muni.cz/do/rect/el/estud/lf/js18/histologie_atlas/web/index.html",
    "popis": "Jedná se o anotované obrázky preparátů LF MU, oproti virtuálním mikroskopům umožní jednoduší orientaci a lze jej otevřít v prohlížeči.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Histologický atlas LF2 UK",
    "odkaz": "https://histo-atlas.eu/",
    "popis": "Histologický atlas LF2 UK, obsahuje virtuální mikroskop s popisem jednotlivých preparátů",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Ústav histologie a embryologie LFP UK",
    "odkaz": "https://www.youtube.com/@ustavhistologieaembryologi5741",
    "popis": "YouTube kanál Ústavu histologie a embryologie LFP UK, obsahuje spoustu užitečných a přehledných schémat z histologie a embryologie.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Video popisy histologických preparátů z LFP",
    "odkaz": "https://www.youtube.com/playlist?list=PL1VZpcaQ43L1Yu-uNZowbddqm5CPn5urA",
    "popis": "Několikaminutová výuková videa z LFP, dobrá pro pochopení toho, co má člověk na preparátu rozpoznat.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "Virtuální mikroskop – LF3",
    "odkaz": "https://slides.lf3.cuni.cz/",
    "popis": "Databáze virtuálních preparátů LF3. – vyžaduje přihlášení přes CAS",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Wikiskripta – Mikroskop",
    "odkaz": "https://mikroskop.wikiskripta.eu/",
    "popis": "Virtuální mikroskop na Wikiskriptech, je dostupný v prohlížeči, bohužel kategorizace preparátů není nejlepší a né všechny preparáty jsou anotované.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Schémata z histologie",
    "odkaz": "https://www.youtube.com/playlist?list=PL1VZpcaQ43L1tZnvf9bZ2qQxXR6kt_XPl",
    "popis": "Kreslená histologická schémata z LFP, usnadňují představu jednotlivých struktur",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": " ⭐️ Histologie a embryologie – Anki",
    "odkaz": "https://drive.google.com/file/d/1yBaY2Jn7DuFrXxtmq3bAxcv9AeW20Frq/view?usp=sharing",
    "popis": "Souhrný Anki balíček určený posluchačům histologie a obecné embryologie na 1.LF",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Anki balíček"},
    
    {"nazev": " ⭐️ LFP – Histologický atlas – SmartZoom ",
    "odkaz": "https://lfp.smartzoom.com",
    "popis": "Histologická platforma LFP, jedná se o nejlepší český online mikroskop/atlas. Obsahuje velmi dobře anotované preparáty z obecné a speciální histologie, k používání je nutná registrace.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština", "English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Interaktivní embryologický atlas - MUNI",
    "odkaz": "https://is.muni.cz/do/rect/el/estud/lf/ps15/atlas/web/index.html",
    "popis": "Interaktivní embryologický atlas od Masarykovy univerzity. Obsahuje výklad embryologických řezů a každá kapitola je opatřena procvičováním.",
    "předmět": "Histologie 🔬",
    "jazyk": ["Čeština", "English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "FFix it!",
    "odkaz": "https://www.youtube.com/channel/UCfbcnP185VNy9QywFMPQBjw",
    "popis": "YouTube kanál Andrey Felšöové, věnuje se histologii a patologii",
    "předmět": "Histologie 🔬",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": "HistologyGuide",
    "odkaz": "https://histologyguide.com/",
    "popis": "Skvělá databáze anotovaných histologických preparátů, pokud vám nevyhovuje OlyVia nebo si ji jako uživatel Macu nemůžete stáhnout, případně si chcete pouze prohlédnout více preparátů, bude pro Vás Histology guide výbornou alternativou.",
    "předmět": "Histologie 🔬",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Histology Drawings",
    "odkaz": "https://histologydrawings.blogspot.com/",
    "popis": "Histologická schématka, poskytují dostatečné zjednodušení histologické stavby jednotlivých orgánů.",
    "předmět": "Histologie 🔬",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Andrea Felšöová",
    "odkaz": "https://www.youtube.com/channel/UCYvSIOkPeo3TqaxdacRKC9w/videos",
    "popis": "YouTube kanál Andrey Felšöové, věnuje se hlavně histologii",
    "předmět": "Histologie 🔬",
    "jazyk": ["Slovenština"],
    "ročník": [1],
    "typ": "YouTube"},
    
    {"nazev": " ⭐️ Latina – Anki LF1",
    "odkaz": "https://udl.lf1.cuni.cz/slovni-zasoba-pro-studenty-lek",
    "popis": "Oficiální Anki balíček Ústavu dějin lékařství a cizích jazyků LF1 – jedná se doporučenou slovní zásobu na zkoušku z lékařské terminologie. ",
    "předmět": "Latina 📚",
    "jazyk": ["Čeština"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Latin Is Simple",
    "odkaz": "https://www.latin-is-simple.com/",
    "popis": "Jednoduchý a moderní slovník latiny, umožňuje snadné vyhledávání jednotlivých slov a jejich skloňování.",
    "předmět": "Latina 📚",
    "jazyk": ["English"],
    "ročník": [1],
    "typ": "Webová stránka"},
    
    {"nazev": "Mikrobiologický atlas",
    "odkaz": "https://www.med.muni.cz/mikroblg/atlas/index_cs.htm",
    "popis": "Mikrobiologický atlas MUNI, obsahuje fotografie jednotlivých kultur",
    "předmět": "Mikrobiologie 🧫",
    "jazyk": ["Čeština"],
    "ročník": [2,3],
    "typ": "Webová stránka"},
    
    {"nazev": "Základy mikrobiologie",
    "odkaz": "http://mikrobiologie.lf3.cuni.cz/mikrobiologie-nova/",
    "popis": "Přestože se jedná o web určený primárně pro bakaláře, tak obsahuje užitečné základy mikrobiologie od oběru přes zpracování a identifikaci kultur.",
    "předmět": "Mikrobiologie 🧫",
    "jazyk": ["Čeština"],
    "ročník": [2,3],
    "typ": "Webová stránka"},
    
    {"nazev": "Microbe Canvas",
    "odkaz": "https://www.microbe-canvas.com/",
    "popis": 'Takový "google" pro mikroby, je zde možné vyhledávat v databázi mikrobů podle názvu, či charakteristik.',
    "předmět": "Mikrobiologie 🧫",
    "jazyk": ["English"],
    "ročník": [2,3],
    "typ": "Webová stránka"},
    
    {"nazev": "Parazitologický atlas",
    "odkaz": "http://mikrobiologie.lf3.cuni.cz/parazitologie-nova/",
    "popis": "Parazitologický atlas z 3.LF, hezky rozdělené preparáty s popisky v angličtině",
    "předmět": "Mikrobiologie 🧫",
    "jazyk": ["English"],
    "ročník": [2,3],
    "typ": "Webová stránka"},
    
    {"nazev": "Anki balíčky českých z lékařských fakult",
    "odkaz": "http://anki-update-check.4fan.cz/browse",
    "popis": "Veřejné Anki balíčky od ostatních mediků s možností podpory aktualizací",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["Čeština"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "Wikiskripta",
    "odkaz": "https://www.wikiskripta.eu/w/Home",
    "popis": "Stránka, kterou nepochybně znáte, online zdroj pro mediky číslo jedna, obsahuje převážně výukové články, ale také virtuální mikroskop, procvičování (často opomíjené online testy, např. u histologie skvělý trénink na zápočet), kalkulačky a mnoho další. Je vhodné projít a využívat všechny dostupné funkce wikiskript. (Navštivte naši sekci návody)  ",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["Čeština"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "Medical Media",
    "odkaz": "https://www.medicalmedia.eu/cs",
    "popis": "Platforma pro distanční výuku, jsou zde záznamy přednášek z lékařských fakult v ČR. Zejména vhodné na zhlédnutí biofyzikálních přednášek, třeba před zkouškou.",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["Čeština", "English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "Anki",
    "odkaz": "https://apps.ankiweb.net/",
    "popis": "Desktopový program na tvorbu flashcards, je zcela zdarma a open source, jedná se o složitější program, který vyžaduje trochu času, ale je neskutečně flexibilní. (Koukni se do sekce návody) ",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "OpenStax",
    "odkaz": "https://openstax.org/subjects/science",
    "popis": "Projekt OpenSource učebnic, anglické učebnice volně ke stažení.",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "PubMed",
    "odkaz": "https://pubmed.ncbi.nlm.nih.gov/",
    "popis": "Vyhledávač odborných lékařských článků",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "Quizlet",
    "odkaz": "https://quizlet.com/",
    "popis": "Webový ekvivalent k Anki, umožňuje snadné sdílení balíčků a má jednodušší rozhraní, bohužel pokročilé funkce jsou zamčené pod předplatným. ",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    {"nazev": "NinjaNerd",
    "odkaz": "https://www.youtube.com/@NinjaNerdOfficial",
    "popis": "Detailní výuková medicínská videa, vysvětlující složité koncepty pomocí jednoduchých schémat.",
    "předmět": "Síň slávy ⭐️",
    "jazyk": ["English"],
    "ročník": ["Všechny"],
    "typ": "Webová stránka"},
    
    ]
    
    
    //–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    
    // Seřadí array Zdroje abecedně podle názvu 
    Zdroje.sort((a, b) => a.nazev.localeCompare(b.nazev));
    
    
    // První for loop zjistí k kterým předmětům (anatomie, histologie...) zdroje patří
    let predmety = [];
    
    // Pokud v seznamu není je název předmětu přidán
    for(a=0; a < Zdroje.length; a++){
        if (predmety.includes(Zdroje[a].předmět) == false){
            predmety.push(Zdroje[a].předmět)
        }
    }
    predmety.sort() //Seřadí předměty podle abecedy
    
    // Pak dojde k procházení zdrojů jeden po druhém, podle předmětu
    for(i=0; i < predmety.length;i++){
        // Vytvoří se html pro sekci předmětu
        const sekce = document.createElement("section")
        sekce.className = "category-container"
        sekce.id = predmety[i]
        sekce.title= predmety[i]

        const sekceNadpis = document.createElement("h2")
        sekceNadpis.textContent = predmety[i]
        sekceNadpis.className = "category"
        sekce.appendChild(sekceNadpis)
        //Vytvoří se for loop pro jednotlivé array Zdroje
        for(z=0; z < Zdroje.length; z++){
            //Pokud zdroj souhlasí se zvoleným předmětem postoupí se k tvorbě html kódu
            if(predmety[i] == Zdroje[z].předmět){
                const zdrojWrap = document.createElement("div"); // základní wrapper
                zdrojWrap.classList.add("item-wrap");
    
                const header = document.createElement("div"); // hlavní nadpis
                header.classList.add("item-header");
    
                const nazevAodkaz = document.createElement("a");
                nazevAodkaz.href = Zdroje[z].odkaz; 
                nazevAodkaz.classList.add("item-link");
                nazevAodkaz.target = "_blank";
                nazevAodkaz.innerHTML = Zdroje[z].nazev;
    
                const infoIcon = document.createElement("i"); // ikonka ℹ︎
                infoIcon.classList.add("fa-solid", "fa-circle-info");
                infoIcon.setAttribute("tabindex", "0");
                infoIcon.setAttribute("title", "Více informací");
    
                const closeIcon = document.createElement("i"); // ikonka x
                closeIcon.classList.add("fa-solid", "fa-circle-xmark");
                closeIcon.setAttribute("tabindex", "0");
                closeIcon.setAttribute("title", "Méně informací");
    
                header.appendChild(nazevAodkaz);
                header.appendChild(infoIcon);
                header.appendChild(closeIcon);
    
                const content = document.createElement("div"); // prostor pro metadata a popiske
                content.classList.add("item-content");
    
                const metadata = document.createElement("div"); // metadata
                metadata.classList.add("item-metadata");
    
                const typIkona = document.createElement("i"); // typ zdroje
                typIkona.classList.add("fa-solid", "fa-bookmark");
                const typText = document.createTextNode(Zdroje[z].typ);
    
                const jazykIkona = document.createElement("i"); // jazyk zdroje
                jazykIkona.classList.add("fa-solid", "fa-comment");
                const jazykText = document.createTextNode(Zdroje[z].jazyk.join(', '));
    
                const rocnikIkona = document.createElement("i"); // doporučené ročníky
                rocnikIkona.classList.add("fa-solid", "fa-graduation-cap");
                const rocnikText = document.createTextNode("Ročník: " + Zdroje[z].ročník.join("., "));
    
                metadata.appendChild(typIkona);
                metadata.appendChild(typText);
                
                metadata.appendChild(rocnikIkona);
                metadata.appendChild(rocnikText);
    
                metadata.appendChild(jazykIkona);
                metadata.appendChild(jazykText);
    
                const popis = document.createElement("p"); // popis zdroje
                popis.textContent = Zdroje[z].popis
                content.appendChild(metadata);
                content.appendChild(popis);
    
                zdrojWrap.appendChild(header);
                zdrojWrap.appendChild(content);
    
                sekce.appendChild(zdrojWrap) // přidání k hlavní sekci předmětu
            }
        }
        let target = document.getElementById("Links-Wrap")
        target.appendChild(sekce)
    }