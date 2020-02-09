import axios from 'axios';


export function addProduct() {
  const newProduct = {       
    name: "Diamond white gold Necklace",
    currentPrice: 37700,
    previousPrice: 48800,
    categories: "necklaces",

    imageUrls: [
      "img/products/necklaces/1-199_912_.jpg",
      // "img/products/bracelets/1-199_122_1.jpg",
      // "img/products/earrings/0990.jpg", 
      // "img/products/earrings/0992.jpg", 
      
    ],
    quantity: 100,
    gemstone_color: "white",
    metal_color: "white",
    productUrl: "/necklaces",
    brand: "Zarina",
    collection: "Melanka",
    metal: "gold",
    gemstone: "diamond",
    weight:"2.76",
    sample:"585",
    myCustomParam: "some string or json for custom param",
  };  
 
         
axios
.post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
.then(response => {
  /*Do something with newProduct*/
  let token = response.data.token;

  axios
    .post("http://localhost:5000/products", newProduct, { headers: { "Authorization": `${token}` } })
    .then(newProduct => {
      /*Do something with newProduct*/
      console.log(newProduct);
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
})
.catch(err => {
  /*Do something with error, e.g. show error to user*/
});
}    


export function updateProduct() {
  const updatedProduct = {       
    name: "your nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", //required field
    categories: "necklaces",
  
  };  
 
         
axios
.post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
.then(response => {
  /*Do something with newProduct*/
  let token = response.data.token;
  let _id = "some product _id"; // вставить _id продукта

  axios
    .put(`http://localhost:5000/products/${_id}`, updatedProduct, { headers: { "Authorization": `${token}` } })
    .then(updatedProduct => {
      /*Do something with newProduct*/
      console.log(updatedProduct);
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
})
.catch(err => {
  /*Do something with error, e.g. show error to user*/
});
}    
