// Settings
var MasterSettings = {
  preloader: false,
  infobox: true,
  infobox_message: '🧩 Spustili jsme nový prohlížeč volitelných předmětů. <a href="../Volitelne-predmety/">Vyzkoušet<a/>',
} 
// adding [NEW] to the title adds a little dot
const NavLinks = [
  { title: 'Voliltené předměty', href: '/Volitelne-predmety/', textContent: 'Volitelné předměty 🧩' },
  { title: 'Články', href: '/kurzy.html', textContent: 'Kurzy  🎓' },
  { title: 'Články', href: '/Clanky.html', textContent: 'Články 📝' },
  { title: 'O nás', href: '/onas.html', textContent: 'O nás' },
  { title: 'Hledat', href: '/index.html', textContent: '<i class="fa-solid fa-magnifying-glass"></i>' }
];

function Header (NavLinks){
  let links = ""
  for (link of NavLinks){
     links += `<li><a title="${link.title}" href="${link.href}" class="navLink">${link.textContent}</a></li>`
  }
  let header = `<header class="header">
    <a id="header__logo_link" href="/"><img src="/Assets/Icons/Logo.svg" alt="" class="logoImage"></a>
    <a href="#infobox" class="headerJumptocontent">Skočit k obsahu</a>
    <div class="headerMenu">
        <i id="menu_btn" onclick="Menu()" onfocus="Menu()" title="Otevřít menu" tabindex="0" class="fa-solid fa-bars" style="color: var(--main-color); font-size: 40px;">
        </i>
    </div>
    <nav class="headerNav">
        <ul class="navList">${links}</ul>
    </nav>
</header>`
document.body.insertAdjacentHTML("afterbegin",header)
}

function Menu(){
    var nav = document.getElementsByClassName("headerNav")[0];
    let menu_btn = document.getElementById("menu_btn")
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
    var infobox = `<div class="infobox">${message}<div>`
    // Append the div element to the document body or any desired parent element
  document.getElementsByTagName("main")[0].insertAdjacentHTML("beforebegin",infobox)
}

function EndBlock(){
  //Custom endblock 
  let endblock = `<div class="endblock" id="endblock">
    <p class="sub">Zapoj se</p>
    <p class="info">Víš o skvělém zdroji (webové stránce, nástroji, youtube kanálu...), který by mohl pomoct začínajícím medikům? Tak neváhej a pošli odkaz.  </p>
    <div class="sectionNote">Jen prosím zkontroluj, zda už jsme zdroj nepřidali. :)</div>
    <div>
        <button title="Přidat" class="singBtn" id="ShowForm" onclick="ShowForm()">Přidat</button>
    </div>
    <div class="form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeA7DkGzf9FJytPXsGDj2d9dpJyVMxRfMv5KuZETFF-T8jrXQ/viewform?embedded=true" class="googleformIframe pridatZdroj" style="display: none;"></iframe>
    </div>
</div>`
  document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",endblock)
}

function ShowForm(){
  document.getElementsByClassName("pridatZdroj")[0].style.display = "inline-block"
  document.getElementById("ShowForm").style.display = "none"
}

function socialShareGrid(){
  let SocialLinks = [
    {
      title: 'Přispět',
      href: 'https://www.paypal.com/donate/?hosted_button_id=WYUJMHWUYT47Q',
      iconClassName: 'icon fas fa-heart'
    },
    {
      title: 'Kontaktujte nás',
      href: 'mailto:medikmap.connect@gmail.com',
      iconClassName: 'icon fas fa-envelope'
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/medikmap/',
      iconClassName: 'icon fa-brands fa-instagram'
    },
    {
      title: 'YouTube',
      href: 'https://www.youtube.com/@medikmap',
      iconClassName: 'icon fa-brands fa-youtube'
    },
    {
      title: 'Prohlédni si kód',
      href: 'https://github.com/HynekJanac/MedikMap',
      iconClassName: 'icon fab fa-github'
    },
  ];

  // Create the initial links
  let links = ""
  for (const link of SocialLinks) {
    links += `<a title="${link.title}" class="social" href="${link.href}" target="'_blank'"><i class="${link.iconClassName}"></i></a>`
  }
  let socialShareGrid = `<div class="socialShareGrid" id="socialShareGrid">${links}</div>`
  document.body.innerHTML += socialShareGrid
}

// Back to top
function BackToTop (){
  // Create the anchor element
  let BackToTop = `<a title="Vrátit se zpět nahoru" id="back-to-top" class="backToTopHide" href="#">
    <i class="icon fas fa-angle-up"></i>
</a>`
  // Append the anchor element to the document body or any desired parent element
  document.getElementsByTagName("main")[0].innerHTML += BackToTop
  }

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  mybutton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    mybutton.className = "backToTopShow";
  } else {
    mybutton.className = "backToTopHide";
  }
}

// Cookie consent
function CookiePopUp(){
  let CokieConset = `<div class="cookiesConsent" id="cookiesConsent" style="display: block;">
    <p>Tato stránka využívá soubory cookies k optimalizaci uživatelského zážitku a analytice návštěvnosti.</p>
    <a class="cookieBtn" onclick="GotIt()">OK</a>
</div>`
  
  // Append the div element to the document body
  document.getElementsByTagName("main")[0].innerHTML += CokieConset
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
    document.getElementById("cookiesConsent").style.display = "none"; 
}

//Preloader
function Preloader(){
  const preloaderwrap = document.createElement("div")
  preloaderwrap.className = "preloader"
  preloaderwrap.id = "preloader"
  preloaderwrap.innerHTML = '<img class="loader" src="/Assets/Icons/Favicon.svg" alt="Preloader" srcset="">'

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
  let PoweredBy = `<p class="hWebCredit">S láskou k medícíně naprogramoval <b>Hynek Janáč</b></p>
  <p class="hWebCredit">Poháněto technologí <b><a href="https://hweb-website.pages.dev/" target="_blank">hWeb</a></b></p>`
  document.body.innerHTML += PoweredBy
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
  
  socialShareGrid()
  
  CookiePopUp()

  PoweredByhWeb()
  
  if (getCookie("cookiepolicy") == "True"){
   document.getElementById("cookiesConsent").style.display = "none";}

  BackToTop()
  window.onscroll = function() {scrollFunction()};
}
MasterFunction()