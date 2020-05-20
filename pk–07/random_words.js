let myFont;
function preload() {
    myFont = loadFont('orbitron/orbitron-medium.otf');
}

var lexicon;
var voice;
var word = 'hallo';
var size = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255,43,0);
    voice = new p5.Speech();
    lexicon = new RiLexicon();

}
function draw(){
    //   background(255,43,0);
    textFont(myFont);
    textSize(size);
    textAlign(CENTER);
    fill(0);
    stroke(255,43,0);
    text(word, width/2,height/2);
    size++;

}

// per Mausklick ein neues WOrt generieren
function mousePressed(){
    size = 10;
    word = lexicon.randomWord('nn',3);
    voice.speak(word);
}

