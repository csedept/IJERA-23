const navbar = document.getElementById('navbar');
const sideNav = document.getElementById('sidenav');
const sideNavButton = document.getElementById('sidenav-btn');

function closeSideNav() {
  sideNav.classList.remove('active');
}

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

// Toggle the visibility of the dropdown menu on small devices
const dropdownLinks = document.querySelectorAll('.dd');
dropdownLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.querySelector('.list').classList.toggle('active');
  });
});

window.addEventListener('resize', () => {
  showNavbar();
  showSideNavButton();
});

showNavbar();
showSideNavButton();

function openNav() {
  document.querySelector('.sidenav').style.width = '250px';
}

function closeNav() {
  document.querySelector('.sidenav').style.width = '0';
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
