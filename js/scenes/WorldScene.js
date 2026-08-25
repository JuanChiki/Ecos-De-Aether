/**
 * WorldScene
 * La escena principal del juego, donde el jugador se moverá,
 * explorará el mundo y (más adelante) luchará contra enemigos.
 *
 * Fase 1: solo mostramos un placeholder (un rectángulo de color)
 * representando el "suelo" del mundo, para confirmar que Phaser
 * está corriendo correctamente.
 */
class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }

  create() {
    // Placeholder del suelo (reemplazaremos esto por un tilemap real)
    this.add.rectangle(400, 300, 800, 600, 0x2d5a3d);

    // Texto de referencia para confirmar que la escena cargó bien
    this.add.text(20, 20, 'Ecos de Aether — Fase 1: Base del proyecto', {
      font: '18px monospace',
      fill: '#ffffff'
    });
  }

  update() {
    // Aquí vivirá el game loop: movimiento del jugador, IA de
    // enemigos, comprobaciones de colisión, etc. Todavía vacío.
  }
}
