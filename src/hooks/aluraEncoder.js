const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const AluraEncoder = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      newStr += vowels[str[i]];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
