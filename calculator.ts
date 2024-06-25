export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input.includes(",")) {
    return input.split(",").reduce((acc, curr) => acc + Number(curr), 0);
  }
  return Number(input);
};
