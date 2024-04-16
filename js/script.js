// Selecting the navbar element using its class
let navbar = document.querySelector('.header .navbar');

// Adding an onclick event listener to the element with id 'menu-btn'
document.querySelector('#menu-btn').onclick = () =>{
   // Toggling the 'active' class on the navbar element
   navbar.classList.toggle('active');
}

// Adding an event listener for window scroll event
window.onscroll = () =>{
   // Removing the 'active' class from the navbar element when scrolling occurs
   navbar.classList.remove('active');
}

// Adding click event listeners to all h3 elements inside .faq .box elements
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   // Toggling the 'active' class on the parent element of the clicked h3 element
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

// Initializing a Swiper instance for the element with class 'home-slider'
var swiper = new Swiper(".home-slider", {
   // Enabling infinite loop for the slides
   loop:true,
   // Setting the coverflow effect for slide transition
   effect: "coverflow",
   // Specifying space between slides
   spaceBetween: 30,
   // Enabling grab cursor for better user experience
   grabCursor: true,
   // Configuring coverflow effect parameters
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   // Adding navigation buttons for next and previous slides
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// Initializing another Swiper instance for the element with class 'gallery-slider'
var swiper = new Swiper(".gallery-slider", {
   // Enabling infinite loop for the slides
   loop:true,
   // Setting the coverflow effect for slide transition
   effect: "coverflow",
   // Setting the number of slides per view automatically
   slidesPerView: "auto",
   // Centering the slides
   centeredSlides: true,
   // Enabling grab cursor for better user experience
   grabCursor: true,
   // Configuring coverflow effect parameters
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   // Adding pagination for navigation
   pagination: {
      el: ".swiper-pagination",
    },
});

// Initializing another Swiper instance for the element with class 'reviews-slider'
var swiper = new Swiper(".reviews-slider", {
   // Enabling infinite loop for the slides
   loop:true,
   // Setting the number of slides per view automatically
   slidesPerView: "auto",
   // Enabling grab cursor for better user experience
   grabCursor: true,
   // Specifying space between slides
   spaceBetween: 30,
   // Adding pagination for navigation
   pagination: {
      el: ".swiper-pagination",
   },
   // Configuring breakpoints for responsive design
   breakpoints: {
      768: {
        slidesPerView: 1, // Showing 1 slide per view on screens wider than 768px
      },
      991: {
        slidesPerView: 2, // Showing 2 slides per view on screens wider than 991px
      },
   },
});
