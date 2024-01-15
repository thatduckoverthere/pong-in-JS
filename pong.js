//    https://www.protectedtext.com/badpong    1234
let c = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let balldiameter = 5;

let ballVectors = [-1, 1];
let ballInitialVectorX = ballVectors[Math.floor(Math.random() * ballVectors.length)];
let ballInitialVectorY = ballVectors[Math.floor(Math.random() * ballVectors.length)];
let paddleHeight = 30;

let playerLeftUp = 87; //W
let playerLeftDown = 83; //S
let playerRightUp = 38; //Arow Up
let playerRightDown = 40; //Arow Down

let leftScore = 0;
let rightScore = 0;

let paddleSpeed = 3;

let keys = {

  leftUp:false,
  leftDown:false,
  rightUp:false,
  rightDown:false

};

document.addEventListener('keydown', pressedButton);

function pressedButton(event) {
    if (event.keyCode === playerLeftUp){

      keys.leftUp = true;

    }

      if (event.keyCode === playerLeftDown){

        keys.leftDown = true;

    }


    if (event.keyCode === playerRightUp){

        keys.rightUp = true;
      }

    if (event.keyCode === playerRightDown){

        keys.rightDown = true;
      }


}

document.addEventListener('keyup', function(event){

if(event.keyCode === playerLeftUp){

  keys.leftUp = false;

}



      if(event.keyCode === playerLeftDown){

        keys.leftDown = false;
      }


if(event.keyCode === playerRightUp){

  keys.rightUp = false;

}

        if(event.keyCode === playerRightDown){

          keys.rightDown = false;
        }

});










let background = {
  draw:function(){
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,c.width,c.height);
  }
}

let ball = {
  x:c.width/2-balldiameter,
  y:c.height/2-balldiameter,
  speedx:ballInitialVectorX,
  speedy:ballInitialVectorY,
  draw:function(){

  ctx.fillStyle="#ffffff";
  ctx.fillRect(this.x,this.y ,balldiameter,balldiameter)

},//22
  move:function(){
    this.x += this.speedx;
    this.y += this.speedy;


      if(this.x >= c.width-balldiameter) {
         // this.speedx = 0;
         // this.speedy = 0;
         leftScore = leftScore + 1;

         this.x = c.width/2-balldiameter/2;
         this.y = c.height/2-balldiameter/2;

         ballInitialVectorX = ballVectors[Math.floor(Math.random() * ballVectors.length)];
         ballInitialVectorY = ballVectors[Math.floor(Math.random() * ballVectors.length)];

         this.speedx = ballInitialVectorX;
         this.speedy = ballInitialVectorY;
     }

    if(this.x <= 0) {
        // this.speedx = 0;
        // this.speedy = 0;
        rightScore += 1;

        this.x = c.width/2-balldiameter/2;
        this.y = c.height/2-balldiameter/2;

        ballInitialVectorX = ballVectors[Math.floor(Math.random() * ballVectors.length)];
        ballInitialVectorY = ballVectors[Math.floor(Math.random() * ballVectors.length)];

        this.speedx = ballInitialVectorX;
        this.speedy = ballInitialVectorY;

    }


     if(this.y >= c.height-balldiameter) {
        this.speedy = -1;
    }


   if(this.y <= 0) {
       this.speedy = 1;
}
//dog

// verificam daca mingea se loveste de paleta jucatorului 1
if (this.x <= balldiameter*2 && this.x >= balldiameter) {
  if (this.y >= leftPaddle.y && this.y <= leftPaddle.y + paddleHeight) {
    this.speedx = 1;
    console.log("OK P1");
  }
}
// if (this.x <= -balldiameter) {
//     console.log("Point for P2");
//
// }

// verificam daca mingea se loveste de paleta jucatorului 2
if (this.x >= c.width - balldiameter*3 && this.x <= c.width - balldiameter*2) {
  if (this.y >= rightPaddle.y && this.y <= rightPaddle.y + paddleHeight) {
    this.speedx = -1;
    console.log("OK P2");
  }
}
// if (this.x >= c.width) {
//     console.log("Point for P1");
// }
//dog
}
}


// initializam paleta stanga (Jucator 1)
let leftPaddle = {//cu codul de la small
  x: balldiameter,
  y: c.height/2 - paddleHeight/2,
  speedx:0,//0 like the number of Windows phones sold this year
  speedy:0,

  draw: function(){ //declaram functia draw
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, balldiameter, paddleHeight);
  },

      move:function(){

      //   if((this.y >= 0 || keys.leftDown === true) && (this.y <= c.height || keys.leftUp === true)){
      //   this.y += this.speedy;
      //   }
      //
      //   if(keys.leftDown === true){
      //       this.speedy = 5;
      //   }
      //
      //
      //   if(keys.leftUp === false && keys.leftDown === false){
      //
      //     this.speedy = 0;
      //   }
      //
      //
      //       if(keys.leftUp === true){
      //
      //         this.speedy = -5;
      //
      //       }
      //
      // }

      if (keys.leftDown) { this.y += paddleSpeed; }
         if (keys.leftUp) { this.y -= paddleSpeed; }
         // ne asiguram ca paletele raman pe ecran
         if (this.y <= 0) { this.y = 0 };
         if (this.y >= c.height - paddleHeight) { this.y = c.height - paddleHeight };

}
}



let rightPaddle = {// cu codul meu
  x: c.width - balldiameter*2,
  y: c.height/2 - paddleHeight/2,
  speedx:0,//0 like the number of Windows phones sold this year
  speedy:0,

  draw: function(){ //declaram functia draw
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(this.x, this.y, balldiameter, paddleHeight);
  },

      move:function(){
      //  if((this.y >= 0 && this.y <= c.height) && (keys.rightUp === true || keys.rightDown === true)){
           this.y += this.speedy;
        // }

          if (this.y <= 0) { this.y = 0 };
          if (this.y >= c.height - paddleHeight) { this.y = c.height - paddleHeight };


        if(keys.rightDown === true){

          this.speedy = paddleSpeed;
          }

    if(keys.rightDown === false && keys.rightUp === false){

      this.speedy = 0;
    }



            if(keys.rightUp === true){

              this.speedy = -paddleSpeed;

            }

      }

}







function draw(){
  background.draw();

  // Desenam scorul
   ctx.fillStyle = '#333333';
   ctx.font = 'bold 120px Courier New';
   ctx.textAlign = 'center';
   ctx.fillText(leftScore + ":" + rightScore, c.width/2, 100);


  ball.draw();
  ball.move();

  leftPaddle.draw();
  leftPaddle.move();

  rightPaddle.draw();
  rightPaddle.move();

  requestAnimationFrame(draw)
}
requestAnimationFrame(draw)
