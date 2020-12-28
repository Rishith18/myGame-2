//720 y, 80 interval

var player, lifebarOutline, lifebar, lifebarWall;
var hi;
var vault, vautImg

function preload() {
  vaultImg = loadImage("vault.png");
}

function setup() {
  createCanvas(800,800);

  balli = createSprite(440,760,80,60);
  balli.shapeColor = 200;
  balli.velocityX = -4;
  balli2 = createSprite(760,120,10,10);
  balli2.shapeColor = 200;
  balli2.velocityY = -4;
  walli = createSprite(80,760,5,80);
  walli.shapeColor = 200;
  walli2 = createSprite(760,160,80,5);
  walli2.shapeColor = 200;
  walli3 = createSprite(760,155,80,5);
  walli3.shapeColor = 200;
  walli4 = createSprite(600,160,80,5);
  walli4.shapeColor = 200;
  walli5 = createSprite(560,360,5,80);
  walli5.shapeColor = 200;
  
  laser1st1 = createSprite(160,760,5,80);
  laser1st1.shapeColor = "red";
  laser1st2 = createSprite(240,760,5,80);
  laser1st2.shapeColor = "red";
  laser1st3 = createSprite(320,760,5,80);
  laser1st3.shapeColor = "red";
  laser1st4 = createSprite(400,760,5,80);
  laser1st4.shapeColor = "red";
  laser1st5 = createSprite(480,760,5,80);
  laser1st5.shapeColor = "red";
  laser1st6 = createSprite(560,760,5,80);
  laser1st6.shapeColor = "red";
  laser1st7 = createSprite(640,760,5,80);
  laser1st7.shapeColor = "red";
  laser1st8 = createSprite(720,760,5,80);
  laser1st8.shapeColor = "red";
  laser2nd1 = createSprite(720,560,160,5);
  laser2nd1.shapeColor = "red";
  laser2nd1.rotationSpeed = -3;
  laser2nd2 = createSprite(720,560,5,160);
  laser2nd2.shapeColor = "red";
  laser2nd2.rotationSpeed = -3;
  laser3rd1 = createSprite(120,680,40,5);
  laser3rd1.shapeColor = "red";
  laser3rd1.velocityX = 15;
  laser3rd2 = createSprite(1000000,680,40,5);
  laser3rd2.shapeColor = "red";
  laser3rd2.velocityX = 15;
  laser4th1 = createSprite(20,560,40,5);
  laser4th1.shapeColor = "red";
  laser4th1.velocityY = 8;
  laser4th2 = createSprite(60,560,40,5);
  laser4th2.shapeColor = "red";
  laser4th2.velocityY = -8;
  laser5th1 = createSprite(240,560,160,5);
  laser5th1.shapeColor = "red";
  laser5th1.rotationSpeed = -5;
  laser5th2 = createSprite(240,560,5,160);
  laser5th2.shapeColor = "red";
  laser5th2.rotationSpeed = -5;
  laser5th3 = createSprite(400,480,160,5);
  laser5th3.shapeColor = "red";
  laser5th3.rotationSpeed = 5;
  laser5th4 = createSprite(400,480,5,160);
  laser5th4.shapeColor = "red";
  laser5th4.rotationSpeed = 5;
  laser5th5 = createSprite(560,560,160,5);
  laser5th5.shapeColor = "red";
  laser5th5.rotationSpeed = -5;
  laser5th6 = createSprite(560,560,5,160);
  laser5th6.shapeColor = "red";
  laser5th6.rotationSpeed = -5;
  laser6th1 = createSprite(775,160,50,5);
  laser6th1.shapeColor = "red";
  laser6th1.velocityY = 10;
  laserWall1 = createSprite(735,400,30,5);
  laserWall1.shapeColor = "grey";
  laserWall2 = createSprite(735,320,30,5);
  laserWall2.shapeColor = "grey";
  laserWall3 = createSprite(735,240,30,5);
  laserWall3.shapeColor = "grey";
  laserWall4 = createSprite(735,160,30,5);
  laserWall4.shapeColor = "grey";
  laser7th1 = createSprite(640,320,15,15);
  laser7th1.shapeColor = "red";
  laser7th1.velocityX = 4;
  laser7th1.velocityY = -2;
  laser7th2 = createSprite(640,240,15,15);
  laser7th2.shapeColor = "red";
  laser7th2.velocityX = -3;
  laser7th2.velocityY = 4;
  laser7th3 = createSprite(640,280,15,15);
  laser7th3.shapeColor = "red";
  laser7th3.velocityX = 5;
  laser7th3.velocityY = 3;
  laser8th1 = createSprite(400,340,5,75);
  laser8th1.shapeColor = "red";
  laser8th1.velocityY = -4;
  laser8th2 = createSprite(320,280,5,75);
  laser8th2.shapeColor = "red";
  laser8th2.velocityY = 5;
  laser8th3 = createSprite(240,340,5,75);
  laser8th3.shapeColor = "red";
  laser8th3.velocityY = -6;
  laser8th4 = createSprite(160,280,5,75);
  laser8th4.shapeColor = "red";
  laser8th4.velocityY = 7;
  laser9th1 = createSprite(280,260,5,40)
  laser9th1.shapeColor = "red";
  laser9th1.velocityX = 2;
  laser9th2 = createSprite(280,300,5,40)
  laser9th2.shapeColor = "red";
  laser9th2.velocityX = -3;
  laser10th1 = createSprite(240,120,480,80)
  laser10th1.shapeColor = "red";

  path1 = createSprite(400,100,168,20);
  path1.shapeColor = 200;
  path2 = createSprite(326,120,20,40);
  path2.shapeColor = 200;
  path3 = createSprite(292,140,88,20);
  path3.shapeColor = 200;
  path4 = createSprite(246,136,22,28);
  path4.shapeColor = 200;
  path5 = createSprite(192,120,130,20)
  path5.shapeColor = 200;
  path6 = createSprite(138,106,20,32.5);
  path6.shapeColor = 200;
  path7 = createSprite(90,100,90,20)
  path7.shapeColor = 200;
  path8 = createSprite(40,129,20,78);
  path8.shapeColor = 200;

  enemy1 = createSprite(120,680,10,10);
  enemy1.shapeColor = "darkred";
  enemy1.velocityY = 3;

  vault = createSprite(440,200,50,50);
  vault.addImage("hehe",vaultImg);
  vault.scale = 0.1;

  player = createSprite(40,760,10,10);
  player.shapeColor = "black";

  lifebarOutline = createSprite(400,40,700,40);
  lifebarOutline.shapeColor = "black"
  lifebar = createSprite(400,40,690,30);
  lifebar.shapeColor = rgb(0, 186, 3);
  lifebarWall = createSprite(400,80,800,5);
  lifebarWall.shapeColor = "black";

  edgeBottom = createSprite(400,802.5,800,5);
  edgeLeft = createSprite(-2.5,400,5,800);
  edgeRight = createSprite(802.5,400,5,800);

  wall1 = createSprite(360,720,725,5);
  wall1.shapeColor = "grey";
  wall2 = createSprite(720,640,5,160);
  wall2.shapeColor = "grey";
  wall3 = createSprite(720,480,165,5);
  wall3.shapeColor = "grey";
  wall4 = createSprite(640,560,5,160);
  wall4.shapeColor = "grey";
  wall5 = createSprite(360,640,565,5);
  wall5.shapeColor = "grey";
  wall6 = createSprite(80,560,5,160);
  wall6.shapeColor = "grey";
  wall7 = createSprite(240,480,5,160);
  wall7.shapeColor = "grey";
  wall8 = createSprite(400,560,5,160);
  wall8.shapeColor = "grey";
  wall9 = createSprite(560,480,5,160);
  wall9.shapeColor = "grey";
  wall10= createSprite(360,400,725,5);
  wall10.shapeColor = "grey";
  wall11 = createSprite(720,280,5,240);
  wall11.shapeColor = "grey";
  wall12 = createSprite(680,160,85,5);
  wall12.shapeColor = "grey";
  wall13 = createSprite(560,200,5,240);
  wall13.shapeColor = "grey";
  wall14= createSprite(320,320,485,5);
  wall14.shapeColor = "grey";
  wall15= createSprite(240,240,485,5)
  wall15.shapeColor = "grey";
  wall16= createSprite(480,200,5,80)
  wall16.shapeColor = "grey";
  wall17= createSprite(280,160,405,5)
  wall17.shapeColor = "grey";

  endGame = createSprite(400,400,1000,1000);
  endGame.shapeColor = 200;
  endGame.visible = false;

}

function draw() {
  background(200,200,200);  


  drawSprites();

  collidee();

  if (laser3rd1.isTouching(wall2)) {
    laser3rd1.x = 120;
    laser3rd1.y = enemy1.y;
  }
  if (laser3rd1.x === 420) {
    laser3rd2.x = 120;
    laser3rd2.y = enemy1.y
  }

  if (balli2.isTouching(walli3)) {
    laser6th1.y = 160;
  }

  if (lifebar.width < 0 || lifebar.width === 0) {
    endGame.visible = true;
    textSize(100);
    fill("black");
    stroke("black")
    text("You Lose...",165,400);
    lifebar.visible = false;
  } else {
    health();
  }
  if (player.isTouching(path1) || player.isTouching(path2) ||
  player.isTouching(path3) || player.isTouching(path4) ||
  player.isTouching(path5) || player.isTouching(path6) ||
  player.isTouching(path7) || player.isTouching(path8)) {
    hi = 0;
  } else {
    healthMaze();
  }

  if (player.isTouching(vault)) {
    endGame.visible = true;
    textSize(100);
    fill("black");
    stroke("black")
    text("You Win!",200,400);
  } else {
    playerMovement();
  }
}

function playerMovement() {
  if (keyDown("w")) {
    player.y = player.y - 5;
  }
  if(keyDown("s")) {
    player.y = player.y + 5;
  }
  if(keyDown("d")) {
    player.x = player.x + 5;
  }
  if(keyDown("a")) {
    player.x = player.x - 5;
  }
}

function collidee() {
  player.collide(lifebarWall)
  player.collide(edgeBottom);
  player.collide(edgeLeft);
  player.collide(edgeRight);
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(laserWall1);
  player.collide(laserWall2);
  player.collide(laserWall3);
  player.collide(laserWall4);

  balli.bounceOff(edgeRight);
  balli.bounceOff(walli);
  balli2.bounceOff(lifebarWall);
  balli2.bounceOff(walli2);

  enemy1.bounceOff(wall1);
  enemy1.bounceOff(wall5);

  laser4th1.bounceOff(wall1);
  laser4th1.bounceOff(wall10);
  laser4th2.bounceOff(wall1);
  laser4th2.bounceOff(wall10);

  laser7th1.bounceOff(wall11);
  laser7th1.bounceOff(wall10);
  laser7th1.bounceOff(wall12);
  laser7th1.bounceOff(wall13);
  laser7th1.bounceOff(walli4);
  laser7th1.bounceOff(walli5);
  laser7th2.bounceOff(wall11);
  laser7th2.bounceOff(wall10);
  laser7th2.bounceOff(wall12);
  laser7th2.bounceOff(wall13);
  laser7th2.bounceOff(walli4);
  laser7th2.bounceOff(walli5);
  laser7th3.bounceOff(wall11);
  laser7th3.bounceOff(wall10);
  laser7th3.bounceOff(wall12);
  laser7th3.bounceOff(wall13);
  laser7th3.bounceOff(walli4);
  laser7th3.bounceOff(walli5);
  laser8th1.bounceOff(wall10);
  laser8th2.bounceOff(wall10);
  laser8th3.bounceOff(wall10);
  laser8th4.bounceOff(wall10);
  laser8th1.bounceOff(wall15);
  laser8th2.bounceOff(wall15);
  laser8th3.bounceOff(wall15);
  laser8th4.bounceOff(wall15);
  laser9th1.bounceOff(edgeLeft);
  laser9th2.bounceOff(edgeLeft);
  laser9th1.bounceOff(wall13);
  laser9th2.bounceOff(wall13);
  

  if (balli.isTouching(laser1st1)) {
    laser1st1.shapeColor = 200;
  } else {
    laser1st1.shapeColor = "red"
  }
  if (balli.isTouching(laser1st2)) {
    laser1st2.shapeColor = 200;
  } else {
    laser1st2.shapeColor = "red"
  }
  if (balli.isTouching(laser1st3)) {
    laser1st3.shapeColor = 200;
  } else {
    laser1st3.shapeColor = "red"
  }
  if (balli.isTouching(laser1st4)) {
    laser1st4.shapeColor = 200;
  } else {
    laser1st4.shapeColor = "red"
  }
  if (balli.isTouching(laser1st5)) {
    laser1st5.shapeColor = 200;
  } else {
    laser1st5.shapeColor = "red"
  }
  if (balli.isTouching(laser1st6)) {
    laser1st6.shapeColor = 200;
  } else {
    laser1st6.shapeColor = "red"
  }
  if (balli.isTouching(laser1st7)) {
    laser1st7.shapeColor = 200;
  } else {
    laser1st7.shapeColor = "red";
  }
  if (balli.isTouching(laser1st8)) {
    laser1st8.shapeColor = 200;
  } else {
    laser1st8.shapeColor = "red"
  }
}

function health() {
  if (player.isTouching(laser1st1) && laser1st1.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st2) && laser1st2.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st3) && laser1st3.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st4) && laser1st4.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st5) && laser1st5.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st6) && laser1st6.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st7) && laser1st7.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser1st8) && laser1st8.shapeColor === "red") {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser2nd1) || player.isTouching(laser2nd2)) {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser3rd1) || player.isTouching(laser3rd2)) {
    lifebar.width = lifebar.width - 50;
    lifebar.x = lifebar.x - 25;
  }
  if (player.isTouching(laser4th1) || player.isTouching(laser4th2)) {
    lifebar.width = lifebar.width - 100;
    lifebar.x = lifebar.x - 50;
  }
  if (player.isTouching(laser5th1) || player.isTouching(laser5th2) ||
  player.isTouching(laser5th3) || player.isTouching(laser5th4) ||
  player.isTouching(laser5th5) || player.isTouching(laser5th6)) {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
  if (player.isTouching(laser6th1)) {
    lifebar.width = lifebar.width - 150;
    lifebar.x = lifebar.x - 75;
  }
  if (player.isTouching(laser7th1) || player.isTouching(laser7th2) || player.isTouching(laser7th3)) {
    lifebar.width = lifebar.width - 40;
    lifebar.x = lifebar.x - 20;
  }
  if (player.isTouching(laser8th1) || player.isTouching(laser8th2) ||
  player.isTouching(laser8th3) || player.isTouching(laser8th4)) {
    lifebar.width = lifebar.width - 40;
    lifebar.x = lifebar.x - 20;
  }
  if (player.isTouching(laser9th1) || player.isTouching(laser9th2)) {
    lifebar.width = lifebar.width - 40;
    lifebar.x = lifebar.x - 20;
  }
}

function healthMaze() {
  if (player.isTouching(laser10th1)) {
    lifebar.width = lifebar.width - 20;
    lifebar.x = lifebar.x - 10;
  }
}