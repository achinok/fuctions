/* function declartion: get down first!! */
function helloWorld() {
  //console.log('Hello World!');
//  helloWorld();

  return "Hello World!";
}
let hello = helloWorld(); //just saving yourself 5 letters of code for down the road storing it more simply


function calculateVolume (length, width, heigth) {
  console.log(`The volume is ${length*width*heigth}`);
}
calculateVolume(10, 15, 12);


funtion expression

const calcArea = function(length, width) {
  return length*width;   /* return statements can be in any function but only in functions */
}

calcArea(12, 40);

let area = calcArea(12,40);

console.log(`The Area is ${area}`);

arrow function(similiar to function expression)


const getName = (name) => {
  let output = `Hello there, ${name}! You look good today`;
  return output;
}
