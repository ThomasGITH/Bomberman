class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;

        this.scaleX = 53;
        this.scaleY = 53;

        this.texture = new Image();
        this.texture.src = 'images/6player.png';

        this.timer = 0;
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
            var bombX = (Math.round(this.x / 75) * 75) + 37.5 - 17.5;
            var bombY = (Math.round(this.y / 75) * 75) + 37.5 - 22.5;

            entityList.push(new Bomb(bombX, bombY));
            this.timer = 300;
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
            var bombX = (Math.round(this.x / 75) * 75) + 37.5 - 17.5;
            var bombY = (Math.round(this.y / 75) * 75) + 37.5 - 22.5;
            console.log(bombX);
            console.log(bombY);

            entityList.push(new Bomb(bombX, bombY));
            this.timer = 300;
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
        this.x=x;
        this.y=y;

        this.scaleX = 35;
        this.scaleY = 45;

        this.texture = new Image();
        this.texture.src = 'images/9bomb.png';

    }

    update(){


    }

}