const navbar = document.getElementById('navbar');
const sideNav = document.getElementById('sidenav');
const sideNavButton = document.getElementById('sidenav-btn');
function closeSideNav() {
  sideNav.classList.remove('active');
}
showNavbar();
showSideNavButton();

// Hide the navbar on small devices and show the side nav button
function showSideNavButton() {
  if (window.innerWidth < 768) {
    sideNavButton.style.display = 'block';
    navbar.style.display = 'none';
  } else {
    sideNavButton.style.display = 'none';
    navbar.style.display = 'flex';
  }
}

// Show the navbar when the window is resized to a larger size
function showNavbar() {
  if (window.innerWidth >= 768) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
}

window.addEventListener('resize', () => {
  showNavbar();
  showSideNavButton();
});

function openNav() {
  document.querySelector('.sidenav').style.width = '250px';
  document.getElementById("sidenav-btn").style.display="none";
}

function closeNav() {
  document.querySelector('.sidenav').style.width = '0';
  document.getElementById("sidenav-btn").style.display="block";
}

// Function to toggle subnav visibility and prevent default link behavior when subnav is present
/*function toggleSubnav(event) {
  var subnav = event.target.nextElementSibling;
  if (subnav) {
      if (subnav.style.display === "block") {
          subnav.style.display = "none";
      } else {
          subnav.style.display = "block";
      }
      event.preventDefault();
      event.stopPropagation();
  }
}*/
// Get the parent element of the links
var linksParent = document.getElementById("sidenav");

// Add an event listener to the parent element
linksParent.addEventListener("click", function(event) {
  // Check if the clicked element is a link with a subnav
  if (event.target.classList.contains("fa-caret-down")) {
    // Get the subnav element
    var subnav = event.target.parentNode.nextElementSibling;
    if (subnav) {
      // Toggle the subnav visibility
      subnav.style.display = subnav.style.display === "block" ? "none" : "block";
      // Prevent default link behavior and stop propagation
      event.preventDefault();
      event.stopPropagation();
    }
  }
});


// Add event listener to all links in the sidenav
var sidenavLinks = document.querySelectorAll('.sidenav a');
for (var i = 0; i < sidenavLinks.length; i++) {
  sidenavLinks[i].addEventListener('click', toggleSubnav);
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
}
