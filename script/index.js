const navbar = document.getElementById('navbar');
const sideNav = document.getElementById('sidenav');
const sideNavButton = document.getElementById('sidenav-btn');
function closeSideNav() {
  sideNav.classList.remove('active');
}
showNavbar();
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
  document.querySelector('.sidenav-btn').style.display ="none";
  // document.getElementById("sidenav-btn").style.display="none";
}

function closeNav() {
  document.querySelector('.sidenav').style.width = '0';
  document.querySelector('.sidenav-btn').style.display ="block";
  // document.getElementById("sidenav-btn").style.display="block";
}

function toggleSubnav(event) {
  // Check if the clicked element is a parent link with a subnav
  var subnav = event.target.nextElementSibling;
  if (subnav && subnav.classList.contains("subnav")) {
    // Toggle the subnav visibility
    subnav.style.display = subnav.style.display === "block" ? "none" : "block";
    // Prevent default link behavior and stop propagation
    event.preventDefault();
    event.stopPropagation();
  }
}

// Add event listener to all links in the sidenav
var sidenavLinks = document.querySelectorAll('.sidenav a');
for (var i = 0; i < sidenavLinks.length; i++) {
  sidenavLinks[i].addEventListener('click', toggleSubnav);
}
window.onscroll = function() {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 600|| document.documentElement.scrollTop > 600) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}

function scrollToTop() {
  var position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - position / 8);
  }
}

document.querySelectorAll('.secright .coverimg').forEach(function(img) {
  img.addEventListener('click', function() {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    var imgClone = img.cloneNode();
    imgClone.style.maxWidth = '100%';
    imgClone.style.maxHeight = '100%';
    lightbox.appendChild(imgClone);
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
    lightbox.style.display = 'block';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '9999';
    lightbox.style.overflow = 'auto';
    lightbox.style.transition = 'opacity 0.3s ease-in-out';
    imgClone.style.display = 'block';
    imgClone.style.maxWidth = '100%';
    imgClone.style.maxHeight = '100%';
    imgClone.style.margin = 'auto';
    imgClone.style.position = 'absolute';
    imgClone.style.top = '50%';
    imgClone.style.left = '50%';
    imgClone.style.transform = 'translate(-50%, -50%)';
  });
});
