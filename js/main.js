/**
 * main.js
 * Punto de entrada del juego. Aquí configuramos el objeto
 * Phaser.Game: tamaño del canvas, renderer, física, y el orden
 * en que se ejecutan las Scenes.
 */
const config = {
  type: Phaser.AUTO,       // Phaser elige WebGL si está disponible, si no, Canvas
  width: 800,
  height: 600,
  parent: 'game-container', // el <div> del index.html donde se inyecta el canvas
  backgroundColor: '#000000',
  scene: [BootScene, PreloadScene, WorldScene], // orden de ejecución
  physics: {
    default: 'arcade',
    arcade: {
      debug: false // ponlo en true si quieres ver los bounding boxes de colisión
    }
  }
};

const game = new Phaser.Game(config);
