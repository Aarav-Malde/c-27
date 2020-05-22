class Chain {
    constructor(bodyÅ,bodyß){
         options = {
            bodyA : bodyÅ,
            bodyB : bodyß,
            stiffness : 0.4,
            length : 10 
        }

        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(5)
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,this.chain.bodyB.position.x, this.chain.bodyB.position.y)
    }


};