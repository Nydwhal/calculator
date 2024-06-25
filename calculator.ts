export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input.includes("\n")) {
    input = input.replace("\n", ",");
  }
  return input.split(",").reduce((acc, curr) => acc + Number(curr), 0);
};
