let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Particula();
}

function draw() {
  p.actualizar();
  p.mostrar();
}
