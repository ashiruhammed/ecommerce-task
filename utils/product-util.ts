export const fetchProducts = (limit = 0) =>
  fetch("https://dummyjson.com/products?limit=" + limit).then((res) =>
    res.json()
  );
