module objects {
    //plane class
    export class Plane {
        image: createjs.Bitmap;
        width: number;
        height: number;
        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("plane"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            //define the middle of the plane
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.image.y = 430;

            stage.addChild(this.image);
            //play engine sound forever
            createjs.Sound.play("biu", 0, 0, 0, -1, 1, 0);
        }

        update() {
            this.image.x = stage.mouseX;
        }
    }
} 