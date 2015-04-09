/**
 * Created by J.LeRoi on 3/24/2015.
 */
/*
 Capitalizes first letter of a word
 /`str`:String
 returns `String`

 */

function capitalizeFirstLetter(str)
{
    var firstLetter = str.charAt(0);
    var otherChars = str.substr(1);

    return firstLetter.toUpperCase() + otherChars;

}

console.log(returnValue = capitalizeFirstLetter("flying spaghetti monster"));

var numbers = [1, 6, 10, 32, 75];

var letters = ['a', 'b', 'c']

function divide3 (number)
{
    return number/3;

}

console.log(numbers.map(divide3));

console.log(letters.map(divide3));

