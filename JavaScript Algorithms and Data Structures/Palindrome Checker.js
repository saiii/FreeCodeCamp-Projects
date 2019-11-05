function palindrome(str) {
    // Good luck!
    str = str.replace(/\W|_|\s/g,"").toLowerCase();

    let reverse = [];
    
    for (let i = str.length-1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    reverse = reverse.join("");
    return str === reverse;
  }
  
palindrome("eye")//?
palindrome("_eye")//?
palindrome("race car")//?
palindrome("not a palindrome")//?
palindrome("A man, a plan, a canal. Panama")//?
palindrome("never odd or even")//?
palindrome("nope")//?
palindrome("almostomla")//?
palindrome("My age is 0, 0 si ega ym.")//?
palindrome("1 eye for of 1 eye.")//?
palindrome("0_0 (: /-\ :) 0-0")//?
palindrome("five|\_/|four")//?