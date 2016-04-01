import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(64, 64, Phaser.CANVAS, 'content', null, false, false);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');

        this.pixelcontext = null;
        this.pixelwidth = 0;
        this.pixelheight = 0; 
	}
}

new Game();
