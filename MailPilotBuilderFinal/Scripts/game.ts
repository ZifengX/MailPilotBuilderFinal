/// <reference path="constants.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/scoreboard.ts" />

var stage: createjs.Stage;

//Game Objects
var plane: objects.Plane;
var island: objects.Island;
var ocean: objects.Ocean;
var scoreboard: objects.Scoreboard;

//var cloud: Cloud;
//Cloud Array
var clouds = [];


function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

//Game Loop
function gameLoop(event): void {
    ocean.update();
    island.update();
    plane.update();
   // cloud.update();
    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count].update();
    }

    collisionCheck();
    scoreboard.update();
    stage.update();
}


//The distance Utility function
function distance(p1: createjs.Point, p2: createjs.Point):number {
    var firstPoint: createjs.Point;
    var secondPoint: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

    firstPoint = new createjs.Point();
    secondPoint = new createjs.Point();

    firstPoint.x = p1.x;
    firstPoint.y = p1.y;

    secondPoint.x = p2.x;
    secondPoint.y = p2.y;

    theXs = secondPoint.x - firstPoint.x;
    theYs = secondPoint.y - firstPoint.y;

    theXs = theXs * theXs; //theXs *= theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);
    return result;
}

//Check Collision between Plane and Island
function planeAndIsland() {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();
    

    point1.x = plane.x;
    point1.y = plane.y;
    point2.x = island.x;
    point2.y = island.y;
    if (distance(point1, point2) < ((plane.height * 0.5) + (island.height * 0.5))){
        createjs.Sound.play("yay");
        scoreboard.score += 100;
        island.reset();
}
}

 //Check Collision between Plane and Cloud
function planeAndCloud(theCloud:objects.Cloud) {
    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();
    var cloud: objects.Cloud = new objects.Cloud();

    cloud = theCloud;

    point1.x = plane.x;
    point1.y = plane.y;
    point2.x = cloud.x;
    point2.y = cloud.y;
    if (distance(point1, point2) < ((plane.height * 0.5) + (cloud.height * 0.5))) {
        createjs.Sound.play("bi");
        scoreboard.lives -= 1;
        cloud.reset();
    }
}

//Collision Check utility function
function collisionCheck() {
    planeAndIsland();
    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        planeAndCloud(clouds[count]);
    }
}


//Main Game Function
function gameStart(): void {

    var point1: createjs.Point = new createjs.Point();
    var point2: createjs.Point = new createjs.Point();
    
    ocean = new objects.Ocean();
    island = new objects.Island();
    plane = new objects.Plane();
    // cloud = new Cloud();
    for (var count = 0; count < constants.CLOUD_NUM; count++) {
        clouds[count] = new objects.Cloud();
    }

    scoreboard = new objects.Scoreboard();
}