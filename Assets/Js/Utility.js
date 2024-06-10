// Settings

var MasterSettings = {
  preloader: true,
  infobox: true,
  infobox_message: "Přejeme hodně štěstí ke zkouškám. 💪🍀",
  
} 
// adding [NEW] to the title adds a little dot
const NavLinks = [
  { title: 'Návody', href: '../Navody.html', className: 'nav__link', textContent: 'Návody' },
  { title: 'Nástroje', href: '../Nastroje.html', className: 'nav__link', textContent: 'Nástroje' },
  { title: 'O nás', href: '../Onas.html', className: 'nav__link', innerHTML: 'O nás' },
  { title: 'Hledat', href: '../index.html', className: 'nav__link', innerHTML: '<i class="fa-solid fa-magnifying-glass"></i>' }
];

function Header (NavLinks){
  const header = document.createElement('header');
  header.className = 'header';

  // Create the logo link element
  const logoLink = document.createElement('a');
  logoLink.id = 'header__logo_link';
  logoLink.href = '/';
  logoLink.innerHTML = '<img src="../Assets/Icons/Logo.svg" alt="" class="logo__image">'
  header.appendChild(logoLink);


  // Create the jump to content link element
  const jumpToContentLink = document.createElement('a');
  jumpToContentLink.href = '#infobox';
  jumpToContentLink.className = 'header__jump-to-content';
  jumpToContentLink.textContent = 'Skočit k obsahu';
  header.appendChild(jumpToContentLink);

  // Create the menu div element
  const menuDiv = document.createElement('div');
  menuDiv.className = 'header__menu';

  const menuIcon = document.createElement('i');
  menuIcon.id = 'menu_btn';
  menuIcon.title = 'Otevřít menu';
  menuIcon.tabIndex = 0;
  menuIcon.className = 'fa-solid fa-bars';
  menuIcon.style.color = 'var(--main-color)';
  menuIcon.style.fontSize = '40px';

  // Add the onclick event handler
  menuIcon.onclick = Menu;

  // Add the onkeydown event handler
  menuIcon.onkeydown = function(event) {
    if (event.keyCode === 13) {
      Menu();
    }
  };

  menuDiv.appendChild(menuIcon)
  header.appendChild(menuDiv);

  // Create the nav element
  const nav = document.createElement('nav');
  nav.className = 'header__nav';
  header.appendChild(nav);

  // Create the ul element
  const ul = document.createElement('ul');
  ul.className = 'nav__list';
  nav.appendChild(ul);

  // Create li and a elements for each link
  NavLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.title = link.title;
    a.href = link.href;
    a.className = link.className;
    if (link.target) {
      a.target = link.target;
    }
    if (link.innerHTML) {
      a.innerHTML = link.innerHTML;
    } else {
      a.textContent = link.textContent;
    }
    li.appendChild(a);
    ul.appendChild(li);
});
  // Append the header element to the document body or any other desired parent element
  document.body.insertBefore(header, document.body.firstElementChild);
}
function Menu(){
    var nav = document.getElementsByClassName("header__nav")[0];
    let menu_btn = document.getElementById("menu_btn")
    console.log(nav.style.opacity)
    if (nav.style.opacity == 0){
        nav.style.opacity = 1;
        nav.style.visibility = "visible"
        nav.style.height = "auto";
        menu_btn.className = 'fa-solid fa-xmark'
    }else{
        nav.removeAttribute("style")
        menu_btn.className = 'fa-solid fa-bars'
    }

}

function InfoBox(message){
// Create the div element
    var infobox = document.createElement('div');
    infobox.className = 'infobox';
    infobox.innerHTML = message;

    // Append the div element to the document body or any desired parent element
    document.body.insertBefore(infobox, document.body.getElementsByTagName("main")[0]);
}

// shows and hides navigation menu

function EndBlock(){
  //Custom endblock 
  let endblock = document.createElement("div")
  endblock.className = "endblock"
  endblock.id = "endblock"
  
  let heading = document.createElement("p")
  heading.className = "sub"
  heading.innerText = "Zapoj se"
  endblock.appendChild(heading)

  let text = document.createElement("p")
  text.className = "info"
  text.innerText = "Víš o skvělém zdroji (webové stránce, nástroji, youtube kanálu...), který by mohl pomoct začínajícím medikům? Tak neváhej a pošli odkaz.  "
  endblock.appendChild(text)

  let footnote = document.createElement("div")
  footnote.className = "section_note"
  footnote.innerHTML = 'Jen prosím zkontroluj, zda už jsme zdroj nepřidali. :)'
  endblock.appendChild(footnote)

  let buttonContainer = document.createElement("div")
  let button = document.createElement("a")
  button.title = "Přidat"
  button.innerText = "Přidat"
  button.className = "sing-btn"
  button.href = "https://forms.gle/LdPgMLnGZHZ49uxa9"
  buttonContainer.appendChild(button)
  endblock.appendChild(buttonContainer)
  
  document.getElementsByTagName("main")[0].appendChild(endblock)
}

function SocialGrid(){
  // Create the div element
  var SocialGrid = document.createElement('div');
  SocialGrid.className = 'social-grid';
  SocialGrid.id = 'social-grid';

  // Create an array of link objects
  var SocialLinks = [
    {
      title: 'Přispět',
      href: 'https://www.paypal.com/donate/?hosted_button_id=XWBJ7JHATG48Y',
      iconClassName: 'icon fas fa-heart'
    },
    {
      title: 'Nahlásit problém',
      href: 'mailto:hynekjanac@gmail.com?subject=Site%20Issue&amp;body=Link:%20http://127.0.0.1:5501/Blog/000-Template.html#%0D%0AIssue%20description:%0D%0A %0D%0AScreenshot:%0D%0A',
      iconClassName: 'icon fas fa-exclamation-triangle'
    },
    {
      title: 'Prohlédni si kód',
      href: 'https://github.com/HynekJanac/MedikMap',
      iconClassName: 'icon fab fa-github'
    },
    {
      title: 'Přida doběr na kanál RSS',
      href: 'https://medikmap.cz/feed.xml',
      iconClassName: 'icon fa-solid fa-rss'
    }
  ];

  // Create the initial links
  for (var i = 0; i < SocialLinks.length; i++) {
    let link = SocialLinks[i];
    var anchorElement = document.createElement('a');
    anchorElement.title = link.title;
    anchorElement.className = 'social';
    anchorElement.href = link.href;
    anchorElement.target = "'_blank'";

    var iconElement = document.createElement('i');
    iconElement.className = link.iconClassName;

    anchorElement.appendChild(iconElement);
    SocialGrid.appendChild(anchorElement);
  }

  document.getElementsByTagName("main")[0].appendChild(SocialGrid)
}

// Back to top
function BackToTop (){
  // Create the anchor element
  var anchorElement = document.createElement('a');
  anchorElement.title = 'Vrátit se zpět nahoru';
  anchorElement.id = 'back-to-top';
  anchorElement.className = 'back-to-top';
  anchorElement.href = '#';

  // Create the icon element
  var iconElement = document.createElement('i');
  iconElement.className = 'icon fas fa-angle-up';

  // Append the icon element to the anchor element
  anchorElement.appendChild(iconElement);

  // Append the anchor element to the document body or any desired parent element
  document.getElementsByTagName("main")[0].appendChild(anchorElement)
  }

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  mybutton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    mybutton.style.opacity = 1;
    mybutton.style.transform = "scale(1)";
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.transform = "scale(0)";
  }
}

// Cookie consent
function CookiePopUp(){
  var CookieConsentElement = document.createElement('div');
  CookieConsentElement.className = 'cookie-consent';
  CookieConsentElement.id = 'cookie-consent';
  CookieConsentElement.style.display = 'block';

  // Create the paragraph element
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = 'Tato stránka využívá soubory cookies k optimalizaci uživatelského zážitku a analytice návštěvnosti.';


  // Append the paragraph element to the div element
  CookieConsentElement.appendChild(paragraphElement);

  // Create the "Got it!" button
  var buttonElement = document.createElement('a');
  buttonElement.className = 'cookie-btn';
  buttonElement.textContent = 'OK';
  buttonElement.onclick = GotIt;

  // Append the button element to the div element
  CookieConsentElement.appendChild(buttonElement);

  // Append the div element to the document body
  document.getElementsByTagName("main")[0].appendChild(CookieConsentElement);


}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function GotIt() {
    // Add one month to the current date
    var currentDate = new Date();

    // Add one month to the current date
    currentDate.setMonth(currentDate.getMonth() + 1);
    
    document.cookie = "cookiepolicy=True ; expires=" + String(currentDate);
    document.getElementById("cookie-consent").style.display = "none"; 
}

//Preloader
function Preloader(){
  const preloaderwrap = document.createElement("div")
  preloaderwrap.className = "preloader"
  preloaderwrap.id = "preloader"
  preloaderwrap.innerHTML = '<img class="loader" src="../Assets/Icons/Favicon.svg" alt="Preloader" srcset="">'

  var header_class = document.getElementsByClassName("header");
  header_class[0].appendChild(preloaderwrap);

  window.onload = setTimeout(
      function(){
      var op = 1;  // initial opacity
      var timer = setInterval(function (){
      if (op <= 0.1){
          clearInterval(timer);
          document.getElementById("preloader").style.display = 'none';}

      document.getElementById("preloader").style.opacity = op;
      document.getElementById("preloader").style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;}, 50);}, 1000)  
}

// Opt-out function which adds link to origianl hWeb website
function PoweredByhWeb(){
  let PoweredBy = document.createElement("p");
  PoweredBy.className = "hWebCredit";

  PoweredBy.innerText = "Vytvořeno s ♥️ a  ";

  let hWebLink = document.createElement("a");

  hWebLink.href = "https://hweb.netlify.app/";
  hWebLink.target = "_blank";
  hWebLink.innerText = "hWeb";
 
  PoweredBy.appendChild(hWebLink);
  document.body.appendChild(PoweredBy);
}

function MasterFunction(){
  
  Header(NavLinks)
  
  if (MasterSettings["preloader"] == true){
    Preloader()
  }

  if (MasterSettings["infobox"] == true){
    InfoBox(MasterSettings["infobox_message"])
  }
  
  EndBlock()
  
  SocialGrid()
  
  CookiePopUp()

  PoweredByhWeb()
  
  if (getCookie("cookiepolicy") == "True"){
   document.getElementById("cookie-consent").style.display = "none";}

  BackToTop()
  window.onscroll = function() {scrollFunction()};



}

MasterFunction()