function makeNegative(num) {
  if (typeof num === "string"){
  return 'this is NaN'}
  else{
  return (num > 0 ? num * -1 : num); }
  
}

module.exports= makeNegative;


