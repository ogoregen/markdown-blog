
var clear_, start, click, release, planets, s;

function setup(){

  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  clear_ = false;
  start = false;
  click = createVector();
  release = createVector();
  var p = new planet(createVector(windowWidth / 2, windowHeight / 2), createVector());
  p.m = 1000;
  p.r = 20;
  planets = [
    p,
    new planet(createVector(windowWidth / 2 + windowWidth / 6, windowHeight / 2), createVector(0, 50)),
  ];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){

  background(255);
  for(let i = 0; i < planets.length; i++){

    p = planets[i];
    for(let j = 0; j < planets.length; j++){

      p2 = planets[j];
      p.attract(p2);
      p.checkcollision(j);
    }
    p.update();
    p.trails();
    p.place();
  }
  hud();
}

function mousePressed(){

  start = true;
  click.set(mouseX, mouseY);
  if(mouseX > width-60 && mouseY > height-40){

    clear_ = true;
    for(let i = planets.length-1; i >= 0; i--) planets.pop();
  }
}

function mouseReleased(){

  if(!clear_){

    release.set(mouseX, mouseY);
    planets.push(new planet(click, p5.Vector.sub(click, release)));
  }
  else clear_ = false;
}

function hud(){

  stroke(0);
  if(mouseIsPressed) line(click.x, click.y, mouseX, mouseY);
}

class planet{

  constructor(p, v_){

    this.blackhole = false;
    this.v = v_.copy();
    this.v.div(50);
    this.a = createVector();
    this.position = p.copy();
    this.r = random(40);
    this.clr = int(random(0, 200));
    this.m = this.r;
    this.c = 0;
    this.trail = [];
  }

  update(){

    if(this.position.x > width + height) this.position.x = height*-1;
    else if(this.position.x < height*-1) this.position.x = width + height;
    if(this.position.y > height*2) this.position.y = height*-1;
    else if(this.position.y < height*-1) this.position.y = height*2;

    if(this.c == 2000){

      for(let i = 1; i < 2000; i++) this.trail[i-1] = this.trail[i];
      this.trail[1999] = this.position.copy();
    }
    else{

      this.trail[this.c] = this.position.copy();
      this.c++;
    }

    this.v.add(this.a);
    this.position.add(this.v);
    this.a.mult(0);
  }

  apply(f){

    this.a.add(f.copy().div(this.m));
  }

  checkcollision(i){

    this.p = planets[i];
    this.d = p5.Vector.dist(this.position, this.p.position);
    if(this != this.p && this.d < this.r/2 + this.p.r/2){

      if(this.m >= this.p.m){

        this.v3 = p5.Vector.mult(this.v, this.m);
        this.v3.add(p5.Vector.mult(this.p.v, this.p.m));
        this.v3.div(this.m + this.p.m);
        this.v.set(this.v3);
        this.m += this.p.m;
        if(this.blackhole) this.r += this.p.r/10;
        else{

          this.r += this.p.r;
          if(this.r >= width || this.r >= height){

            this.blackhole = true;
            this.r = this.r/10;
            this.clr = 0;
          }
        }
        planets.splice(i, 1);
      }
    }
  }

  attract(p){

    if(p != this){

      this.f = p5.Vector.sub(this.position, p.position);
      this.d = p5.Vector.dist(this.position, p.position);
      this.f.normalize();
      this.magnitude = (this.m * p.m) / (this.d * this.d);
      this.f.mult(this.magnitude);
      p.apply(this.f);
    }
  }

  place(){

    if(this.blackhole) stroke(255);
    else stroke(this.clr);
    fill(this.clr);
    ellipse(this.position.x, this.position.y, this.r, this.r);
  }

  trails(){

    if(this.blackhole) stroke(255);
    else stroke(this.clr);
    for(let i = 0; i < this.c; i++) point(this.trail[i].x, this.trail[i].y);
  }
}

