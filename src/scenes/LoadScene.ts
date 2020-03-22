import 'phaser';
import { CST } from '../CST';
import MenuScene from './MenuScene';

export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.scenes.load
    });
  }

  init() {

  }

  preload() {
    this.load.spritesheet('spaceship', 'assets/sprites/spaceship.png', {
      frameHeight: 864,
      frameWidth: 864,
    })
    this.load.image('stars', 'assets/background/space_background_pack/space_background_pack/layers/parallax-space-stars.png')
    this.load.image('bg', 'assets/background/bg.jpg');
    this.load.image('play_btn', 'assets/sprites/BTN PLAY.png');

    this.load.audio('main_menu_audio', 'assets/sounds/menu.mp3')

    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    })

    this.load.on('progress', (percent) => {
      loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
      console.log(percent);
    })

    this.load.on('complete', () => {
      console.log('done!');
    })
  }

  create() {
    this.scene.add(CST.scenes.menu, MenuScene, false);
    this.scene.start(CST.scenes.menu, {data: 'hello from loading'});
  }
}