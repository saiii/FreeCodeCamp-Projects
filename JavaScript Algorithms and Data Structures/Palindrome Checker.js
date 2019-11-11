// Check if the given parameter is palindrome

function palindrome(str) {
    // Delete space, special character and convert every character to lowwer case
    str = str.replace(/\W|_|\s/g,"").toLowerCase();

    let reverse = [];
    
    // Loop from the end of str parameter to the start and append to reverse variable
    for (let i = str.length-1; i >= 0; i--) {
        reverse.push(str[i]);
    }

    // Use join method to convert array to string
    reverse = reverse.join("");

    // Check if str parameter and reverse variable (str after reverse) is the same
    return str === reverse;
  }
  
palindrome("eye")
palindrome("_eye")
palindrome("race car")
palindrome("not a palindrome")
palindrome("A man, a plan, a canal. Panama")
palindrome("never odd or even")
palindrome("nope")
palindrome("almostomla")
palindrome("My age is 0, 0 si ega ym.")
palindrome("1 eye for of 1 eye.")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("five|\_/|four")