// Articlewriter.js is in charge of creating HTML code for article usign GUI.
// the way it works is that User clicks buttons what element he wants to include in the article, then the script creates gui for the element.
// the "creation" is the last part, when script scans the document and merges all the info into HTML block ready to be copied


//Texteditor enables advanced text editing feautres (bold, italic, href)
//It needs to be run after every action othewise you wouldn't be able to use advanced editing
function TextEditor(){
    let output = document.getElementById('output');
    let buttons = document.getElementsByClassName('tool--btn');
    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            let cmd = btn.dataset['command'];
            if(cmd === 'createlink') {
                let url = prompt("Enter the link here: ", "http:\/\/");
                document.execCommand(cmd, false, url);
            } else {
                document.execCommand(cmd, false, null);
            }
        })}}


// All the images have to reside in assets Img folder

function AddCoverImage(){  
    // CoverImage button is presented from the start, it opens a file select dialog and prompts the user to select the cover image
    let filename = document.getElementById("cover-image-input").files[0].name
    let path = "./Assets/Img/";
    
    // This try and catch sequence allows to change cover image mid editting
    try {
        let image = document.getElementById("cover-image")
        image.src =  path + filename
    } catch (error) {
        // Create the outer div element
    var div = document.createElement('div');
    div.className = 'content__cover_image';
    div.id = 'content__cover_image';

    // Create the img element to be display to the user
    var img = document.createElement('img');
    img.className = 'cover__image--image';
    img.id = 'cover-image';
    img.title = 'cover image';
    img.src =  path + filename

    // Create the input for alt text
    var alt_input = document.createElement('input');
    alt_input.type = 'text';
    alt_input.placeholder = 'Alternative text';
    alt_input.className = 'input-box';
    alt_input.id = "CoverImageAlt"

    // Create the input for caption (Image credit)
    var caption_input = document.createElement('input');
    caption_input.type = 'text';
    caption_input.placeholder = 'Caption';
    caption_input.className = 'input-box';
    caption_input.id = "CoverImageCap"

    // Append the elements to the outer div
    div.appendChild(img);
    div.appendChild(alt_input);
    div.appendChild(caption_input);

    // Add the div to the document body
    try {
        let firstElement = document.getElementById("content").firstChild
        document.getElementById("content").insertBefore(div, firstElement)

    } catch (error) {
        document.getElementById("content").appendChild(div)
    }
    }
    TextEditor();
}

//Add heading element
function AddHeading(){
    var headingcode = document.createElement("input")
    headingcode.type = "text"
    headingcode.placeholder = "Heading"
    headingcode.className = "content-block heading input-box"
    headingcode.title = "heading-block"
    headingcode.id = "heading"

    document.getElementById("content").appendChild(headingcode);
    TextEditor();
}
 
//Addtetxt adds contenteditable div block
function AddText(){
    // Create the output div element
    var outputDiv = document.createElement("div");
    outputDiv.className = "content-block content-text";
    outputDiv.id = "output";
    outputDiv.contentEditable = true;
    outputDiv.title = "text-block";

    // Create the toolbar div element
    var toolbarDiv = document.createElement("div");
    toolbarDiv.className = "toolbar";

    // Create the unordered list for the tools
    var toolList = document.createElement("ul");
    toolList.className = "tool--list";

    // Create an array of tool commands and corresponding icons
    var toolCommands = [
    { command: "bold", iconClass: "fas fa-bold" },
    { command: "italic", iconClass: "fas fa-italic" },
    { command: "underline", iconClass: "fas fa-underline" },
    { command: "insertOrderedList", iconClass: "fas fa-list-ol" },
    { command: "insertUnorderedList", iconClass: "fas fa-list-ul" },
    { command: "createlink", iconClass: "fas fa-link" },
    
];

    // Loop through the tool commands array and create the corresponding list items and buttons
    toolCommands.forEach(function(toolCommand) {
    var toolItem = document.createElement("li");
    toolItem.className = "tool";

    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-command", toolCommand.command);
    button.className = "tool--btn";

    var icon = document.createElement("i");
    icon.className = toolCommand.iconClass;

    button.appendChild(icon);
    toolItem.appendChild(button);
    toolList.appendChild(toolItem);
    });

    // Append the tool list to the toolbar div
    toolbarDiv.appendChild(toolList);

    document.getElementById("content").appendChild(outputDiv);
    document.getElementById("content").appendChild(toolbarDiv);
    TextEditor();
}

//In oder to use the same function for multiple images and change the image later, I have implemented a image_id variable with is fed to the AddImage function by, creating a specific button using the AddImageButton function

var image_id = 0

function AddImageButton(){
    var label = document.createElement("label");
    label.setAttribute("for", "image-input-" + String(image_id));
    label.className = "input__label";

    // Create the icon element
    var icon = document.createElement("i");
    icon.className = "fa-solid fa-file-image";

    // Create the text node for "Upload image"
    var text = document.createTextNode(" Upload image ");

    // Create the input element
    var input = document.createElement("input");
    input.className = "image-input";
    input.id = "image-input-" + String(image_id);
    input.type = "file";
    input.name = "image";
    input.accept = "image/png, image/gif, image/jpeg, image/webp";
    input.setAttribute("onchange", "AddImage(" + image_id + ")");

    // Append the icon and text node to the label
    label.appendChild(icon);
    label.appendChild(text);

    // Append the input to the label
    label.appendChild(input);

    document.getElementById("content").appendChild(label);

    // Create the parent div element
    var div = document.createElement("div");
    div.className = "normal_image content-block";
    div.title = "normal-image-block"

    // Create the image element
    var img = document.createElement("img");
    img.className = "image";

    // Create the alternative text input element
    var altInput = document.createElement("input");
    altInput.type = "text";
    altInput.placeholder = "Alternative text";
    altInput.className = "input-box";

    // Create the caption input element
    var captionInput = document.createElement("input");
    captionInput.type = "text";
    captionInput.placeholder = "Caption";
    captionInput.className = "input-box";

    // Append the child elements to the parent div
    div.appendChild(img);
    div.appendChild(altInput);
    div.appendChild(captionInput);

    // Append the parent div to the document body or any other desired element

    document.getElementById("content").appendChild(div)
    
    image_id +=1
    TextEditor();
}

// AddImage uses image_id provided by the button (making sure that 1 button = 1 image)
function AddImage(location){
    let path = "./Assets/Img/"
    let filename = document.getElementsByClassName("image-input")[location].files[0].name
    document.getElementsByClassName("image")[location].src = path + filename
    TextEditor();
}

var global_grid_id = 0 

function AddGridImageButton(local_grid_id){
    var label = document.createElement("label");
    label.setAttribute("for", "image-input-" + String(image_id));
    label.className = "input__label";

    // Create the icon element
    var icon = document.createElement("i");
    icon.className = "fa-solid fa-file-image";

    // Create the text node for "Upload image"
    var text = document.createTextNode(" Upload image ");

    // Create the input element
    var input = document.createElement("input");
    input.className = "image-input";
    input.id = "image-input-" + String(image_id);
    input.type = "file";
    input.name = "image";
    input.accept = "image/png, image/gif, image/jpeg, image/webp";
    input.setAttribute("onchange", "AddImage(" + String(image_id) + ")");

    // Append the icon and text node to the label
    label.appendChild(icon);
    label.appendChild(text);
    label.appendChild(input);


    var grid_button = document.getElementById("grid-button-" + String(local_grid_id))
    document.getElementById("image-grid-" + String(local_grid_id)).insertBefore(label, grid_button);

    // Create the parent div element
    var div = document.createElement("div");
    div.className = "grid_image";
    div.title = "grid-image-block"

    // Create the image element
    var img = document.createElement("img");
    img.className = "image";

    // Create the alternative text input element
    var altInput = document.createElement("input");
    altInput.type = "text";
    altInput.placeholder = "Alternative text";
    altInput.className = "input-box";

    // Create the caption input element
    var captionInput = document.createElement("input");
    captionInput.type = "text";
    captionInput.placeholder = "Caption";
    captionInput.className = "input-box";

    // Append the child elements to the parent div
    div.appendChild(img);
    div.appendChild(altInput);
    div.appendChild(captionInput);

    // Append the parent div to the document body or any other desired element

    document.getElementById("image-grid-" + String(local_grid_id)).insertBefore(div, grid_button)
    
    image_id +=1
    TextEditor();
}


function AddImageGrid(){
    global_grid_id += 1
    var grid = document.createElement("div")
    grid.className = "content-image-grid content-block"
    grid.title = "grid-block"
    grid.id = "image-grid-" + String(global_grid_id)

    // Create button element
    var button = document.createElement("button");
    button.className = "button";
    button.id = "grid-button-" + String(global_grid_id)
    button.setAttribute("onclick", "AddGridImageButton(" + global_grid_id + ")");
    button.title = "Add Image";
    var icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";
    button.appendChild(icon);
    grid.appendChild(button);

    document.getElementById("content").appendChild(grid);
    
    TextEditor();
}


//Addquote adds quote elemetn
function AddQuote(){
    var quotecode = document.createElement("input")
    quotecode.type = "text"
    quotecode.className = "content-block content-quote"
    quotecode.placeholder = "Quote"
    quotecode.title = "quote-block"
    
    document.getElementById("content").appendChild(quotecode);
    TextEditor();
}

// Same solution as for Images, 1 input = 1 youtube
var ytb_class_id = 0 

// in order to bypass youtube's styling for iframes, input takes video id into iframe template using "https://www.youtube-nocookie.com/embed/" url
function AddYoutubeVideoInput(){
    var Video_id = document.createElement("input")
    Video_id.type = "text";
    Video_id.placeholder = "VideoID";
    Video_id.className = "input-box youtube-video-input";
    Video_id.setAttribute("onchange", "AddYoutubeVideo("+ ytb_class_id +")")
    document.getElementById("content").appendChild(Video_id)

    var video = document.createElement("iframe")
    video.className = "youtube content-block"
    video.title = "YouTube-block"
    video.frameBorder = "0"
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    video.allowFullscreen = "true"
    video.style.display = "none"
    document.getElementById("content").appendChild(video)

    ytb_class_id += 1
    TextEditor()
}

function AddYoutubeVideo(ytb_class_id){
    var video_id = document.getElementsByClassName("youtube-video-input")[ytb_class_id].value
    var video = document.getElementsByClassName("youtube")[ytb_class_id]
    video.style.display = "block"
    video.src = "https://www.youtube-nocookie.com/embed/" + video_id
    TextEditor()
}



//For syntax highlighting the hWeb uses prism.js

function AddCodeSnippet(){
    let CodeSnippet = document.createElement("div")
    CodeSnippet.title = "code-snippet-block"
    CodeSnippet.className = "content-block"


    var DropDownMenu = document.createElement("select");
    DropDownMenu.name = "langauge";
    DropDownMenu.className = "input-select"
   
    //To add more language options head to https://prismjs.com/index.html#supported-languages, re-download the js and css file with your language and theme preferences
    var languageList = ["Atom" ,"C" ,"C-like" ,"C#" ,"C++" ,"CSS" ,"HTML" ,"Java" ,"Javascript" ,"LaTeX" ,"MathML" ,"PHP" ,"Python" ,"RSS" ,"Ruby" ,"Rust" ,"SQL" ,"SSML" ,"SVG" ,"Swift" ,"TypeScript" ,"XML"];
    var valueList  = ["atom" ,"css" ,"clike" ,"csharp" ,"cpp" ,"css" ,"html" ,"java" ,"javascript " ,"latex" ,"mathml" ,"php" ,"python" ,"rss" ,"ruby" ,"rust" ,"sql" ,"ssml" ,"svg" ,"swift" ,"typescript" ,"xml"];
      
    for (let i = 0; i < languageList.length; i++) {
        var SelectOption = document.createElement("option");
        SelectOption.value = "language-" + valueList[i];
        SelectOption.className = "select-option"
        SelectOption.textContent = languageList[i];
        DropDownMenu.appendChild(SelectOption);
    }

    CodeSnippet.appendChild(DropDownMenu)
    
    var codeInput = document.createElement("div")
    codeInput.className = "code"
    codeInput.contentEditable = "True"
    codeInput.type = "text"
    codeInput.innerHTML = "put you code here"

    CodeSnippet.appendChild(codeInput)
    document.getElementById("content").appendChild(CodeSnippet);
    TextEditor();}

// Custom element allows to add pure HTML, CSS, JS this is an advanced feature to use at your own risk
function AddCustomElement(){
    var customElement = document.createElement("input")
    customElement.title = "custom-element-block"
    customElement.placeholder = "Custom element!"
    customElement.className = "content-block content-custom code"
    customElement.type = "Text"

    
    document.getElementById("content").appendChild(customElement);
    TextEditor();}



//Because the article writer does not have direct acces to filesystem, the saving works by saving the whole webpage, this retains all the data and allows further editing
function SaveProject(){
    window.alert("Press Ctrl + S to download current page");
    TextEditor();
}

// Deleting project resets all inputs, without reloading the page
function DeleteProject(){
    if (confirm("Are you sure you want to delete this project?")){
        document.getElementById("content").innerHTML = ""
        document.getElementsByClassName("article__info--setup")[0].innerHTML += " "
        document.getElementById("Export-Dialog").style.display = "none"
        ytb_class_id = 0
        image_id = 0
        code_snippet_id = 0
        global_grid_id = 0
    }
}

// Export project scans trought the documment and transforms all the input into HTML elemetns in a text for to be copied later
function ExportProject(){

    document.getElementById("Export-Dialog").style.display = "block"
    

    // First get all the article metadata (Headline, author, date, category, cover image, image path)
    var headline =  document.getElementById("headline").value
    var author = document.getElementById("author").value
    var date  = document.getElementById("date").value //yyyy-mm-dd
    var category = document.getElementById("category").value
    var ArticleLocation = document.getElementById("article_location_url").value

    var article_description = "No description has been provided, you will have to see for yourself!"
    
    // Check if article has cover image
    try {
        var cover_image = document.getElementById("cover-image")
        var cover_image_alt = document.getElementById("CoverImageAlt").value
        var cover_image_cap = document.getElementById("CoverImageCap").value
        
        //Create the elemets and add them to the export dialog

        // Create the cover image div
        let coverImageDiv = document.createElement('div');
        coverImageDiv.classList.add('cover__image');

        // Create the cover image
        let coverImageElement = document.createElement('img');
        coverImageElement.className = 'cover-image';
        coverImageElement.style.objectPosition = '0 0';
        var cover_image_src = cover_image.getAttribute("src")
        coverImageElement.src = cover_image_src;
        coverImageElement.alt = cover_image_alt

        // Create the image credit paragraph
        let imageCredit = document.createElement('p');
        imageCredit.className = 'image-credit';
        imageCredit.textContent = cover_image_cap;

        // Append the cover image to the cover image div
        coverImageDiv.appendChild(coverImageElement);

        // Append the image credit to the cover image div
        coverImageDiv.appendChild(imageCredit);
        HtmlMain.appendChild(coverImageDiv)
    } catch { 
        var cover_image_src = ""
        var cover_image_alt = "No Cover Image found"

    }

    //HTML DOCUMENT
    // Create a new HTML document
    let ArticleDocumentHtml = document.implementation.createHTMLDocument(headline);

    // Create meta tag elements
    let charsetMeta = ArticleDocumentHtml.createElement('meta');
    charsetMeta.setAttribute('charset', 'UTF-8');

    let viewportMeta = ArticleDocumentHtml.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');

    let descriptionMeta = ArticleDocumentHtml.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.content = article_description;

    let authorMeta = ArticleDocumentHtml.createElement('meta');
    authorMeta.setAttribute('name', 'author');
    authorMeta.content = author;

    // Append meta tags to the head of the document
    ArticleDocumentHtml.head.appendChild(charsetMeta);
    ArticleDocumentHtml.head.appendChild(viewportMeta);
    ArticleDocumentHtml.head.appendChild(descriptionMeta);
    ArticleDocumentHtml.head.appendChild(authorMeta);


    let favicon = ArticleDocumentHtml.createElement("link")
    favicon.rel = "icon"
    favicon.type = "image/x-icon"
    favicon.href = "../Assets/Icons/Favicon.svg"
    ArticleDocumentHtml.head.appendChild(favicon)

    var StyleSheets = ["Article.css", "prism.css", "Universal.css"]
    for (let i = 0; i < StyleSheets.length; i++) {
        let link = ArticleDocumentHtml.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.href = "../Assets/Css/" + StyleSheets[i]
        ArticleDocumentHtml.head.appendChild(link)
    }
    var Scripts = ["Utility.js", "prism.js", "Article.js"]
    for (let i = 0; i < Scripts.length; i++) {
        let script = ArticleDocumentHtml.createElement("script")
        script.src = "../Assets/Js/" + Scripts[i]
        script.defer = true
        ArticleDocumentHtml.head.appendChild(script)
    }


    // Create div element with class and id attributes
    let zoomImageContainer = document.createElement('div');
    zoomImageContainer.className = 'zoom_image--container';
    zoomImageContainer.id = 'zoom_image--container';

    // Create span element with tabindex and id attributes
    let closeSpan = document.createElement('span');
    closeSpan.setAttribute('tabindex', '0');
    closeSpan.id = 'zoom_image--close';
    closeSpan.textContent = '×';

    // Create div element with class attribute
    let zoomImageControls = document.createElement('div');
    zoomImageControls.className = 'zoom_image-controls';

    // Create i elements with class, tabindex, and id attributes
    let controlsLeft = document.createElement('i');
    controlsLeft.classList.add('fa-solid', 'fa-angle-left');
    controlsLeft.setAttribute('tabindex', '0');
    controlsLeft.id = 'controls-left';

    let zoomImage = document.createElement('img');
    zoomImage.className ='zoom_image--image';
    zoomImage.id = 'zoom_image--image';
    zoomImage.setAttribute('src', '');
    zoomImage.setAttribute('alt', '');

    let controlsRight = document.createElement('i');
    controlsRight.classList.add('fa-solid', 'fa-angle-right');
    controlsRight.setAttribute('tabindex', '0');
    controlsRight.id = 'controls-right';

    // Create p element with class attribute and set text content
    let caption = document.createElement('p');
    caption.className ='zoom_image--caption';
    caption.textContent = 'Caption test';

    // Append elements to the container
    zoomImageContainer.appendChild(closeSpan);
    zoomImageControls.appendChild(controlsLeft);
    zoomImageControls.appendChild(zoomImage);
    zoomImageControls.appendChild(controlsRight);
    zoomImageContainer.appendChild(zoomImageControls);
    zoomImageContainer.appendChild(caption);


    let HtmlBody = ArticleDocumentHtml.body
    let HtmlMain = ArticleDocumentHtml.createElement("main")
    

    HtmlMain.appendChild(zoomImageContainer)
    
    

    // Create the headline h1 element
    let headlineElement = document.createElement('h1');
    headlineElement.textContent = headline;

    // Create the article info container div
    let ArticleInfo = document.createElement('div');
    ArticleInfo.className = 'article__info--container';

    // Create the author link
    let authorLink = document.createElement('a');
    authorLink.classList.add('article__info', 'info--author');
    authorLink.href = '../blog.html?author=' + String(author);
    authorLink.innerHTML = '<i class="fa-solid fa-pen"></i> ' + String(author);

    // Create the date paragraph
    let PublishedDate = document.createElement('p');
    PublishedDate.classList.add('article__info', 'info--date');
    PublishedDate.textContent = String(date);

    // Create the category link
    let categoryLink = document.createElement('a');
    categoryLink.classList.add('article__info', 'info--category');
    categoryLink.href = '../blog.html?category=' + String(category);
    categoryLink.innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + String(category);

    // Append the author link, date paragraph, and category link to the article info container
    ArticleInfo.appendChild(authorLink);
    ArticleInfo.appendChild(PublishedDate);
    ArticleInfo.appendChild(categoryLink);

    
    // Append all elements to the document body
    // 1. Cover image 2. Headline 3. Article info
    
    
    HtmlMain.appendChild(headlineElement)
    HtmlMain.appendChild(ArticleInfo)
    
   

    function ArticleThumbnail(){
    //Article Thumbnail
        // Create article element
        let ArticleThumbnail = document.createElement('article');
        ArticleThumbnail.classList.add('card');
    
        // Create link element
        let ArticleLink = document.createElement('a');
        ArticleLink.classList.add('card__link');
        ArticleLink.href = "/Blog/" + headline.replace(/\s/g, '-') + ".html";
    
        // Create content div
        let ArticleThumbContent = document.createElement('div');
        ArticleThumbContent.classList.add('card__content');
    
        // Create thumbnail image
        let ArticleThumbnailImage = document.createElement('img');
        ArticleThumbnailImage.classList.add('card__thumbnail');
        ArticleThumbnailImage.alt = cover_image_alt;
        ArticleThumbnailImage.src = cover_image_src;
    
        // Create text div
        let ArticleThumbailText = document.createElement('div');
        ArticleThumbailText.classList.add('card__text');
    
        // Create headline h2 element
        let ArticleThumbnailHeadline = document.createElement('h2');
        ArticleThumbnailHeadline.classList.add('card__headline');
        ArticleThumbnailHeadline.textContent = headline;
    
        // Create description paragraph
        let ArticleThumbnailDescription = document.createElement('p');
        ArticleThumbnailDescription.classList.add('card__description');
        ArticleThumbnailDescription.textContent = article_description
    
        // Create metadata wrapper div
        let metadataWrap = document.createElement('div');
        metadataWrap.classList.add('card__metadata--wrap');
    
        // Create action metadata paragraph
        let actionMetadata = document.createElement('p');
        actionMetadata.classList.add('card__metadata', 'metadata--action');
        actionMetadata.textContent = 'Read more ';
    
        // Create angle-right icon
        let angleRightIcon = document.createElement('i');
        angleRightIcon.classList.add('fa-solid', 'fa-angle-right');
    
        // Create category metadata link
        let categoryMetadata = document.createElement('a');
        categoryMetadata.classList.add('card__metadata', 'metadata--category');
        categoryMetadata.href = '#';
        categoryMetadata.innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + category;
    
        // Create author metadata link
        let authorMetadata = document.createElement('a');
        authorMetadata.classList.add('card__metadata', 'metadata--author');
        authorMetadata.href = '#';
        authorMetadata.textContent = author;
    
        // Append elements in the correct hierarchy
        actionMetadata.appendChild(angleRightIcon);
        metadataWrap.appendChild(actionMetadata);
        metadataWrap.appendChild(categoryMetadata);
        metadataWrap.appendChild(authorMetadata);
    
        ArticleThumbailText.appendChild(ArticleThumbnailHeadline);
        ArticleThumbailText.appendChild(ArticleThumbnailDescription);
        ArticleThumbailText.appendChild(metadataWrap);
    
        ArticleThumbContent.appendChild(ArticleThumbnailImage);
        ArticleThumbContent.appendChild(ArticleThumbailText);
    
        ArticleLink.appendChild(ArticleThumbContent);
    
        ArticleThumbnail.appendChild(ArticleLink);


        document.getElementById("Thumbnail-Export-Preview").innerText = ArticleThumbnail.outerHTML
        document.getElementsByClassName("Export-Copy")[1].value = ArticleThumbnail.outerHTML
        }

    function RSSItem(){
        // Create the <item> element
        

        // Create the <title> element and set its text content
        let title = "<title>" + headline +"</title>";

        // Create the <link> element and set its text content
        if (ArticleLocation.value == null){
           var url = window.location.origin + "/Blog/" + String(headline.replace(/\s/g, '-') + ".html") 
        }
        else{
            var url = ArticleLocation + String(headline.replace(/\s/g, '-') + ".html") 
        }
        
        let link = "<link>" + url +  "</link>" 

        // Create the <description> element and set its text content
        let cdata = '<![CDATA[<div><a href="' + url + '">Read more<a/><div>]]>'
        let description = "<description>" + article_description + cdata + "</description>";
        
        let guid = "<guid>" + url + "</guid>" 
        
        
        var RSSItemElement = '<item>'+ title + link + description + guid + '</item>';


        // Append the <title>, <link>, and <description> elements to the <item> element
       

        document.getElementById("RSS-Export-Preview").innerText = RSSItemElement
        document.getElementsByClassName("Export-Copy")[2].value = RSSItemElement

    }

    // Second step is to locate all the content blocks
    let content = document.getElementsByClassName("content-block")
    // Then go through the list and check what type of content block it is, this information is the title
    // Then follow the instruction for how to correctly format it and add its text form to the export dialog
    
    let ArticleText = document.createElement("article")
    
    
    for (var i=0; i<content.length;i++){
        
        var element = content[i];
        
        if (element.title == "heading-block"){
            let heading = document.createElement("h2")
            heading.innerHTML = element.value
            heading.id = "heading-" + element.value.replace(/\s/g, '-')
            ArticleText.appendChild(heading)
        }

        if (element.title == "text-block"){
            let text = document.createElement("p")
            text.innerHTML = element.innerHTML
            ArticleText.appendChild(text)
            if (article_description == "No description has been provided, you will have to see for yourself!"){
                article_description = element.innerText.substring(0, 160) + "..."
            }
        }

        if (element.title == "normal-image-block"){
    
            var image = element.querySelectorAll("img")[0]
            var inputFields = element.querySelectorAll("input")

            let imageContainer = document.createElement("div")
            imageContainer.className = "image"

            let imageElement = document.createElement("img")
            imageElement.src = image.getAttribute("src")
            imageElement.loading = "lazy"
            imageElement.alt = inputFields[0].value
            imageContainer.appendChild(imageElement)

            let captionElement = document.createElement("p")
            captionElement.className = "caption"
            captionElement.innerText = inputFields[1].value
            imageContainer.appendChild(captionElement)

            ArticleText.appendChild(imageContainer)
        }


        if (element.title == "grid-block"){
            var gridElement = document.createElement("div")
            gridElement.className = "image-grid"

            gridItems = element.querySelectorAll("div")
            for (var g=0; g<gridItems.length;g++){
                gridItem = gridItems[g]
                var image = gridItem.querySelectorAll("img")[0]
                var inputFields = gridItem.querySelectorAll("input")

                let imageContainer = document.createElement("div")
                imageContainer.className = "image"

                let imageElement = document.createElement("img")
                imageElement.src = image.getAttribute("src")
                imageElement.alt = inputFields[0].value
                imageContainer.appendChild(imageElement)

                let captionElement = document.createElement("p")
                captionElement.className = "caption"
                captionElement.innerText = inputFields[1].value
                imageContainer.appendChild(captionElement)


                gridElement.appendChild(imageContainer)
            }
            ArticleText.appendChild(gridElement)
            
        }


        if (element.title == "quote-block"){
            let quote = document.createElement("q")
            quote.innerHTML = element.value
            ArticleText.appendChild(quote)
        }

        if (element.title == "YouTube-block"){
                var video = document.createElement("iframe")
                video.className = "youtube"
                video.title = "YouTube video player"
                video.frameBorder = "0"
                video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                video.allowFullscreen = "true"
                video.src = element.getAttribute("src")

                ArticleText.appendChild(video)
                }

        if (element.title == "code-snippet-block"){
            let code_source = element.querySelectorAll("div")[0]
            
            let code_container = document.createElement("pre")
            let code_target = document.createElement("code")

            code_target.className = element.querySelectorAll("select")[0].value

            code_target.innerText = String(code_source.innerText).replace(/</g,"&lt;").replace(/>/g,"&gt;")
            
            code_container.appendChild(code_target)
            ArticleText.appendChild(code_container)
        }


        if (element.title == "custom-element-block"){
            let temp = document.createElement("custom")
            temp.innerHTML = element.value
            ArticleText.appendChild(temp)
        }

        
    }
    HtmlMain.appendChild(ArticleText)

    HtmlBody.appendChild(HtmlMain)
    // Convert the HTML document to a string
    let htmlString = new XMLSerializer().serializeToString(ArticleDocumentHtml);

    // Downloads finished article as a Html file with correct name
    const ArticleHtmlFile = new File([htmlString],  String(headline.replace(/\s/g, '-') + '.html'), {
            type: 'text/plain',
        })
    const link = document.createElement('a')
    const url = URL.createObjectURL(ArticleHtmlFile)

    link.href = url
    link.download = ArticleHtmlFile.name
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    document.getElementById("Article-Export-Preview").innerText = htmlString
    document.getElementsByClassName("Export-Copy")[0].value = htmlString
    ArticleThumbnail()
    RSSItem()

}


// Copy code copies desired code into the clipboard
function CopyCode(index){
    //select the text in the text box
    document.getElementsByClassName("Export-Copy")[index].style.display = "block";
    document.getElementsByClassName("Export-Copy")[index].select();
    //copy the text to the clipboard
    document.execCommand("copy");
    document.getElementsByClassName("Export-Copy")[index].style.display = "none";
    document.getElementsByClassName("copy-info")[index].style.display = "block";
}