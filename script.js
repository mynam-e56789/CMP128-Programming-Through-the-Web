let fruits = [ "you die if you are killed", "i love love", "showing up to the funeral playing fetty wap on a cheap wearable jbl speaker", "i wanna go home"];
let fruit = fruits[0]; // first fruit 
function logFirstFruit()
{
  let randomNumber= Math.floor(Math.random()*fruits.length);
  console.log(fruits[randomNumber]);
}
logFirstFruit();


