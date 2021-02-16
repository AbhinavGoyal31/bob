class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
	    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		this.x=x;
		this.y=y;
		this.r=r;
		World.add(world, this.body)
	
		
		

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			//strokeWeight(4);
			fill(255,0,255)
			ellipseMode(CENTER);
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}