function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


module.exports= reverse_a_number;


/*Assume n = 1000.
Convert a number to a string :
Code : -> n = n + "";
Note : There are different ways to convert number to string :

String literal -> str = "" + num + "";
String constructor -> str = String(num);
toString -> str = num.toString();
String Literal simple -> str = "" + num;
The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('1000'.split(""));
Output : ["1", "0", "0", "0"]

The reverse() method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.
Code : console.log(["1", "0", "0", "0"].reverse());
Output : ["0", "0", "0", "1"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["1", "0", "0", "0"].reverse().join(""));
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function. */