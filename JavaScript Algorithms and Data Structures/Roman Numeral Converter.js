function convertToRoman(num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let romanized = '';

    for (let index = 0; index < decimal.length; index++) {
        while (decimal[index] <= num) {
            romanized += roman[index];
            num -= decimal[index];
        }
    }
    return romanized;
   }

convertToRoman(36);