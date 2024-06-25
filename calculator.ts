export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  return input
    .replace("\n", ",")
    .split(",")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
