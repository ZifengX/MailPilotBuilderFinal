module managers {

        var assetManifest = [
            { id: "ocean", src: "assets/images/ocean.gif" },
            { id: "yay", src: "assets/sounds/yay.ogg" },
            { id: "biu", src: "assets/sounds/biu.wav" },
            { id: "bi", src: "assets/sounds/bi.wav" }
        ]

        var spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [
                [2, 2, 226, 178],
                [230, 2, 211, 69],
                [443, 69, 62, 63],
                [443, 2, 65, 65],
                [230, 73, 211, 69],
                [230, 144, 211, 69]
            ],
            "animations": {
                "cloud": [0],
                "instructionsButton": [1],
                "island": [2],
                "plane": [3],
                "playButton": [4],
                "tryAgainButton": [5]
            }
        };

    export class Asset { 
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static lightningAtlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
        this.loader = new createjs.LoadQueue();
        this.loader.installPlugin(createjs.Sound);
        this.loader.loadManifest(assetManifest);
        this.atlas = new createjs.SpriteSheet(spriteSheetData);

    }

    }
}