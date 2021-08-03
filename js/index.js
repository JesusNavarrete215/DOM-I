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
//Nav Data
const navitem1 = document.querySelector('nav a')
navitem1.textContent = siteContent["nav"]["nav-item-1"]

const navitem2 = navitem1.nextElementSibling
navitem2.textContent = siteContent["nav"]["nav-item-2"]

const navitem3 = navitem2.nextElementSibling
navitem3.textContent = siteContent["nav"]["nav-item-3"]

const navitem4 = navitem3.nextElementSibling
navitem4.textContent = siteContent["nav"]["nav-item-4"]

const navitem5 = navitem4.nextElementSibling
navitem5.textContent = siteContent["nav"]["nav-item-5"]

const navitem6 = navitem5.nextElementSibling
navitem6.textContent = siteContent["nav"]["nav-item-6"]

//Header img
const headerImg = document.querySelector('.container img')
headerImg.src = siteContent["nav"]["img-src"]

//Updating H1 including a br and button content 

const ctaTextH1 = document.querySelector(".cta-text h1")
ctaTextH1.textContent = siteContent["cta"]["h1"]

const ctaTextbutton = document.querySelector(".cta-text button")
ctaTextbutton.textContent = siteContent["cta"]["button"]

const ctaImg = document.querySelector(".cta img")
ctaImg.src = siteContent["cta"]["img-src"]

//including the filler text 

const topContentH4 = document.querySelector(".text-content:nth-of-type(1) h4")
topContentH4.textContent = siteContent["main-content"]["features-h4"]

const topContentP = topContentH4.nextElementSibling
topContentP.textContent = siteContent["main-content"]["features-content"]

const topContent2H4 = document.querySelector(".text-content:nth-of-type(2) h4")
topContent2H4.textContent = siteContent["main-content"]["about-h4"]

const topContent2P = topContent2H4.nextElementSibling
topContent2P.textContent = siteContent["main-content"]["about-content"]


