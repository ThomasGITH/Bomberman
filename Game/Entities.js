class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 53;
        this.scaleY = 53;

        this.texture = new Image();
        this.texture.src = 'images/6player.png';

        this.timer = 0;
        this.bombSet = false;

        this.playerBombX = 0, this.playerBombY = 0;

    }


    update(){
        var xPrevious = this.x;
        var yPrevious = this.y;

        this.timer--;

        if(Input['w'])
        {
            this.y-=3;
        }
        if(Input['a'])
        {
            this.x-=3;
        }
        if(Input['s'])
        {
            this.y+=3;
        }
        if(Input['d'])
        {
            this.x+=3;
        }

        if(Input[' ']&& this.timer <= 0)
        {
            entityList.push(new Bomb(this.x, this.y));

            this.timer = 180;
        }

        if(hasCollided(this, Rock) || hasCollided(this, Wood) || this.x <= 0 || this.x + this.scaleX >= canvas.width || this.y <= 0 || this.y + this.scaleY >= canvas.height)
        {
            this.y = yPrevious;
            this.x = xPrevious;
        }

    }

}

class Player2 {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 53;
        this.scaleY = 53;

        this.texture = new Image();
        this.texture.src = 'images/5player2.png';

        this.timer = 0;
    }

    update(){
        var xPrevious = this.x;
        var yPrevious = this.y;
        this.timer--;

        if(Input['ArrowUp'])
        {
            this.y-=3;
        }
        if(Input['ArrowLeft'])
        {
            this.x-=3;
        }
        if(Input['ArrowDown'])
        {
            this.y+=3;
        }
        if(Input['ArrowRight'])
        {
            this.x+=3;
        }

        if(Input['Enter']&& this.timer <= 0)
        {
            entityList.push(new Bomb(this.x, this.y));

            this.timer = 180;
        }

        if(hasCollided(this, Rock) || hasCollided(this, Wood) || this.x <= 0 || this.x + this.scaleX >= canvas.width || this.y <= 0 || this.y + this.scaleY >= canvas.height)
        {
            this.y = yPrevious;
            this.x = xPrevious;
        }

    }

}

class Rock {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 75;
        this.scaleY = 75;

        this.texture = new Image();
        this.texture.src = 'images/4Stone.jpg';

    }

    update(){


    }

}

class Wood {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 75;
        this.scaleY = 75;

        this.texture = new Image();
        this.texture.src = 'images/3Wood.png';

    }

    update(){

    }

}

class Bomb {
    constructor(x,y){
        this.x=(Math.round(x / 75) * 75) + 37.5 - 17.5;
        this.y=(Math.round(y / 75) * 75) + 37.5 - 22.5;

        this.scaleX = 35;
        this.scaleY = 45;

        this.texture = new Image();
        this.texture.src = 'images/9bomb.png';

        this.timer = 180;
    }

    Explosion()
    {
        var bX = (Math.round(this.x / 75) * 75) + 37.5;
        var bY = (Math.round(this.y / 75) * 75) + 37.5;
        console.log(bX);
        console.log(bY);

        //RIGHT WAY
        var tileRight1X = bX + 75; var tileRight1Y = bY + 0;
        var tileRight2X = bX + 150; var tileRight2Y = bY + 0;
        if(findTile(Wood,tileRight1X, tileRight1Y) != 2)
        {
            console.log('removedddd');
            if(findTile(Wood,tileRight2X, tileRight2Y) != 2)
            {
                console.log('removed2');
            }
        }

        //LEFT WAY
        var tileLeft1X = bX - 75; var tileLeft1Y = bY + 0;
        var tileLeft2X = bX - 150; var tileLeft2Y = bY + 0;
        if(findTile(Wood,tileLeft1X, tileLeft1Y) != 2)
        {
            console.log('removed');
            if(findTile(Wood,tileLeft2X, tileLeft2Y) != 2)
            {
                console.log('removed2');
            }
        }

        //DOWN WAY
        var tileDown1X = bX + 0; var tileDown1Y = bY + 75;
        var tileDown2X = bX + 0; var tileDown2Y = bY + 150;
        if(findTile(Wood,tileDown1X, tileDown1Y) != 2)
        {
            console.log('removed');
            if(findTile(Wood,tileDown2X, tileDown2Y) != 2)
            {
                console.log('removed2');
            }
        }

        //UP WAY
        var tileUp1X = bX + 0; var tileUp1Y = bY - 75;
        var tileUp2X = bX + 0; var tileUp2Y = bY - 150;
        if(findTile(Wood,tileUp1X, tileUp1Y) != 2)
        {
            console.log('removed');
            if(findTile(Wood,tileUp2X, tileUp2Y) != 2)
            {
                console.log('removed2');
            }
        }

        entityList.pop();
    }


    update(){
        this.timer--;
        if(this.timer <= 0)
        {
            this.Explosion();
        }
    }

}

function findTile(type, x, y)
{
    for(var i = 0; i < entityList.length; i++)
    {
        if(entityList[i] instanceof type && x >= entityList[i].x && x <= entityList[i].x + entityList[i].scaleX && y >= entityList[i].y && y <= entityList[i].y + entityList[i].scaleY)
        {
                entityList.splice(i,1);
                return 0;
          }
          else if(entityList[i] instanceof Rock && x >= entityList[i].x && x <= entityList[i].x + entityList[i].scaleX && y >= entityList[i].y && y <= entityList[i].y + entityList[i].scaleY)
          {
             return 2;
          }
        }

    return 1;
    }