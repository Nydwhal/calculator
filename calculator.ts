export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input[input.length - 1] === ",") {
    throw new Error("Not allowed separators at the end");
  }
  if (input.startsWith("//")) {
    input = input.slice(3).replace(input[2], ",");
  }
  return input
    .replace("\n", ",")
    .split(",")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
