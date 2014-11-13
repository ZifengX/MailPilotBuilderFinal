module objects {
    //plane class
    export class Plane extends objects.GameObject {

        constructor() {     
            super("plane");
            this.y = 430;
            
            stage.addChild(this);
            //play engine sound forever
            createjs.Sound.play("biu", 0, 0, 0, -1, 1, 0);
        }

        update() {
            this.x = stage.mouseX;
        }
    }
} 