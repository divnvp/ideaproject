export function getProducts() {
  const prodArray = [];

  for (let i = 0; i <= 12; i++) {
    prodArray.push({
      name: "Наименование товара",
      description: "Довольно-таки интересное\n" +
        "        описание товара в несколько строк.\n" +
        "        Довольно-таки интересное описание товара\n" +
        "        в несколько строк",
      link: "",
      price: "10 000"
    });
  }

  return prodArray;
}
