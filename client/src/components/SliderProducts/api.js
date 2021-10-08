import axios from "axios";

const instance = axios.create({
  baseURL: "/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize, categoryQuery, apiCategory, category2) {
    console.log(currentPage, pageSize, categoryQuery, apiCategory, category2);
    category2 === "&categories=undefined" && (category2 = "");
    return instance
      .get(
        // `/products/filter?${apiCategory}&startPage=${currentPage}&perPage=${pageSize}`    &sort=+currentPrice
        `/products/filter?${categoryQuery}${category2}&startPage=${currentPage}&perPage=${pageSize}`
      )
      .then(response => {
        // console.log(response.data);
        return response.data;
      });
  }
};
