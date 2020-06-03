export const parseValue = value => {
  if (value === "All products") return "shop_all";
  const lowerCaseValue = value.toLowerCase();
  const parsedValue = lowerCaseValue.replace(" ", "-")
  return parsedValue;
}