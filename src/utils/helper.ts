export const currencyExchange = (num: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(parseFloat(num.toString()) * 0.000043);
};