let myFont;

function preload() {
    myFont = loadFont('orbitron/orbitron-medium.otf');
}

var lexicon;
var voice;
var word = '';
var size = 10;

function setup() {
    // animation an position 0 setzen unter den HTML text
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(0);
    voice = new p5.Speech();
    lexicon = new RiLexicon();
}

function draw() {
// background(255, 0, 0);
    textFont(myFont);
    textSize(size);
    textAlign(CENTER);
    fill(0);
    stroke(255, 0, 0);
    text(word, width / 2, height / 2);

    size++;
}

//when we mousePress, choose a new random word and speak the word
function mousePressed() {
    size = 10;
    word = lexicon.randomWord('nn', 3);
    voice.speak(word);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}