//rented a sedan
const seatsInCar = 5;
// an array allows us to add remove passengers
let passengers = [];
//boolean
let tankFull = false;

function enoughSeats(){
  console.log('When checking for enough seats...');
  if(seatsInCar >= passengers.length){
    return true;
  }// end if more seats than passengers
  else{
    return false;
  }// end else not enough seats
}// end enoughSeats function

function getInCar( nameOfPassenger ){
  console.log( 'Its time for ' + nameOfPassenger + ' to get in the car!');
  //get them on the passengers list
  passengers.push(nameOfPassenger);
  return console.log(passengers);
}// end getInCar function

function readyForTrip(){
  if (enoughSeats() && tankFull){
    console.log('Tank is full lets goo!');
    return true;
  }// end if
  else {
    console.log('Tank is empty oh noes!');
    return false;
  }
}// end readyForTrip function

getInCar( 'you' );
getInCar( 'me' );
getInCar( 'my wife' );
console.log(enoughSeats());
console.log(readyForTrip());
tankFull = true;
console.log(readyForTrip());
