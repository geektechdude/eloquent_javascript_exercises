/*
a function to count how many times a letter occurs in a string.
Note: upper case and lower case letters are different values.
*/

beanString = 'Busy Bumble Bee buzzing all about';

console.log(beanString.length)

function countLetters (string, letter){
    size = string.length;
    let numberOfLetters = 0;
    for (i=0;i<size;i++){
        if (string[i]===letter){
            numberOfLetters++;
        }
    }
    return `There are ${numberOfLetters} instances of ${letter}`;
}

console.log(countLetters(beanString, "e"));