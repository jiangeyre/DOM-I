const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Styling for borders
let border = document.querySelector(".main-content");
border.style.borderColor = "darkolivegreen";
border.style.borderStyle = "solid";

//HTML collection from element of nav
let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

//Appending and prepending
let nav = document.querySelector('nav');

let appendLink = document.createElement('a');
appendLink.textContent = "TEA";
nav.appendChild(appendLink);

let prependLink = document.createElement('a');
prependLink.textContent = "BOOKS";
nav.prepend(prependLink);

let navItems2 = document.querySelectorAll('a');

navItems2.forEach(function (a){
  a.style.color = "darkolivegreen";
  a.style.fontWeight = "bold";
})

/* CTA Section */

//Assign h1 to cta using a query selector
let cta = document.querySelector('.cta h1');
//Assign text content to cta object's h1 value
// cta.textContent = siteContent['cta']['h1'];
cta.innerHTML = "DOM<br>IS<br>AWESOME";

//Assign the logo to ctaLogo using a query selector
let ctaLogo = document.querySelector('.cta img');
//Assign logo to ctaLogo object's img src value
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

//Assign CTA section button using a query selector
let ctaButt = document.querySelector('.cta button');
ctaButt.textContent = siteContent['cta']['button'];
ctaButt.style.borderRadius = "1.5rem";
ctaButt.style.border = "2px darkolivegreen solid";
ctaButt.style.color = "olivedrab";
ctaButt.style.boxShadow = "3px 3px 3px olive";


/* Main Content */

//Assign main content h4 to arrays using a query selector
let mainContentHead = document.querySelectorAll('.main-content h4');
mainContentHead[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHead[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHead[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHead[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHead[4].textContent = siteContent["main-content"]["vision-h4"];

//Assign main content p to arrays using a query selector
let mainContentPar = document.querySelectorAll('.main-content p');
mainContentPar[0].textContent = siteContent["main-content"]["features-content"];
mainContentPar[1].textContent = siteContent["main-content"]["about-content"];
mainContentPar[2].textContent = siteContent["main-content"]["services-content"];
mainContentPar[3].textContent = siteContent["main-content"]["product-content"];
mainContentPar[4].textContent = siteContent["main-content"]["vision-content"];

//styling for headers
mainContentHead.forEach(function (x){
  x.style.color = "darkolivegreen";
})

//Main Content img

//Assign main content img through the element ID
let mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
mainContentImg.style.borderRadius = "2rem";
mainContentImg.style.border = "2px darkolivegreen solid";

/* Contact Section */

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
contactHeader.style.color = "darkolivegreen";

let contactPar = document.querySelectorAll('.contact p');
contactPar[0].textContent = siteContent['contact']['address'];
contactPar[1].textContent = siteContent['contact']['phone'];
contactPar[2].textContent = siteContent['contact']['email'];

/* Footer Section */

//Assign the copyright to the footer using a query selector
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

