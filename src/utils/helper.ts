export const currencyExchange = (num: string) => {
  return parseFloat(num).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};