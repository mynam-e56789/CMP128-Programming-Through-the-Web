let Quotes = [ "you die if you're dead", "i love love", "showing up to the funeral blasting fetty wap on a cheap wearable jbl speaker", "prisoners of tik tok more like prisoners"];
let quotes = Quotes[0]; // first quote
function logFirstQuote()
{
  let randomNumber= Math.floor(Math.random()*Quotes.length);
  console.log(Quotes[randomNumber]);
}
logFirstQuote();


