export const convertData=(images)=>{
  const data = []
  images?.forEach(element => {
    data.push({
      "src": element,
      "thumb": element,
    })
  });

  return data
}