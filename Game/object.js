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
        if(Input['w'])
        {
            this.y--;
        }
        else if(Input['a'])
        {
            this.x--;
        }
        else if(Input['s'])
        {
            this.y++;
        }
        else if(Input['d'])
        {
            this.x++;
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
        this.x++;
    }

}

