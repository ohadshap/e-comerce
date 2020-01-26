const products = [
    {
        name: "Bit Coin", 
        price: "10329.22$",
    },

    {
        name: "Ripple",
        price: "9854.45$",
    }
]

const cart = []

const addToCart = (productName) => {
    for(let product of products) {
        if(product.name == productName) {
            cart.push(product)
        }
    }
}

const deleteFromCart = (productName) => {
    for(let product in cart) {
        if(cart[product].name == productName) {
            cart.slice(product, 1)
        }
    }
}


const homePageStyle = document.getElementById("home-page").style
const aboutStyle = document.getElementById("aboutUs").style
const productsStyle = document.getElementById("products").style
const cartStyle = document.getElementById("cart").style
aboutStyle.display = "none"
productsStyle.display = "none"
cartStyle.display = "none"
$("#about").on("click", function(){
    homePageStyle.display = "none"
    aboutStyle.display = "grid"
    productsStyle.display = "none"
    cartStyle.display = "none"
})
   

$("#all-products").on("click", function(){
    homePageStyle.display = "none"
    aboutStyle.display = "none"
    productsStyle.display = "grid"
    cartStyle.display = "none"
})



$("#cart-link").on("click", function(){
    homePageStyle.display = "none"
    aboutStyle.display = "none"
    productsStyle.display = "none"
    cartStyle.display = "grid"
})




$("#site-name").on("click", function(){
        homePageStyle.display = "grid"
        aboutStyle.display = "none"
        productsStyle.display = "none"
        cartStyle.display = "none"
    })

