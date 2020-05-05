const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {
  let productsCart = getProductsFromCart(ids, productsList);
  let products = getProducts(productsCart);
  let promotion = setPromotion(productsCart);
  let price = calculatePrice(productsCart, promotion);
  let totalPrice = price.totalPrice.toFixed(2);
  let discountValue = calculateDiscountValue(price);
  let discount = calculateDiscountPercentage(price);

  return {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount,
  };
}

// Busca os elementos do array na base de dados
function getProductsFromCart(ids, productsList) {
  const products = ids.map((id) =>
    productsList.find((product) => id === product.id)
  );
  return products;
}

// Formata os produtos para o objeto de saída
function getProducts(productsCart) {
  let products = productsCart.map((product) => ({
    name: product.name,
    category: product.category,
  }));
  return products;
}

// Define qual promoção ser aplicada no carrinho
function setPromotion(products) {
  const list = products.map((produto) => produto.category);
  const categories = list.filter(
    (product, index) => list.indexOf(product) === index
  );
  return promotions[categories.length - 1];
}

// Retorna o preço total do carinho e o preço promocional
function calculatePrice(products, promotionToBeApplied) {
  const priceObject = products.reduce(
    (priceObj, currentProduct) => {
      // Soma os preços sem desconto
      priceObj.regularPrice += currentProduct.regularPrice;

      // Procura se o item é elegível para promoção
      const prom = currentProduct.promotions.find((promotion) =>
        promotion.looks.includes(promotionToBeApplied)
      );

      // Se o desconto não existir soma o regularPrice ao totalPrice
      prom
        ? (priceObj.totalPrice += prom.price)
        : (priceObj.totalPrice += currentProduct.regularPrice);

      // Formata o número para duas casa decimais
      priceObj.totalPrice = Math.round(priceObj.totalPrice * 100) / 100;
      priceObj.regularPrice = Math.round(priceObj.regularPrice * 100) / 100;

      return priceObj;
    },
    { regularPrice: 0, totalPrice: 0 }
  );
  /* Retorna um obj onde totalPrice é o preço com descontos e regularPrice é o preço
   sem descontos */
  return priceObject;
}

// Calcula o valor do desconto
function calculateDiscountValue(priceObject) {
  return (priceObject.regularPrice - priceObject.totalPrice).toFixed(2);
}

// Calcula a porcentagem do desconto
function calculateDiscountPercentage(priceObject) {
  let percentage = (
    (1 - priceObject.totalPrice / priceObject.regularPrice) *
    100
  ).toFixed(2);
  return `${percentage}%`;
}

module.exports = {
  getShoppingCart,
  getProductsFromCart,
  setPromotion,
  calculatePrice,
  calculateDiscountValue,
  calculateDiscountPercentage,
};
