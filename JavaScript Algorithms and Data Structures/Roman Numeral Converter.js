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

   convertToRoman(2);
   convertToRoman(3);
   convertToRoman(4);
   convertToRoman(5);
   convertToRoman(9);
   convertToRoman(12);
   convertToRoman(16);
   convertToRoman(29);
   convertToRoman(44);
   convertToRoman(45);
   convertToRoman(68);
   convertToRoman(83);
   convertToRoman(97);
   convertToRoman(99);
   convertToRoman(400);
   convertToRoman(500);
   convertToRoman(501);
   convertToRoman(649);
   convertToRoman(798);
   convertToRoman(891);
   convertToRoman(1000);
   convertToRoman(1004);
   convertToRoman(1006);
   convertToRoman(1023);
   convertToRoman(2014);
   convertToRoman(3999);