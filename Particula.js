class Particula {
	constructor() {
		this.boli = (1) < 1 ? true : false;

		if (this.boli) {
			this.color = color(25, 2, random(100, 255), 100);
			this.vel = createVector(0, random(1, 1));
			this.vel.rotate(random(360));
		}
		
		else {
			this.color = color(255, 0, random(20, 255), 100);
			this.vel = createVector(0, random(9, 8));
			this.vel.rotate(random(-20, 20));
		}

		this.tamanoInicial = random(30, 65);
		this.tamano = this.tamanoInicial;
		this.estaMuerta = false;
		this.tiempoDeVidaInicial = Math.ceil(random(50, 150));
		this.tiempoDeVida = this.tiempoDeVidaInicial;

		this.pos = createVector(random(windowWidth/3, windowHeight));

		this.g = createVector(0, -0.05);
	}
	// Método ==> method update
	actualizar() {
		this.vel.add(this.g);
		this.pos.add(this.vel);

		this.tamano = map(
			this.tiempoDeVida,
			0,
			this.tiempoDeVidaInicial,
			0,
			this.tamanoInicial
		);

		this.tiempoDeVida -= 1;

		if (this.tiempoDeVida <= 0) {
			this.estaMuerta = true;
			print('ups, me morí!');
			noFill();
			stroke(this.color);
			strokeWeight();
			circle(this.pos.x, this.pos.y, this.tamanoInicial);
		}
	}
	// Método ==> method display
	mostrar() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.tamano);
	}
}