export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  return input.split(",").reduce((acc, curr) => acc + Number(curr), 0);
};
