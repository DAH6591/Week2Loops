// Let's play a game. The game will consist of 100 turns. If the number of turns is even, you gain 5 points.
//  If it's odd, you gain 3 points. If ever your score is equal to 125, you are reset back to 25 points.
//  This will only be allowed to happen once. The game ends if you are able to make it through 100 turns or
//  you reach more than 290 points, whichever comes first.  Using a for loop, create the game.


For (var I = 0; I < 100; i++){
  If (i%2==0){
    Points += 5;
  }
   Else {
      Points += 3;
}
  If(points == 125){
    Points = 25;
} else if (points == 290){
  Console.log (“You win”);
Break
}
}
