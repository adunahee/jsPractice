console.log ("Customer Orders a BLT bagel")
let bagel = ['bacon', 'lettuce', 'tomato'];
console.log(bagel);
console.log(bagel.length);
console.log(bagel[0]);
/* this should give back the item with an index of 3-1=2, so lettuce */
console.log(bagel[bagel.length - 1]);
/* does bagel have mustard? A -1 means the array does not*/
console.log(bagel.indexOf ('mustard'));
/* substitution for maple bacon and add mustard */
bagel.push("mustard");
bagel[0] = ('maple bacon');
/* review order and customer wants last item removed and instead mayonaise*/
console.log(bagel);
bagel.pop();
console.log(bagel);
bagel.push('mayonaise');
console.log(bagel);
/* doublecheck for mayonaise */
console.log(bagel.indexOf ('mayonaise'));
/* add asiago on top and bottom */
bagel.unshift('asiago')
bagel.push('asiago')
console.log(bagel);
/* sesame substitution for bagel on bottom */
bagel.shift();
bagel.unshift('sesame');
