// FOR loops
  //good when you know how many times you need to iterate; how many times you need it to loop through your code OR
  // if there is an array that we want to interate over each element in it
  // # of iterations needed to perform = # of elements in the collection
  // there are 3 pieces that go into the start of a for loop and then there's the body of the code that will execute in your FOR loop
  // for (variable intialization; condition that has to be met (will be a boolean expression which means this loop will iterate until
  // the condition is no longer true); what's going to happen after the interation or post-iteration
  // then we follow the for ( ) with a set of curly braces; everything inside the braces is the body of the FOR loop
  // this body is the code that will execute for each interation of the loop

  for (let i = 0; i < 10; i++) {
    console.log(i);
 } // the console prints out 0 through 9 vertically
   
   // as long as i is less than 10, we're going to perform an iteration
   // i++ does not run; the body of our loop code runs (console, etc)
   // then i++ runs (the post-iteration) so that i increments and now i = 1
   // so i = 1, it is less than 10, so the body of our loop code runs again (console, etc.)
   // then i++ runs so that i increments and is now i = 2
   // and so on as long as i is less than 10
   // once i = 10, the boolean expression returns a falst so there are no more iterations
   // code moves on to whatever is next
  console.log('Whatever is next.'); 
 
  // Example of FOR loop for printing even numbers
    // FYI we can use i again below because once the FOR loop above is done, the i above no longer exists
  for (let i = 0; i < 20; i++) {
     if (i % 2 == 0) {
        console.log(i);
     }
  }  //console prints 0 to 18 vertically
 
  let names = ['Sam', 'Tom', 'Hillary']; // if we want to interate over those elements
    for (let i = 0; i < names.length; i++) { // so for i, if the length here is 3,i will go until it's 3 and then will exit out
                                             // which means 2 will be the last iteration
   // we can use i to reference every element in the array
      console.log(names[i]); // here i will be 0 then 1, then 2
      //console will print out Sam Tom and Hillary, vertically
    }
 
    // WHILE loops - like a FOR loop but has less set up and it gives you more flexibility with what you want to do
    // good if you want to do something over and over until a condition is met but you have less knowledge of how 
      // many interations are needed.
    // Example: reading lines from a file. The program may not know how many lines are in the file because it's external
      // to the program. 
   // With a while loop, you can read each line until the end of a file. Or while another line exists, your program will read it.
   // The only piece that goes into the ( ) in a WHILE loop is the condition.
 
   let a = 0;
 
   while (a < 10) {
       console.log(a);
   }
 