let fruits = { "Grapes", "Apples", "Pears", "Oranges"};
let fruit = fruits[0]; // first fruit 
function logFirstFruit()
{
  let randomNumber= Math.floor(Math.random()*fruits.length);
  console.log(fruits[randomNumber]);
}
logFirstFruit();


