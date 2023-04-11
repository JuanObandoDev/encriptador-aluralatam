const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const AluraEncoder = (str) => {
  let regex = new RegExp(`[${Object.keys(vowels).join("")}]`, "g");
  return str.replace(regex, (match) => vowels[match]);
};
