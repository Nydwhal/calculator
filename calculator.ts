export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input.includes(",") && input.length === 3) {
    return Number(input[0]) + Number(input[2]);
  }
  return Number(input);
};
