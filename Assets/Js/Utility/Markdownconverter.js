var textarea = document.getElementById("MdContents")
textarea.value = '{\nautor: Hynek Janáč\ndatum: 22.02.2026\nkategorie: Anatomie\nnahledovyObrazek: ceta k obrázku\n}\n# Název'

const akce = {
    "nadpis":"## \n",
    "tucny": "**",
    "kurziva": "*",
    "citace":"> ",
    "seznam1": "1. ",
    "seznam2": "- ",
    "kod": "\n```\n",
    "odkaz": "[title](https://www.example.com)",
    "obrazek": "![alt text](image.jpg)",
    "grid": "\n<grid>\n![alt text](image.jpg)\n</grid>",
    "youtube":"<youtube>videoId</youtube>"
}
const okolo = ["tucny","kurziva","kod"]

function importFile(){
    const file = document.getElementById("importFile").files[0]
    const reader = new FileReader()
    reader.addEventListener("load", () =>{
        document.getElementById("MdContents").value = reader.result
    } 
)
    if (file){
        reader.readAsText(file)
}
}

function edit(action){
    const start = textarea.selectionStart
    const konec = textarea.selectionEnd
    const value = textarea.value
    const selected = value.substring(start,konec)
    if (okolo.includes(action)){
        textarea.value = value.substring(0,start) + akce[action] + selected + akce[action] + value.substring(konec) 
    } else{
          textarea.value = value.substring(0,start) + akce[action] + value.substring(konec) 
    }
     
}

function saveProject(){
    let content = textarea.value
    const mdExport = new File([content], 'test.md', {type: 'text/plain'})
    const link = document.createElement('a')
    const url = URL.createObjectURL(mdExport)

    link.href = url
    link.download = mdExport.name
    document.body.appendChild(link)
    link.click()
}

function deleteProject(){
    if (confirm("Jste si jistí, že chece článek smazat?")){
        document.getElementById("MdContents").value = ""
        document.getElementById("Export-Dialog").style.display = "none"
    }
}

function wrapHtml(content, nazev, autor, datum, kategorie, coverImage) {
    // Jedná se o základní obal kódu, při nějaká změně je nutná úprava zd
    return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
      <title>${nazev}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="author" content="Hynek Janáč" />
      <link rel="icon" type="image/x-icon" href="/Assets/Icons/Favicon.ico" />
      <link rel="stylesheet" href="/Assets/Css/Article.css" />
      <link rel="stylesheet" href="/Assets/Css/Universal.css" />
      <script src="/Assets/Js/Utility/Utility.js" defer="defer"></script>
      <script src="/Assets/Js/Utility/Article.js" defer="defer"></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VCGKHBJTPP"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-VCGKHBJTPP');
      </script>
   </head>
   <body>
      <main>
         <div class="imageZoomContainer" id="imageZoomContainer">
            <span tabindex="0" id="imageZoomClose">×</span>
            <div class="imageZoomControls">
                <i class="fa-solid fa-angle-left" tabindex="0" id="controls-left"></i>
                <img class="imageZoomImage" id="imageZoomImage" src="" alt="" />
                <i class="fa-solid fa-angle-right" tabindex="0" id="controls-right"></i>
            </div>
            <p class="imageZoomCaption">Caption</p>
         </div>

         <div class="coverImageWrap">
            <img class="coverImage" src="../Assets/Img/${coverImage}" alt="">
         </div>

         <h1>${nazev}</h1>
         <div class="articleMetadataContainer">
         <a class="articleMetadata MetadataAuthor" href="mailto:medikmap.connect@gmail.com">
            <i class="fa-solid fa-user"></i> ${autor}
         </a>
         <p class="articleMetadata MetadataDate">
            <i class="fa-solid fa-clock"></i> ${datum}
         </p>
         <a class="articleMetadata MetadataCategory" href="/Clanky.html?kategorie=${kategorie}">
            <i class="fa-solid fa-book"></i> ${kategorie}
         </a>
         </div>
         <article>
            ${content}
         </article>
      </main>
   </body>
</html>`;
}

function exportProject(){
// metadata
    let input = textarea.value
    let nazev = input.match(/^#\s(.*$)/m)[1]
    let autor = input.match(/^autor:\s(.*)/m)[1]
    let datum = input.match(/^datum:\s(.*)/m)[1]
    let kategorie = input.match(/^kategorie:\s(.*)/m)[1]
    let coverImage = input.match(/^nahledovyObrazek:\s(.*)/m)[1]
    input = input.replace(/^\{.*\}/gms,"")


    // nadpisy
    input = input.replace(/^# (.*$)/gm, '<h1>$1</h1>')
    input = input.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    input = input.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    // efekty textu
    input = input.replace(/\*\*(.*)\*\*/gm,'<b>$1</b>')
    input = input.replace(/\*(.*?)\*/gm,'<i>$1</i>')
    
    // citát
    input = input.replace(/^>\s(.*)/gm,'<q>$1</q>')

    // odkaz
    input = input.replace(/(?<!\!)\[(.*)]\((.*)\)/gm, '<a href="$2">$1</a>')

    // seznamy
    // První určit zda se jedná o číslovaný nebo odrážkový seznam, pak až vyměním obsahy.
    input = input.replace(/^(\d+\.\s.*(?:\n\d+\.\s.*)*)/gm,"<ol>\n$1\n</ol>")
    input = input.replace(/(^-\s.*(?:\n^- .*))/gm,"<ul>\n$1\n</ul>")
    input = input.replace(/^(\d+\. +|- )(.*$)/gm, "<li>$2</li>")


    // obrázek
    input = input.replace(/\!\[(.*)]\((.*)\)/gm, '<div class="image"><img src="../Assets/Img/$2" alt="$1"><p class="caption">$1</p></div>')
    // galerie
    input = input.replace(/<grid>(.*)<\/grid>/gms,'<div class="imageGrid">$1</div>')
    // youtube
    input = input.replace(/<youtube>(.*)<\/youtube>/gm,'<iframe class="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/$1">')

    // kód
    input = input.replace(/^```(.*)```/gms,'<pre>$1</pre>')
    // odstavce
    input = input.replace(/^(?!<)(.+)$/gm,"<p>$1</p>")
    

    const html = wrapHtml(input ,nazev,autor,datum,kategorie,coverImage)
    console.log(html)
    const ArticleHtmlFile = new File([html],  (nazev.replace(/\s/gm,"-") + '.html'), {type: 'text/plain',})
    const link = document.createElement('a')
    const url = URL.createObjectURL(ArticleHtmlFile)
    
    link.href = url
    link.download = ArticleHtmlFile.name
    document.body.appendChild(link)
    link.click()
}