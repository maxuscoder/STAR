'use strict';

particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

particlesJS('particles-js2', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

particlesJS('particles-js3', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#a9ade1' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

const navLinksContainer = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav li a');
const dailyImg = document.querySelector('.daily-img-container img');
const dailyP = document.querySelector('.daily-img-container p');
const swiperImages = document.querySelectorAll('.swiper-slide img');
const swiperP = document.querySelectorAll('.swiper-slide-content p');

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Gets the Image of the Day and a description
const getImageOfTheDay = function () {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=MHUHJeU2jjc5dxHLinsOTCIWrECadREfxWprOZiP`
  )
    .then(res => res.json())
    .then(data => {
      if (data.hdurl) dailyImg.src = data.hdurl;
      else {
        dailyImg.remove();
      }
      dailyP.textContent = data.title;
    });
  dailyImg.style.width = '400px';
  dailyImg.style.height = '400px';
};

//handles the hover effects on the nav bar links
const handleNavLinksHover = function (e) {
  if (e.target.tagName.toLowerCase() == 'a')
    if (!e.target.classList.contains('hovered-link'))
      e.target.classList.add('hovered-link');
    else e.target.classList.remove('hovered-link');
};

//renders the slider
const renderSlider = function () {
  fetch('https://ll.thespacedevs.com/2.2.0/astronaut/')
    .then(res => res.json())
    .then(data => {
      const [a0, a1, a2, a3, a4] = data.results;
      const astronautsArray = [a0, a1, a2, a3, a4];
      console.log(data);
      swiperImages.forEach((swiperSlide, i) => {
        swiperSlide.src = `${astronautsArray[i].profile_image}`;
        swiperP[i].textContent = data.results[i].name;
      });
    });
};
//  file:///C:/Users/usele/Desktop/Space-Travelling(2)/Space-Travelling/

navLinksContainer.addEventListener('mouseover', function (e) {
  handleNavLinksHover(e);
});

navLinksContainer.addEventListener('mouseout', function (e) {
  handleNavLinksHover(e);
});

//renders the Image of the Day Section
getImageOfTheDay();
renderSlider();
//SPACE MISSIONS API
// fetch('https://ll.thespacedevs.com/2.2.0/event/?format=json')
//   .then(res => res.json())
//   .then(data => console.log(data));

//ASTRONAUTS API
// fetch('http://api.open-notify.org/astros.json')
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=MHUHJeU2jjc5dxHLinsOTCIWrECadREfxWprOZiP')
// .then(res => res.json())
// .then(data => console.log(data[0].image));
