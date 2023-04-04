const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const CaesarDecoder = (str, rot) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = alphabet.indexOf(char);
    if (index !== -1) {
      let newIndex = index - rot;
      if (newIndex < 0) {
        newIndex = newIndex + 26;
      }
      newStr += alphabet[newIndex];
    } else {
      newStr += char;
    }
  }
  return newStr;
};
