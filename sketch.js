let hueSlider;
let blurSlider;
let posterSlider;
let saturSlider;
let brightSlider;
let img;

let blurLabel;
let posterLabel;
let hueLabel;
let saturLabel;
let brightLabel;

function preload() {
}

function setup() {
  var canvas = createCanvas(400, 400);
  background(0);

  let fileInput = createFileInput(handleFile);
  fileInput.position(0, canvas.height + 130);

 blurLabel=createP("Blur");
  blurLabel.position(0, canvas.height + 150);
  blurSlider = createSlider(0, 10, 0);
  blurSlider.position(0, canvas.height + 180);
  
  sliderLabel=createP("Posterize");
  sliderLabel.position(0, canvas.height + 190);
  posterSlider = createSlider(2, 20, 20);
  posterSlider.position(0, canvas.height + 220);
  
  hueLabel=createP("Hue");
  hueLabel.position(0, canvas.height + 230);
  hueSlider = createSlider(0, 255, 255);
  hueSlider.position(0, canvas.height + 260);
  
  hueLabel=createP("Saturation");
  hueLabel.position(0, canvas.height + 270);
  saturSlider = createSlider(0, 255, 0);
  saturSlider.position(0, canvas.height + 300);
  
  hueLabel=createP("Brightness");
  hueLabel.position(0, canvas.height + 310);
  brightSlider = createSlider(0, 255, 255);
  brightSlider.position(0, canvas.height + 340);

  colorMode(HSB);
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, function() {
      redraw();
    });
  }
}

function draw() {
  if (img) {
    let hueValue = hueSlider.value();
    let blurValue = blurSlider.value();
    let postValue = posterSlider.value();
    let satValue = saturSlider.value();
    let brightValue = brightSlider.value();

    background(0);
    tint(hueValue, satValue, brightValue);
    image(img, 0, 0, 400, 400);

    filter(BLUR, blurValue);
    filter(POSTERIZE, postValue);
  }
}
