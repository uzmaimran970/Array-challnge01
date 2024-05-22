"use strict";
// basic Array-product inventory
// challange:
// you are tasked with creating a inventory system implement function and logic to manage object manipulation effectively
// 1. define a type aliasnamed product to represent a product with the following properties 
// . name (string) the name of the product 
// . price (number) the price of the product 
// . inventory (object) an object containing inventory details including 
// stock( number) thethe number of products available 
// color option (string[] an array listening availble color)
// 2. create an array named product containing atleast three objects each product should include named price and inventory details 
// 3. implement a function name  change colour that takes a product object  and a new color as input this fucntion should update the colour property of the product 
// and adjust the price based on the new color (impliment your own logic increase by 10% decrease by 5% for blue) 
// display each p;roduct name ,  price stock and availble colors  iterate through the product array and print each products details
let product1 = {
    name: "bags",
    price: 2000,
    color: "white",
    inventory: {
        quantity: 200,
        colorOption: ["white", "blue", "black"],
    },
};
let product2 = {
    name: "shoes",
    price: 3000,
    color: "blue",
    inventory: {
        quantity: 100,
        colorOption: ["white", "blue", "black"],
    },
};
let product3 = {
    name: "abaya",
    price: 4000,
    color: "black",
    inventory: {
        quantity: 100,
        colorOption: ["white", "blue", "black"],
    },
};
let products = [
    product1,
    product2,
    product3,
];
let changeColor = (object, newColor) => {
    object.color = newColor;
    if (object.color === "white") {
        let increaseper10 = object.price / 100 * 10;
        object.price += increaseper10;
    }
    else if (object.color === "blue") {
        let increaseper5 = object.price / 100 * 5;
    }
    else if (object.color === "black") {
        let decreaseper10 = object.price / 100 * 10;
        object.price -= decreaseper10;
    }
};
products.forEach((item) => {
    console.log(item);
});
changeColor(product1, "white");
changeColor(product2, "blue");
changeColor(product3, "black");
products.forEach((item) => {
    console.log(item);
});
function item(value, index, array) {
    throw new Error("Function not implemented.");
}
