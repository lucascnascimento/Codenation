// [110, 120, 130, 140]
const productsSingle = [products[0], products[1], products[2], products[3]];

// [130, 140, 230, 260]
const productsDouble = [products[2], products[3], products[9], products[12]];

// [110, 130, 140, 230, 310, 330]
const productsTriple = [
  products[0],
  products[2],
  products[3],
  products[9],
  products[13],
  products[15],
];

// [120, 230, 310, 490]
const productsFull = [products[1], products[9], products[13], products[24]];

const singlePriceObject = { regularPrice: 534.96, totalPrice: 524.96 };

const doublePriceObject = { regularPrice: 529.95, totalPrice: 504.95 };

const triplePriceObject = { regularPrice: 914.94, totalPrice: 784.94 };

const fullPriceObject = { regularPrice: 479.96, totalPrice: 404.96 };

describe("Get products from cart by id array", () => {
  it("Should get the products from the database with the corresponding id", () => {
    const productsArray = getProductsFromCart([110, 140, 130, 120], products);

    expect(productsArray.length).toBe(4);
    expect(productsArray[0].name).toBe("PINK PANTHER™ T-SHIRT");
    expect(productsArray[3].name).toBe("DISNEY CRUELLA© T-SHIRT");
    expect(productsArray[1]).toEqual(products[3]);
  });
});

describe("Set the promotion  type", () => {
  it("Should return SINGLE LOOK", () => {
    // Single Look Promotion
    const promotionS = setPromotion(productsSingle);
    expect(promotionS).toBe("SINGLE LOOK");
  });

  it("Should return DOUBLE LOOK", () => {
    /// Double Look Promotion
    const promotionD = setPromotion(productsDouble);
    expect(promotionD).toBe("DOUBLE LOOK");
  });

  it("Should return TRIPLE LOOK", () => {
    /// Triple Look Promotion
    const promotionT = setPromotion(productsTriple);
    expect(promotionT).toBe("TRIPLE LOOK");
  });

  it("Should return FULL LOOK", () => {
    // Full Look Promotion
    const promotionF = setPromotion(productsFull);
    expect(promotionF).toBe("FULL LOOK");
  });
});

describe("Calculates the total price", () => {
  it("Should return the total and promotion price for a single look promotion", () => {
    const priceObject = calculatePrice(productsSingle, "SINGLE LOOK");

    expect(priceObject.regularPrice).toBe(534.96);
    expect(priceObject.totalPrice).toBe(524.96);
  });

  it("Should return the total and promotion price for a double look promotion", () => {
    const priceObject = calculatePrice(productsDouble, "DOUBLE LOOK");

    expect(priceObject.regularPrice).toBe(529.95);
    expect(priceObject.totalPrice).toBe(504.95);
  });

  it("Should return the total and promotion price for a triple look promotion", () => {
    const priceObject = calculatePrice(productsTriple, "TRIPLE LOOK");

    expect(priceObject.regularPrice).toBe(914.94);
    expect(priceObject.totalPrice).toBe(784.94);
  });

  it("Should return the total and promotion price for a full look promotion", () => {
    const priceObject = calculatePrice(productsFull, "FULL LOOK");

    expect(priceObject.regularPrice).toBe(479.96);
    expect(priceObject.totalPrice).toBe(404.96);
  });
});

describe("Calculates the discount value", () => {
  it("Should calculate the discount value for the single look", () => {
    const discount = calculateDiscountValue(singlePriceObject);
    const value = 10;
    expect(discount).toBe(value.toFixed(2));
  });

  it("Should calculate the discount value for the double look", () => {
    const discount = calculateDiscountValue(doublePriceObject);
    const value = 25;
    expect(discount).toBe(value.toFixed(2));
  });

  it("Should calculate the discount value for the triple look", () => {
    const discount = calculateDiscountValue(triplePriceObject);
    const value = 130;
    expect(discount).toBe(value.toFixed(2));
  });

  it("Should calculate the discount value for the full look", () => {
    const discount = calculateDiscountValue(fullPriceObject);
    const value = 75;
    expect(discount).toBe(value.toFixed(2));
  });
});

describe("Calculates the percentage", () => {
  it("Should return the discount percentage value for the single look promotion", () => {
    const percentage = calculateDiscountPercentage(singlePriceObject);

    expect(percentage).toBe("1.87%");
  });

  it("Should return the discount percentage value for the double look promotion", () => {
    const percentage = calculateDiscountPercentage(doublePriceObject);

    expect(percentage).toBe("4.72%");
  });

  it("Should return the discount percentage value for the triple look promotion", () => {
    const percentage = calculateDiscountPercentage(triplePriceObject);

    expect(percentage).toBe("14.21%");
  });

  it("Should return the discount percentage value for the full look promotion", () => {
    const percentage = calculateDiscountPercentage(fullPriceObject);

    expect(percentage).toBe("15.63%");
  });
});
