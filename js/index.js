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

//========================== Navigation/Header ========================== 
let navigation = document.querySelectorAll('a')
navigation[0].textContent = siteContent['nav']['nav-item-1']
navigation[1].textContent = siteContent['nav']['nav-item-2']
navigation[2].textContent = siteContent['nav']['nav-item-3']
navigation[3].textContent = siteContent['nav']['nav-item-4']
navigation[4].textContent = siteContent['nav']['nav-item-5']
navigation[5].textContent = siteContent['nav']['nav-item-6']
let ctaH1 = document.querySelector('.cta-text h1').textContent = siteContent['cta']['h1']
let button = document.querySelector('.cta-text button').textContent = siteContent['cta']['button']
let codeSnippet = document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src'])
console.log(navigation)

let changeToGreen = Array.from(navigation)
changeToGreen.forEach(word => {
  word.style.color = 'green';
})

const nav = document.querySelector('nav')
let navItem1 = document.createElement("a");
navItem1.textContent = "Item 1";  

let navItem2 = document.createElement('a');
navItem2.textContent = "Item 2"

nav.appendChild(navItem1)
nav.prepend(navItem2)




//==========================  Middle Section ========================== 

//<H4> headers
let h4Headers = document.querySelectorAll('h4')
let = featuresH4 =h4Headers[0].textContent = siteContent['main-content']['features-h4'],
          aboutH4 = h4Headers[1].textContent = siteContent['main-content']['about-h4'],
          servicesH4 =h4Headers[2].textContent = siteContent['main-content']['services-h4'],
          productH4 = h4Headers[3].textContent = siteContent['main-content']['product-h4'],
          visionH4 = h4Headers[4].textContent = siteContent['main-content']['vision-h4']
console.log(h4Headers)
//<p> Paragraphs
let textContent = document.querySelectorAll('p')
console.log(textContent)
let = featuresContent = textContent[0].textContent = siteContent['main-content']['features-content'],
        aboutContent = textContent[1].textContent = siteContent['main-content']['about-content'],
        servicesContent = textContent[2].textContent = siteContent['main-content']['services-content'],
        productContent = textContent[3].textContent = siteContent['main-content']['product-content'],
        visionsContent = textContent[4].textContent = siteContent['main-content']['vision-content']

//Middle Img 
let middleImg = document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src'])

//========================== Contact Section ========================== 

//Contact h4
 let contact = h4Headers[5].textContent = siteContent['contact']['contact-h4']
//Contact Content
let addressContent = textContent[5].textContent = siteContent['contact']['address'],
      emailContent = textContent[6].textContent = siteContent['contact']['email'],
      phoneContent = textContent[7].textContent = siteContent['contact']['phone']

//========================== Footer Section ========================== 

let footerContent = textContent[8].textContent = siteContent['footer']['copyright'];



