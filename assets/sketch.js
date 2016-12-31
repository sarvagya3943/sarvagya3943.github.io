var slider , angle = 45 ; 
function setup() { 
	createCanvas(1300,500) ;
	slider = createSlider( 0 , TWO_PI , PI / 4 , 0.01) ; 
}
function draw() { 
	background(51) ; 
	stroke(255) ; 
	translate(width/2 , height) ; 
	angle = slider.value() ; 
	branch(100) ; 
}
function branch(len) { 
	line(0 , 0 , 0 , -len ) ; 
	translate(0 , -len ) ; 
	if(len > 4) {
		push() ; 
		rotate(angle) ; 
		branch(len * 0.75) ; 
		pop() ; 
		push() ; 
		rotate( -angle) ; 
		branch(len * 0.75) ; 
		pop() ; 
	}

}