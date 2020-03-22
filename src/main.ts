import 'phaser';

import LoadScene from './scenes/LoadScene';

const config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: window.outerWidth,
    height: window.outerHeight,
    resolution: 1,
    scale: {
      mode: Phaser.Scale.FIT,
    },
    render: {
      pixelArt: true,
    },
    scene: [
      LoadScene,
    ],
    background: '#4e465e'
};

new Phaser.Game(config);
