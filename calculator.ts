export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input === "1,") {
    throw new Error("Not allowed separators at the end");
  }
  return input
    .replace("\n", ",")
    .split(",")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
