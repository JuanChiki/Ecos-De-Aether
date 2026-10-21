# 🌌 Ecos de Aether

RPG 2D de exploración para navegador, construido con **HTML5, CSS3, JavaScript y [Phaser 3](https://phaser.io/)**. Sin build tools ni dependencias que instalar.

> 🚧 **Estado:** Fase 1 — base del proyecto. El canvas de Phaser corre con una escena mínima (placeholder del mundo).

## ✨ Características

- Arquitectura por **Scenes** de Phaser (`Boot → Preload → World`).
- Física **Arcade** configurada y lista para usar.
- Renderer automático (WebGL con fallback a Canvas).
- Sin proceso de build: archivos estáticos servidos por HTTP.

## 🚀 Cómo ejecutar

1. Clona o descarga el repositorio.
2. Sirve la carpeta raíz con cualquier servidor local estático, por ejemplo:

   ```bash
   # Python
   python -m http.server 8000

   # Node
   npx serve .
   ```

   O usa la extensión **Live Server** de VS Code.
3. Abre `http://localhost:8000` en el navegador.

> ⚠️ No abras `index.html` con doble clic (`file://`): Phaser y el navegador requieren que el juego se sirva por HTTP, aunque sea local.

Se necesita conexión a internet, ya que Phaser se carga desde CDN.

## 📁 Estructura del proyecto

```
Ecos-De-Aether/
├── index.html            # Página principal; carga Phaser y los scripts
├── css/
│   └── style.css         # Estilos de la página
└── js/
    ├── main.js           # Configuración de Phaser.Game y arranque
    └── scenes/
        ├── BootScene.js     # Carga lo mínimo (logo, barra de carga)
        ├── PreloadScene.js  # Carga de assets (sprites, mapas, audio, JSON)
        └── WorldScene.js    # Escena principal: exploración del mundo
```

El orden de carga en `index.html` importa: las Scenes deben cargarse **antes** de `main.js`.

## 🧩 Arquitectura

| Escena | Responsabilidad |
| --- | --- |
| `BootScene` | Primera escena; carga lo indispensable y pasa a `PreloadScene`. |
| `PreloadScene` | Cargará los assets reales del juego y pasa a `WorldScene`. |
| `WorldScene` | Mundo jugable: movimiento, colisiones, enemigos (en desarrollo). |

Configuración actual (`js/main.js`): canvas de **800×600**, `Phaser.AUTO`, física `arcade` (con `debug: false`; ponlo en `true` para ver las cajas de colisión).

## 🛠️ Tecnologías

- HTML5 / CSS3 / JavaScript (ES6+)
- [Phaser 3.90.0](https://phaser.io/) vía CDN
- JSON para datos del juego (próximamente)
- LocalStorage para guardado (próximamente)

## 🗺️ Hoja de ruta

- [x] Fase 1: base del proyecto y escena mínima
- [ ] Tilemap del mundo y cámara
- [ ] Jugador: sprite, movimiento y colisiones
- [ ] Enemigos y combate
- [ ] Datos en JSON (enemigos, objetos)
- [ ] Sistema de guardado con LocalStorage

## 🤝 Contribuir

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Haz commit de tus cambios y abre un Pull Request.

## 📄 Licencia

Sin licencia definida todavía. Agrega un archivo `LICENSE` para especificar los términos de uso.
