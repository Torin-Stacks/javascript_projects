let productscontainer = document.querySelector("div")
fetch("https://fakestoreapi.com/products").
then((response)=> {return response.json()}).
then((data)=>  {
let products = "";
data.map((product) => {
  return (products += `<img src=${product.image} alt="product-image">
        <h2>Productname: <span id="productname">${product.title}</span></h2>
        <p>price: <span id="price">${product.price}</span></p>
        <p>description: <span id="description">${product.description}</span></p>
        <p>category: <span id ="category">${product.category}</span></p>
        <p>rating: <span id="rating">${product.rating}</span></p>`);
});

productscontainer.innerHTML = products;



})
