var bg,bg2,form,system,code,security;
var score=0;
var button3;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security(
  
  this.button3 = createButton("check")
  )
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  this.button3.mouse(()=>{
    if(system.authenticate(accessCode3,this.access3.value())){
      this.button3.hide()
      this.access3.hide()
      score = score+1
    }
  })

  drawSprites()
}