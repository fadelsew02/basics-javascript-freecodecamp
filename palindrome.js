function palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}
  
  console.log(palindrome("racecar")); // Output: true
  console.log(palindrome("RaceCar")); // Output: true
  console.log(palindrome("race CAR")); // Output: true   
  
  palindrome("eye");