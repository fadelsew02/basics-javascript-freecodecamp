function rot13(str) {
    let decodedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) { // Check if character is uppercase letter
        let shiftedCharCode = charCode + 13;
  
        if (shiftedCharCode > 90) {
          shiftedCharCode -= 26;
        }
  
        decodedStr += String.fromCharCode(shiftedCharCode);
      } else {
        decodedStr += str[i];
      }
    }
  
    return decodedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
  
  
  rot13("SERR PBQR PNZC");