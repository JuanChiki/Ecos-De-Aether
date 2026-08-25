/**
 * BootScene
 * La primera escena que se ejecuta. Su único trabajo es cargar
 * lo mínimo indispensable (por ejemplo, una barra de carga o un
 * logo) antes de pasar a PreloadScene, que cargará los assets
 * reales del juego.
 *
 * Por ahora no cargamos nada: solo pasamos a la siguiente escena.
 */
class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Aquí más adelante cargaremos, por ejemplo, la imagen del logo
    // o los assets de la barra de progreso.
  }

  create() {
    this.scene.start('PreloadScene');
  }
}
