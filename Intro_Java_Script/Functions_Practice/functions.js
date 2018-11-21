console.log('Functions Practical');
function logger(){
  console.log('in logger function');
  return true;
}// end logger

for (let i = 0; i < 6; i++) {
  logger();
}// end for loop to run logger six times

function returner() {
    console.log('in returner');
    return true;
}// end returner

returner();
//this should run function and log the return value
console.log('this is the output of the "returner" function:', returner() );

function squareArea(height, width){
  let area = height * width;
  return console.log(height + ' times ' + width + ' using the function gives', area);
}// end function calculating square

squareArea(5, 3);
squareArea(7, 4);
