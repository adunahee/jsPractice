Bringing together everything under one project with roadtrips

comments after closing functions and statements to keep code readable

use console log when testing to know if you are in a loop, function, etc.

You can have a function return just true so that if its used in a if conditional it will run the function in that conditional to determine if conditions are met and code block should be run
eg
let status = 'hungry';
function appetite(status){
  if(status == 'hungry'){
    return true;
  }//end if statement
  else{
    return false;
  }// end else
}//end appetite function

//returning true to determine if an if statement should run
let foodAvailable = true;
function timeToEat(){
  if(appetite() && foodAvailable){
    console.log('Time to eat!')
    appetite = false;
    food = 0;
  }// end if
  else{
    console.log('You are not ready to eat yet!')
  }
}
