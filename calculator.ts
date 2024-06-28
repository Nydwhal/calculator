export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }
  if (input[input.length - 1] === ",") {
    throw new Error("Not allowed separators at the end");
  }
  if (input.startsWith("//")) {
    const separator = input.slice(2, input.indexOf("\n"));
    input = input
      .slice(input.indexOf("\n") + 1)
      .split(separator)
      .join(",");
  }
  return input
    .replace("\n", ",")
    .split(",")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
