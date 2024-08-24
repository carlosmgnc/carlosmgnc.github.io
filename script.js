// //function to allow toggling of the hamburger menu
// function toggleMenu(){
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// //function to allow only horizontal scrolling to anchor link
// document.querySelectorAll('.slider-nav a').forEach(function(link) {
//   link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const targetId = this.getAttribute('href').substring(1);
//       const target = document.getElementById(targetId);
//       // const container = document.querySelector('.slider');

//       const sliderNav = this.closest('.slider-nav');
//       const container = sliderNav.previousElementSibling;

//       const targetPosition = target.offsetLeft;

//       container.scrollTo({
//           left: targetPosition,
//           behavior: 'smooth'
//       });
//   });
// });
