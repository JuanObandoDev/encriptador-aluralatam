const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const UseAluraEncoder = (str, dict = vowels) => {
  let regex = new RegExp(`[${Object.keys(dict).join("")}]`, "g");
  return str.replace(regex, (match) => dict[match]);
};
