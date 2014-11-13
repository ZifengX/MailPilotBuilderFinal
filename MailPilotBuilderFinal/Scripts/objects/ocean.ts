/// <reference path="../managers/assets.ts" />
module objects {
    //ocean class
    export class Ocean extends createjs.Bitmap{
        width: number;
        height: number;
        dy: number;
        constructor() {
            super(managers.Asset.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.dy = 5;

            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.image.y = -960;
        }

        update() {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        }
    }
} 