// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.colorR = 255;
    this.colorG = 255;
    this.colorB = 255;
  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }

  // Draws the target (i.e., a circle)
  // and its label
  draw()
  {
    // Draw target
    fill(this.colorR,this.colorG, this.colorB, 165);              
    circle(this.x, this.y, this.width);

    // Draw label
    textFont("Arial", 16);
    fill(color(255,255,255)); 
    textAlign(CENTER);
    text(this.label, this.x, this.y + 6);
    
    //Draw letter
    textFont("Arial", 25);
    fill(color(255,255,255)); 
    textAlign(CENTER);
    text(this.label[0], this.x, this.y - 17);
    textStyle(BOLD);
  }
  
  // Get target label
  getLabel()
  {
    return this.label; 
  }
  
  // Set target color
  setColor(color, color1, color2){
    this.colorR = color;
    this.colorG = color1;
    this.colorB = color2;
  }
}