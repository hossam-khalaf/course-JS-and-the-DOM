const nanodegreeCard = document.querySelector('.card');

//textContent / innerHTML / outerHTML /innerText
// nanodegreeCard.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors';
nanodegreeCard.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';

console.log(nanodegreeCard.textContent);

//Add content to the page

const heading = document.querySelector('h1.white');
const extraText = document.createElement('span');
extraText.textContent = ' Right Now !';

heading.appendChild(extraText);

// insertAdjacentHTML('beforeend', '')  position and text

//romoving elements  / .removeChild() && .remove()

// properties >> .firstElementChild && .parentElement

// heading.removeChild(extraText);

// Styling

const headingSix = document.querySelector('h6.text-center');
headingSix.style.color = 'orange';
headingSix.style.fontSize = '20px';
headingSix.setAttribute('id', 'orange-heading');
document.querySelector('#orange-heading').style.backgroundColor = 'cyan';
nanodegreeCard.style.background = 'tomato';
