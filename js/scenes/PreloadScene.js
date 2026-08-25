/**
 * PreloadScene
 * Aquí cargaremos todos los assets del juego: sprites, tilemaps,
 * audio, JSON de datos (enemies.json, items.json, etc).
 *
 * Fase 1: no tenemos assets todavía, así que solo pasamos
 * directamente a WorldScene.
 */
class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    // Ejemplo futuro:
    // this.load.image('player', 'assets/player/player.png');
    // this.load.tilemapTiledJSON('mapa-pueblo', 'assets/maps/pueblo.json');
  }

  create() {
    this.scene.start('WorldScene');
  }
}
