export const initialState = {
  products: null,
  productId: null,
  filteredProducts: null,
  ////////////
  wishlistProduct: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_PRODUCTID":
      return { ...state, productId: action.payload };
    case "SET_FILTEREDPRODUCTS":
      return { ...state, filteredProducts: action.payload };
      /////
    case "SET_WISHLISTPRODUCTS":
      return { ...state, wishlistProducts: action.payload };
    default:
      return state;
  }
};
export default reducer;
