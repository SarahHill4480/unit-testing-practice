function alphabet_order(str)
  {
return str.toLowerCase('').split('').sort().join('');
  }
console.log(alphabet_order("abcdef"));


module.exports= alphabet_order;
