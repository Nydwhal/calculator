export const calculate = (input: string): number => {
  if (input === "") {
    return 0;
  }

  if (input.endsWith(",")) {
    throw new Error("Not allowed separators at the end");
  }

  if (input.startsWith("//")) {
    const separator = input.slice(2, input.indexOf("\n"));
    input = input.slice(input.indexOf("\n") + 1);

    const regex = new RegExp(`[^0-9${separator}]`, "g");
    if (regex.test(input)) {
      throw new Error("Invalid separator");
    }

    input = input.split(separator).join(",");
  }

  if (input.includes("-")) {
    const negatives = input
      .split(",")
      .filter((n) => n.includes("-"))
      .map((n) => Number(n))
      .join(",");
    throw new Error(`Negatives not allowed: ${negatives}`);
  }

  return input
    .replace("\n", ",")
    .split(",")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
