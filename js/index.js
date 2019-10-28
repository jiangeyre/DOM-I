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

//HTML collection from element of nav
let nav = document.querySelectorAll('nav');
console.log(nav.children);

let navChildCount = nav[0].childElementCount;

/* CTA Section */

//Assign h1 to cta using a query selector
let cta = document.querySelector('.cta h1');
//Assign text content to cta object's h1 value
cta.textContent = siteContent['cta']['h1'];

//Assign the logo to ctaLogo using a query selector
let ctaLogo = document.querySelector('.cta img');
//Assign logo to ctaLogo object's img src value
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

//Assign CTA section button using a query selector
let ctaButt = document.querySelector('.cta button');
ctaButt.textcontent = siteContent['cta']['button'];

/* Main Content */

//Assign main content h4, p to arrays using a query selector
let mainContentHead = document.querySelectorAll('.main-content h4');
let mainContentPar = document.querySelectorAll('.main-content p');

//Create arrays of key value pairs from JSON .main-content obj
let mainContentKey = Object.keys(siteContent['main-content']);
let mainContentValue = Object.values(siteContent['main-content']);

//Header counter
let h = 0;

//Paragraph counter
let p = 0;

//Looping through an array of content's keys
for(let i = 0; i < mainContentKey.length; i++){
  //Check if keys contain string of h4 and assign textContent from content
  if(mainContentKey[i].indexOf('h4') > -1){
    mainContentHead[h++].textContent = mainContentValue[i];
  //Check if keys contain string of content and assign textContent from content
  }else if(mainContentKey[i].indexOf('content') > -1){
    mainContentPar[p++].textContent = mainContentValue[i];
  }
}

