import "./sass/styles.scss";

const axios = require('axios');
const url = 'https://randomuser.me/api/?results=10&inc=name,picture&noinfo';

// fetch(url)
//   .then((response) => {
//     return response.json();
//   }).then((data) => {
//     renderSlider(data.results);
//   }).catch((error) => {
//     console.log(error);
//   });

axios.get(url)
  .then((response) => {
    renderSlider(response.data.results);
  }).catch((error) => {
    console.log(error);
  });

function renderSlider(users) {
  const ul = document.querySelector('.slider__list');
  const fragment = document.createDocumentFragment();

  for (let user of users) {
    fragment.append(renderUserCard(user));
  }

  ul.append(fragment);
}

function renderUserCard(data) {
  const template = document.querySelector('.user-card');
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector('.user-card__img');
  img.src = data.picture.medium;

  const name = clone.querySelector('.user-card__name');
  name.innerHTML = `${data.first} ${data.last}`;

  console.log(clone);

  return clone;
}