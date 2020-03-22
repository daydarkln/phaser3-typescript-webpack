import { CST } from '../CST';

class PlayScene extends Phaser.Scene {
	spaceship: Phaser.GameObjects.Image;
	score: number;
	countText: any;
	keyboard: any;

	constructor() {
    super({
			key: CST.scenes.play
		});
	}
	
	preload() {
	}

	create() {
		this.score = 0;

		this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'stars').setScale(6).setDepth(0);
		this.countText = this.add.text(50, this.game.renderer.height - 70, `score: ${this.score}`, {
			font: '20px'
		})

		this.spaceship = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height - 200, 'spaceship', 2).setScale(.1).setDepth(1);
		this.spaceship.setInteractive();

		this.keyboard = this.input.keyboard.addKeys('W, A, S, D, F');
	}

	update(time: number, delta:number) {
		if(this.keyboard.D.isDown === true) {
			this.spaceship.x += 364 * (delta / 1000);
		}
		if(this.keyboard.S.isDown === true) {
			this.spaceship.y += 364 * (delta / 1000);
		}
		if(this.keyboard.A.isDown === true) {
			this.spaceship.x -= 364 * (delta / 1000);
		}
		if(this.keyboard.W.isDown === true) {
			this.spaceship.y -= 364 * (delta / 1000);
		}
		if(this.keyboard.F.isDown === true) {
			this.score += 100;
			this.countText.setText(`score: ${this.score}`);
		}
		
	}
}

export default PlayScene;