export const toSnake = (str: string) =>
  str.charAt(0).toLowerCase() +
  str
    .slice(1)
    .replace(/([A-Z]+)/g, '_$1')
    .toLowerCase()
