const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition  = function (moves) {
  let position = [0,0];
  for (let step of moves) {
    if (step == 'north'){
      position[1]+=1;
    } else if (step == 'south'){
      position[1]-=1;
    } else if (step == 'east'){
      position[0]+=1;
    } else if (step == 'west'){
      position[0]-=1;
    } else {}
  }  
  return position;
}
console.log(finalPosition(moves));