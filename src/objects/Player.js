class Player extends Phaser.Sprite {

    constructor(game, x, y) {
        super(game, x, y, 'player', 0);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.anchor.setTo(0);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.stage.addChild(this);
    }

    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (this.cursors.right.isDown)
        {
            this.body.velocity.x = 20;
        }
        else if (this.cursors.left.isDown)
        {
            this.body.velocity.x = -20;
        }
        else if (this.cursors.up.isDown)
        {
            this.body.velocity.y = -20;
        }
        else if (this.cursors.down.isDown)
        {
            this.body.velocity.y = 20;
        }
    }
}

export default Player;