function setup() {
    createCanvas(500, 600);
  
  
  }
  
  function draw() {
    
    document.oncontextmenu = function () {
      return false;
    };
     if (!mouseIsPressed == true) 
     {
      stroke(0, 0, 0, 0);
      strokeWeight (1);
      line(mouseX, mouseY, pmouseX, pmouseY);
     }
    
    else
    {
      strokeWeight (200);
      stroke(0,0,0,255);
    }
    
    
      //
    strokeWeight(2);
    push();
  
    //centro
    push();
    fill("#FFFFFF");
    ellipse(250, 300, 570);
    pop();
  
    //circulos esquinas n5
  
    push();
    fill("#A16F97");
    ellipse(20, 20, 700);
    ellipse(480, 20, 700);
    ellipse(480, 600, 700);
    ellipse(20, 600, 700);
    pop();
  
    //circulos esquinas n4
  
    push();
    fill("#BB99B5");
    ellipse(20, 20, 620);
    ellipse(480, 20, 620);
    ellipse(480, 600, 620);
    ellipse(20, 600, 620);
    pop();
  
    // Circulos laterales 1
    push();
    fill("#D8C6D5");
    ellipse(0, 300, 250);
    ellipse(500, 300, 250);
  
    // Circulos laterales 2
    push();
    fill("#F5E0E4");
    ellipse(0, 300, 100);
    ellipse(500, 300, 100);
  
    pop();
  
    //circulos esquinas n3
  
    push();
    fill("#F1AFB9");
    ellipse(20, 20, 550);
    ellipse(480, 20, 550);
    ellipse(480, 600, 550);
    ellipse(20, 600, 550);
    pop();
  
    //circulos esquinas n2
  
    push();
    fill("#EDC2CB");
    ellipse(20, 20, 400);
    ellipse(480, 20, 400);
    ellipse(480, 600, 400);
    ellipse(20, 600, 400);
    pop();
  
    //circulos esquinas n1
    push();
    fill("#F9DCE0");
    ellipse(20, 20, 250);
    ellipse(480, 20, 250);
    ellipse(480, 600, 250);
    ellipse(20, 600, 250);
    pop();
  
    //circulos esquinas n0
    push();
    fill("#FFEFF1");
    ellipse(20, 20, 120);
    ellipse(480, 20, 120);
    ellipse(480, 600, 120);
    ellipse(20, 600, 120);
    pop();
  
    pop();
   
      }
  
  
  