const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const AluraDecoder = (str, dict = vowels) => {
  let reverseDict = {};
  for (let key in dict) {
    reverseDict[dict[key]] = key;
  }

  let regex = new RegExp(Object.keys(reverseDict).join("|"), "g");
  return str.replace(regex, (match) => reverseDict[match]);
};
