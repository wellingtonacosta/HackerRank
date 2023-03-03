function getLetter(s) {
  let letter;
  // Write your code here

  let char = s.charAt(0);
  switch (true) {
    case char === "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break;

    case char === "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;

    case char === "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;

    default:
      letter = "D";
  }
  return letter;
}
