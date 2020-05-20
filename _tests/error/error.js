let img;
function preload() {
    img = loadImage('assets/error.svg');
}

let myFont;
function preload() {
    myFont = loadFont('orbitron/orbitron-medium.otf');
}

let reverb
let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

let env;
let triOsc;

function setup() {
    image(img, 100, 100);
   // createCanvas(windowWidth, windowHeight);
    background(100);

    let cnv = createCanvas(windowWidth, windowHeight);
//    cnv.mousePressed(playSynth);
//    cnv.background(0)

    env = new p5.Envelope(t1, l1, t2, l2);
    triOsc = new p5.Oscillator('triangle');
    env.setRange(0.3,0)
    reverb = new p5.Reverb();
    reverb.drywet(1);
    reverb.process(triOsc, 3,2);
}

function draw() {
    // ellipse(mouseX, mouseY, 20, 20);

    textFont(myFont);

    // linie + text
    fill(255)
    noStroke();
    background(0,20)
    if (frameCount%20==0){
        background('red')
        playSynth()
        textSize(80)
    }
    text(int(frameCount/10 + mouseX/10)%20,width/2,height/2)
    rect(mouseX,0,10,height)
}

function playSynth() {

    triOsc.freq(440*pow(pow(2,1/12),int(frameCount/10 + mouseX/10)%20) );
    triOsc.start();
    // triOsc.amp(0.2);
    env.play(triOsc);
}
function mouseMoved(){
    playSynth()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

