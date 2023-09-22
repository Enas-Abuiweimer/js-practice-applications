// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span


// ********** close and open links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
//   linksContainer.classList.toggle("show-links"); //toggle here is not agood option because there is scroll in the page so we have to keep the process working. 
//toggle is good option to have closed and shown navbars but if we add scroll it will not be enough.

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height; //just arrange the height.
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");


window.addEventListener("scroll", function () {  //whenever the user scroll the page, the provided function will be executed
  const scrollHeight = window.pageYOffset; //stores the vertical scroll position of the page
  const navHeight = navbar.getBoundingClientRect().height; // stores the height of the navbar element.
  if (scrollHeight > navHeight) {   
    //This checks if the user has scrolled past the height of the  navbar.
    navbar.classList.add("fixed-nav");
  } else {

    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault(); // prevents the default behavior of the link when it's clicked, which is usually to navigate to a different page or anchor.
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); //get the value of the href attribute , slice(1) => remove the first index from the value
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    //offsetTop is a property of DOM elements that represents the distance from the top of the closest relatively positioned parent element.

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    }); //to scroll to the calculated position.
    // close
  linksContainer.style.height = 0; //for mobile nav . to hide it after clicking on a link
  });
});
// calculate heights