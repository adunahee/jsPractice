console.log('Loops Example');
let index = 0;
const max = 10;
// while Loop, looks like if but keeps running code until condition is untrue
while (index < max) {
  console.log(index);
  index++;
}

/* This for loop does similar function, but I not defined beforehand so does not exist outside of loop */
for (let i=0; i<max; i++){console.log('in for loops '+i);}
// end for
let hand = [ 'A', 'K', '3', '5', '9'];
console.log(hand);

/* while playing go fish, someone asks if you have a 9 */
let opponentsHand = ['A', '2', '4', '7', '9']
for(let i=0; i<hand.length; i++){
  console.log('For loop showing cards in hand', hand[i]);
  if (hand[i] === '9')
  {
    opponentsHand.push(hand[i]);
    hand.splice(i, 1);
    console.log("Match! Your opponent now has "+ opponentsHand+
    ". And yours is "+ hand);
  } // end if
}// end for loop
//for in loops march through array one by one
for (i in hand){
  console.log('For in loop', hand[i]);
  if(hand[i] === '9'){
    console.log('match!');
  }// end if for matching
}// end for in loop
//begin for of loop, makes up var called card and sets it equal to hand[i] as i increases
for(card of hand){
  console.log('for of loop', card);
  if(card === '9'){
    console.log('Match!');
  }// end Match
}/* end for of loop, which tracks an object, not the index of the object using
slightly less code.  It depends on whether you need to work with the index or
the object. */
