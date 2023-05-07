const randomize = document.querySelector('.randomize');
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const insertX = [`pic1.jpg`, `pic6.jpg`, `pic11.jpg`];
const insertY = [`pic2.jpg`, `pic7.jpg`, `pic12.jpg`];
const insertZ = [`pic3.jpg`, `pic8.jpg`, `pic13.jpg`];
const insertW = [`pic4.jpg`, `pic8.jpg`, `pic14.jpg`];
const insertV = [`pic5.jpg`, `pic10.jpg`, `pic15.jpg`];

randomize.addEventListener('click', result);

function result() {
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const wItem = randomValueFromArray(insertW);
  const vItem = randomValueFromArray(insertV);

  pics[0] = xItem;
  pics[1] = yItem;
  pics[2] = zItem;
  pics[3] = wItem;
  pics[4] = vItem;

  /* Looping through images */
  for (const image of pics) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
    });
  }
}

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'Neon mountain sunset',
    'pic2.jpg' : 'Futuristic cityscape with hot pink clouds',
    'pic3.jpg' : 'Planet with bright neon rings',
    'pic4.jpg' : 'Bright pastel river sunset',
    'pic5.jpg' : 'Person staring at a futuristic cityscape with lights shooting into the sky',
    'pic6.jpg' : 'Neon mountain sunset with telephone lines',
    'pic7.jpg' : 'Cityscape with a setting sun',
    'pic8.jpg' : 'Planets in the night sky above trees',
    'pic9.jpg' : 'Crescent moon in night sky above mountains',
    'pic10.jpg' : '80s style city in front of a large Pink Sun on top of a grid',
    'pic11.jpg' : 'A person walking through a neon lit street',
    'pic12.jpg' : '80s style car driving to a city on top of a grid',
    'pic13.jpg' : 'Satellite dishes pointed at the night sky',
    'pic14.jpg' : 'Pink world with large planets in the sky, tilted',
    'pic15.jpg' : 'A slightly colorful sky above green grass',
  }
