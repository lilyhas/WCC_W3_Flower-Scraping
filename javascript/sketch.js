let canvas;

let venusImg = [];

let imagePath;
let displayState = 0;
let temp;



let img;

// Grabbing the data from the json file and loading the image names in order to get the images 
function preload() {

  fetch("./json/images.json").then(function (response) {
    return response.json();
  }).then(function (data) {

    imagePath = data.content.imageNames;
    // console.log(imagePath);

    for (let i = 0; i < imagePath.length; i++) {

      let temp = loadImage('images/' + imagePath[i]); // creating a temporary object

      venusImg.push(temp); // filling the array 
      console.log(venusImg);
    }



  }).catch(function (err) {
    console.log(`Something went wrong: ${err}`);
  });


}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element
  frameRate(10);


}

function draw() {
  background(100, 100, 250);

  for (let i = 0; i < venusImg.length; i++) {
    image(venusImg[i], random(height), random(width));
  }

  filter(THRESHOLD);
  textSize(30);
  fill(255);
  textWrap(WORD);
  text('bring me flowers', mouseX, mouseY);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}