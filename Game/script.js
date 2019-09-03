const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 1125;
canvas.height = 825;

var tile = 75 * 75;
37.5

var entityList = [];
var Input={};

var background;

function start() {
     background = new Image();
    background.src = 'images/1Grass.jpg';

    entityList.push(new Player(10,10));
    entityList.push(new Player2(1062,762));

    Input = {"w":false,"a":false,"s":false,"d":false,"ArrowUp":false,"ArrowLeft":false,"ArrowDown":false,"ArrowRight":false, " ":false, "Enter":false}
}

function MainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(MainLoop);
    context.drawImage(background,0,0,1125,825);

    for(i=0;i<entityList.length;i++){
        entityList[i].update();
        context.drawImage(entityList[i].texture,entityList[i].x,entityList[i].y, entityList[i].scaleX, entityList[i].scaleY);
    }

}

window.addEventListener( "keydown", keyPressedDOWN, true);
window.addEventListener( "keyup", keyPressedUP, true);

function keyPressedDOWN(event) {
    var key = event.key;
    Input[key] = true;
}
function keyPressedUP(event) {
    var key = event.key;
    Input[key] = false;
}

function hasCollided(objA, clsstype)
{
    var collision = false;
    for(var i = 0; i < entityList.length; i++)
    {
        if(entityList[i] instanceof clsstype)
        {
            if(objA.x < entityList[i].x + entityList[i].scaleX &&
                objA.x + objA.scaleX > entityList[i].x &&
                objA.y < entityList[i].y + entityList[i].scaleY &&
                objA.y + objA.scaleY > entityList[i].y)
            {
                collision = true;
            }
        }
    }
    return collision;
}

Level1=[
    '002222222222200',
    '012121212121210',
    '222222222222222',
    '212121212121212',
    '222222222222222',
    '212121212121212',
    '222222222222222',
    '212121212121212',
    '222222222222222',
    '012121212121210',
    '002222222222200',


];

function create() {
    for (let i = 0; i < Level1.length; i++) {
        for (let j = 0; j < Level1[i].length; j++) {
            switch (Level1[i].charAt(j)) {
                case '1':entityList.push(new Rock(j*75,i*75));break;
                case '2':entityList.push(new Wood(j*75,i*75));break;

                default: break;}
        }}}


start();
create();
MainLoop();