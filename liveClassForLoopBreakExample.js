var x = 5, d = 10;
var word = "Hello ", truth = true;

for(var i =0; i< 15; i++)
{
      x++;
      
      while(truth == true) {
       d++; 
     
       if (d==15) {
       truth = false;
       }
      }
  

    
    if (truth == false && x >10) {


    word = word + "World";
  
    console.log(word + " " + x); //console will print Hello World 11
    break;
    }
    
  } 