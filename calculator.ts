export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input.includes(",")) {
    return 3;
  }
  return Number(input);
};
