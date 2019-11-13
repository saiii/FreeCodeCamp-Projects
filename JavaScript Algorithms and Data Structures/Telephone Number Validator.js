function telephoneCheck(str) {
    str = str.replace(/\s|\W|\D|-/g, "");
    if (str.length === 10) {
        return true;
    } if (str.length === 11 && str[0]) {
        return true;
    } else {
        return false;
    }
  }
  
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");