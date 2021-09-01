const calculateRectangleArea  = function (length, width) {
  if ((checkNeg(length) || checkNeg(width))===true) {
    return undefined;
  }
  return length*width;
}

const calculateTriangleArea  = function (base, height) {
  if ((checkNeg(base) || checkNeg(height))===true) {
    return undefined;
  }
  return base * height / 2;
}

const calculateCircleArea  = function (radius) {
  if (checkNeg(radius)===true) {
    return undefined;
  }
  return Math.PI*radius*radius;
}

const checkNeg =function(value){
  if (value <0){
    return true;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined