class Obstacle {
    constructor(x,y,c){
        this.x=x;
        this.y=y;

        this.scaleX = 100;
        this.scaleY = 100;

        this.context = c;
        this.texture = new Image();
        this.texture.src = 'images/Avatar.png';
    }

    update(){
        var xPrevious = this.x;
        var yPrevious = this.y;

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

        if(hasCollided(this, Bob))
        {
            console.log(("collision"));
            this.y = yPrevious;
            this.x = xPrevious;
        }

    }

}

class Bob {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 230;
        this.scaleY = 230;

        this.texture = new Image();
        this.texture.src = 'images/icon2.png';

    }

    update(){
        if(Input[' '])
        {
            this.scaleX++;
            this.scaleY++;
        }

    }

}