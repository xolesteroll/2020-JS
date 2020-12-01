class Product { // Класс для создания простых продуктов
  //   title = "DEFAULT";
  //   imageURL;
  //   description;
  //   price;

  constructor(title, image, descr, price) {
    this.title = title;
    this.imageURL = image;
    this.description = descr;
    this.price = price;
  }
}

class ProductItem { // Класс для добавления уже готового продукта в список
  constructor(product) {
    this.product = product;
  }

  render() { // метод для создания желемента в ДОМЕ с конкретной HTML структурой
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageURL}" alt="${this.product.title}">
                <div>
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
          `;
    return prodEl;
  }
}

class ProductList { // Класс для 
  products = [
    new Product(
      "A Pillow",
      "data:image/jpeg;base64,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",
      19.99,
      "A soft Pillow!"
    ),
    new Product(
      "A Carpet",
      "data:image/jpeg;base64,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",
      89.99,
      "A carpet wich you might like or not!"
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
