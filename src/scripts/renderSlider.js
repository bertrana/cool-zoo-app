
export const renderSlider = users => {
  console.log(users);
  const ul = document.querySelector('.slider__list');
  const fragment = document.createDocumentFragment();

  for (let user of users) {
    fragment.append(renderUserCard(user));
  }

  ul.append(fragment);
}

const renderUserCard = data => {
  const template = document.querySelector('.user-card');
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector('.user-card__img');
  img.src = data.picture.medium;

  const name = clone.querySelector('.user-card__name');
  name.innerHTML = `${data.first} ${data.last}`;

  console.log(clone);

  return clone;
}