class Particula {
	constructor() {
		this.tamanoInicial = random(10, 50);
		this.tamano = this.tamanoInicial;
		this.estaMuerta = false;
		this.tiempoDeVidaInicial = Math.ceil(random(10, 80));
		this.tiempoDeVida = this.tiempoDeVidaInicial;

		this.pos = createVector(mouseX, mouseY);

		this.vel = createVector(0, random(3, 5));
		this.vel.rotate(random(360));

		this.g = createVector(0, 0.1);
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
			circle(this.pos.x, this.pos.y, this.tamanoInicial);
		}
	}
	// Método ==> method display
	mostrar() {
		circle(this.pos.x, this.pos.y, this.tamano);
	}
}