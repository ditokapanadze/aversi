export default (product = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log(action.data);
      return [(product = action.data)];

    default:
      return product;
  }
};
