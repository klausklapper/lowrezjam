import Player from 'objects/Player';

class GameState extends Phaser.State {

    preload() {
        this.game.load.image('room01', 'assets/gfx/01.png');
        this.game.load.image('player', 'assets/gfx/player.png');
        this.game.load.bitmapFont('minimal', 'assets/font/font.png', 'assets/font/font.fnt');

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.time.desiredFps = 30;

        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    }

	create() {
        var pixelCanvas = document.getElementById("pixel");
        this.game.pixelcontext = pixelCanvas.getContext("2d");
        this.game.pixelwidth = pixelCanvas.width;
        this.game.pixelheight = pixelCanvas.height;
        Phaser.Canvas.setSmoothingEnabled(this.game.pixelcontext, false);

        let room = this.game.add.sprite(0, 0, 'room01');
        this.game.physics.arcade.enable(room);
        room.anchor.setTo(0);
        room.body.immovable = true;

        this.player = new Player(this.game, 16, 16);
        this.room = room;
        let text = this.game.add.text(8, 16, "Welcome to hell", {font: "12px Minimal Pixels", fill: "#fff"});
        text.smoothed = false;
        text.autoRound = false;
	}

    render() {
        this.game.pixelcontext.drawImage(this.game.canvas, 0, 0, 64, 64, 0, 0, this.game.pixelwidth, this.game.pixelheight);
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.room, null, null, this);
    }
}

export default GameState;
