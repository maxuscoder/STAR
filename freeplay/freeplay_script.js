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
let count_particles, stats, update;

count_particles = document.querySelector('.js-count-particles');
update = function () {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

const getDataBtn = document.querySelector('.get-data-btn');
const exploreBtn = document.querySelector('.explore-btn');
const slider = document.getElementById('slider');
const popup = document.getElementById('popup');
const dataStatus = document.querySelector('.data-status');
const spinner = document.querySelector('.spinner');
const roverName = document.querySelector('#rover-name');
const launchDate = document.querySelector('#launch-date');
const landingDate = document.querySelector('#landing-date');
const statusInfo = document.querySelector('#status');
const camera = document.querySelector('#camera');
const roverImg = document.querySelector('#rover-img');

let currentData = [];

const getRandomNumber = max => {
  return Math.floor(Math.random() * max) + 1;
};

const getData = async function (sol) {
  currentData = [];
  dataStatus.textContent = 'Getting data, please stand by!';
  spinner.style.display = 'block';
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=MHUHJeU2jjc5dxHLinsOTCIWrECadREfxWprOZiP`
    );
    const data = await response.json();
    data.photos.forEach(element => {
      currentData.push(element);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
  spinner.style.display = 'none';
  dataStatus.textContent = 'Data gathered succesfully';
  setTimeout(() => {
    dataStatus.textContent = '';
  }, 2000);
};

const renderData = function (data) {
  const randomNr = getRandomNumber(currentData.length);
  roverName.textContent = ``;
  launchDate.textContent = ``;
  landingDate.textContent = ``;
  statusInfo.textContent = ``;
  camera.textContent = ``;
  roverImg.src = ``;
  roverName.textContent = `Rover Name: ${data[randomNr].rover.name} (ID:${data[randomNr].rover.id})`;
  launchDate.textContent = `Launch Date: ${data[randomNr].rover.launch_date}`;
  landingDate.textContent = `Landing Date: ${data[randomNr].rover.landing_date}`;
  statusInfo.textContent = `Status: ${data[randomNr].rover.status}`;
  camera.textContent = `Camera: ${data[randomNr].camera.full_name}`;
  roverImg.src = `${data[randomNr].img_src}`;
};

slider.addEventListener('input', function () {
  popup.textContent = `DAY: ${this.value}`;
});

getDataBtn.addEventListener('click', function () {
  getData(+slider.value);
});

exploreBtn.addEventListener('click', function () {
  if (currentData.length === 0) {
    alert("Please first choose which day you're interested in");
    return;
  }
  renderData(currentData);
  console.log(currentData);
});
