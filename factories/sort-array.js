export function sortArray(value, array) {
  switch (value) {
    case "min":
      array = array.sort((a, b) =>
        Number(a.price.replaceAll(" ", "")) -
        Number(b.price.replaceAll(" ", ""))
      );
      break;
    case "max":
      array = array.sort((a, b) =>
        Number(b.price.replaceAll(" ", "")) -
        Number(a.price.replaceAll(" ", ""))
      );
      break;
    case "name":
      array = array.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
  }

  return array;
}
