// Convert number to roman numerical

function convertToRoman(num) {

    // Create two arrays that hold decimal and roman numbers 
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let romanized = '';

    // Use for loop to loop through decimal array (decimal variable)
    for (let index = 0; index < decimal.length; index++) {
        /* Use while loop to check if the decimal number is less than num.
        If it is true, roman number at that index will be concatenated to romanized variable 
        and num will be minuted with the decimal number that equal to that roman number.
        */
        while (decimal[index] <= num) {
            romanized += roman[index];
            num -= decimal[index];
        }
    }
    return romanized;
   }

convertToRoman(36);