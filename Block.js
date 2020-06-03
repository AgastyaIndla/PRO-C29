class Block{
    constructor(x,y,width,height) {
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        //var angle = this.body.angle;

       var pos = this.body.position;

        var r = Math.round(random(0,255));
        var g = Math.round(random(0,255));
        var b = Math.round(random(0,255));

        push();
        fill(r,g,b);
        noStroke();
        //translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}