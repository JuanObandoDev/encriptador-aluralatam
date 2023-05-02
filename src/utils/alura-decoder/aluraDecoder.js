const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const aluraDecoder = (str, dict = vowels) => {
  let reverseDict = Object.fromEntries(
    Object.entries(dict).map(([key, value]) => [value, key])
  );
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
  const regex = new RegExp(
    Object.keys(reverseDict).map(escapeRegex).join("|"),
    "g"
  );
  return str.replace(regex, (match) => reverseDict[match]);
};
