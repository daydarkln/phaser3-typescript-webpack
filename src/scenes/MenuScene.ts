import 'phaser';

import PlayScene from './PlayScene';
import { CST } from '../CST';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.scenes.menu
    });
  }

  init(data) {
    console.log(data);
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0).setDepth(0);
    const playBtn = this.add.image(this.game.renderer.width / 2, 200, 'play_btn').setDepth(1).setScale(1.4);

    this.sound.pauseOnBlur = false;
    this.sound.play('main_menu_audio', {
      loop: true,
    })

    playBtn.setInteractive();
    playBtn.on('pointerup', () => {
      console.log('lets play')
      this.scene.add(CST.scenes.play, PlayScene, false);
    this.scene.start(CST.scenes.play, {data: 'hello from loading'});
    })
  }
}