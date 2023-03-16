const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: decided to leave the house. When she got to :inserty:, she noticed her friend on the sidewalk and :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is very emotional, weighs 300 pounds, and it was a hot day."
const insertX = ["Donna", "Karen", "Mother Earth"]
const insertY = ["the pool", "Grandma's", "the mountain house"]
const insertZ = ["chugged some water", "cried over a melted ice cream cone", "fell asleep instantly"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94 - 32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}