range = function (start, end, step){
  let newArray = [];
  if ((start || end || step ) === undefined) {
    return [];
  } else if (start >= end){
    return [];
  } else if ((step === 0) || (step < 0)) {
    return [];
  } else {
    let nextValue = 0;
    let count = 1;
    newArray.push(start);
    for (start; nextValue < end; step){
      nextValue=start+count*step;
      count++;
      if (nextValue > end){
        break;
      }
      newArray.push(nextValue);
      //console.log(nextValue);
    }
    return newArray;
  }
}

console.log(range(0, 10, 2));	
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));	