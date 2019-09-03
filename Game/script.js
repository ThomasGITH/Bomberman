const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth-800;
canvas.height = window.innerHeight-100;

var entityList = [];
var Input={};

function start() {
    entityList.push(new Obstacle(500,150));
    entityList.push(new Bob(90,70));
    entityList.push(new Bob(700,400));

    Input = {"w":false,"a":false,"s":false,"d":false,"up":false,"left":false,"down":false,"right":false, " ":false}

    MainLoop();
}

function MainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(MainLoop);

    for(i=0;i<entityList.length;i++){
        entityList[i].update();
        context.drawImage(entityList[i].texture,entityList[i].x,entityList[i].y, entityList[i].scaleX, entityList[i].scaleY);
    }
}

start();
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


