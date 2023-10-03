export default function getSubgenreGroup(data, listSubgenre) {
  const arr = data?.map((item) =>
    listSubgenre?.filter((x) => x.genres_id === item.id)
  );
  let subgenresFromGenreID = [];
  arr?.forEach((element) => {
    subgenresFromGenreID = subgenresFromGenreID.concat(element);
  });

  return subgenresFromGenreID;
}
