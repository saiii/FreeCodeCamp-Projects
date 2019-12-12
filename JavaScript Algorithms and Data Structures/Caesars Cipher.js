// Decipher a given string to the string with 13 ASCII value greater
// All letters will be only Capital letters
// Leave special characters and spaces as they are

function rot13(str) { 
    let decoded  = "";

    // Loop through str parameter
    for (let index = 0; index < str.length; index++) {
        // Check if str at specific index is capital letter
        if (str[index].charCodeAt() >= 65 && str[index].charCodeAt() <= 90) {
            // Convert str at specific index to ASCII and add 13 to it
            let character = str[index].charCodeAt()+13;

            // Check if the ASCII is out of range 'Z' and start couting from the begining again 'A'
            if (character > 90) {
                let moreThan90 = character - 91;
                character = 65 + moreThan90;
                decoded+=String.fromCharCode(character);
            } else {
                decoded += String.fromCharCode(character);
            }
        } else {
            decoded+=str[index];
        }
    }
    return decoded;
  }
  

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");