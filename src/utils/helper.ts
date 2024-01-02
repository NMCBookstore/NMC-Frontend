export const currencyExchange = (num: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    return formatter.format(parseFloat(num.toString()) * 0.000043);
  };
  
  export const IsValidImage = (img: File) => {
    const fileSize = img.size / 1024 / 1024;
  
    const fileType = img.type;
  
    if (fileSize <= 10) {
      if (
        fileType === "image/jpg" ||
        fileType === "image/png"
      )
        return true;
    }
    return false;
  };
  