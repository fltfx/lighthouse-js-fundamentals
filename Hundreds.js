const howManyHundreds  = function (num) {
let ans;
if (num%100 === 0){
  ans = num / 100;
} else if (num === 0){
  ans = 0;
} else if (num < 100){
  ans = 0;
} else {
  //this is the case where it doesn't perfectly divide by 10
  let remainder = num % 100;
  ans = (num - remainder) / 100;
}
return ans;
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);