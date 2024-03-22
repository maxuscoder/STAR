'use strict';

const images = document.querySelectorAll('img');
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
let missionCards = document.querySelectorAll('.mission-card');

const renderMissions = function () {
  loader.style.display = 'flex';

  fetch('https://ll.thespacedevs.com/2.2.0/launch/?limit=94&offset=10')
    .then(res => res.json())
    .then(data => {
      let html = ``;

      for (let i = 0; i < data.results.length; i++) {
        //console.log(`${i} : ${data.results[i].launch_service_provider.name}, ${data.results[i].image}, ${data.results[i].mission.description}`);
        if (data.results[i].image) {
          html = `
                <div class="mission-card">
        <div class="card-content">
            <div class="image-container">
                <img src="${data.results[i].image}" alt="Mission Image">
            </div>
            <div class="text-content">
                <h2>${data.results[i].name} (${data.results[i].net.substring(
            0,
            4
          )})</h2>
                <p>${data.results[i].mission.description}</p>
            </div>
        </div>
    </div>`;
          container.insertAdjacentHTML('beforeend', html);
        }
      }
      missionCards.forEach(card => {
        card.addEventListener('click', function () {
          card.querySelector('.card-inner').classList.toggle('flipped');
        });
      });
      console.log(data);
    })
    .catch(error => {
      console.error(error);
      loader.textContent = 'Error loading missions!';
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};
renderMissions();
