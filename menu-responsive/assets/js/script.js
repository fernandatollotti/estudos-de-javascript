const html = document.documentElement,
      body = document.querySelector('body'),
      headerContent = document.querySelector('.header-content'),
      themeButton = document.querySelector('[data-theme-btn]'),
      searchButton = document.querySelector('[btn-search]'),
      navbar = document.querySelector('.navbar'),
      sidebarOpenButton = document.querySelector('[sidebar-open]'),
      sidebarCloseButton = document.querySelector('[sidebar-close]');
let isDark = window.matchMedia('prefers-color-scheme: dark').matches,
    storedTheme = localStorage.getItem('theme');

// Set the theme based on stored value or system preference
if (storedTheme) {
  html.setAttribute('data-theme', storedTheme);
} else {
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

const changeTheme = () => {
  const currentTheme = html.getAttribute('data-theme'); // Get the current theme attribute value
  let targetTheme = 'light'; // Default target theme is 'light'

  // Switch to dark theme if current theme is light
  if (currentTheme === 'light')
    targetTheme = 'dark';

  // Update the HTML attribute with the new theme and store it in localStorage
  html.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
}

// Add click event to the theme button to toggle themes
themeButton.addEventListener('click', changeTheme);

searchButton.addEventListener('click', () => {
  // Toggle active class for the search button when clicked
  searchButton.classList.toggle('active');
});

sidebarOpenButton.addEventListener('click', () => {
  // Add active class to navbar and header content to open the sidebar
  navbar.classList.add('active');
  headerContent.classList.add('active');
});

body.addEventListener('click', event => {
  let clickedElement = event.target; // Get the element that was clicked

  // Close navbar if clicking outside the button, sidebar icon, or navbar elements
  if(!clickedElement.classList.contains('btn-open') && !clickedElement.classList.contains('ph-list') && !clickedElement.classList.contains('navbar')) {
    navbar.classList.remove('active');
    headerContent.classList.remove('active');
  }
});