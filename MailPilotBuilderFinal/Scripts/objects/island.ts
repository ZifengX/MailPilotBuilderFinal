module objects {
    //island class
   export class Island extends objects.GameObject {
        dy: number;
        constructor() {
            super("island");
            this.dy = 5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * stage.canvas.width);
        }

        update() {
            this.y += this.dy;
            if (this.y >= (this.height + stage.canvas.height)) {
                this.reset();
            }
        }
    }


}