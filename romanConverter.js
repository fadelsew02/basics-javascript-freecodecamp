function convertToRoman(num) {
    const arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
  
    for (let i = 0; i < arabicNums.length; i++) {
      while (num >= arabicNums[i]) {
        result += romanNums[i];
        num -= arabicNums[i];
      }
    }
  
    return result;
  }
  
  console.log(convertToRoman(36)); // Output: "XXXVI"
  console.log(convertToRoman(1994)); // Output: "MCMXCIV"
  console.log(convertToRoman(1000)); // Output: "M"
  
  
  convertToRoman(36);