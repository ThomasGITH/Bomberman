const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth-800;
canvas.height = window.innerHeight-100;

var list = [];
var Input={};

function start() {
    list.push(new Obstacle(10,7));
    list.push(new Bob(40,70));
    Input = {"w":false,"a":false,"s":false,"d":false,"up":false,"left":false,"down":false,"right":false}

    MainLoop();
}

function MainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(MainLoop);

    for(i=0;i<list.length;i++){
        list[i].update();
        context.drawImage(list[i].texture,list[i].x,list[i].y, list[i].scaleX, list[i].scaleY);
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
// switch (key) {
//     case "s":list[0].y+=4;break;
//     case "a":list[0].x-=4;break;
//     case "d":list[0].x+=4;break;
//     case "w":list[0].y-=4;break;
//     default:break;}