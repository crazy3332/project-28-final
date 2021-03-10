class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("sprites/tree.png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,500,500)
    }
}
    
    
