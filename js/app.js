var products =
  [
    {"id": 1,
      "productName": "Plash Speed 5.0", 
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
      "price": "400",
      "count" : 1,
    },
    { 
      "id": 2,
    "productName": "Plash Speed 5.1",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
      "price": "400",
      "count" : 1,
    
  },
  {
    "id": 3,
    "productName": "Plash Speed 5.2",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  },
  {
    "id": 4,
    "productName": "Plash Speed 5.3",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  },
  {
    "id": 5,
    "productName": "Plash Speed 5.4",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  },
  {
    "id": 6,
    "productName": "Plash Speed 5.5",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  },
  {
    "id": 7,
    "productName": "Plash Speed 5.6",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  },
  {
    "id": 8,
    "productName": "Plash Speed 5.7",
      "src" : "https://playstation5.vn/wp-content/uploads/2020/01/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.jpg",
    "price": "400",
      "count" : 1,
  }
  ];

var html = '';
for (var i = 0; i < products.length ; i++) {
    html += '<li class="card" id="' + products[i].id + '">' +
    '<img class="product-img"  src="' + products[i].src + '"alt="product-img">' +
    '  <p class="name">' + products[i].productName + '</p> <span>$' + products[i].price + '</span>'+
    '<button class="btn btn-cart" type="button" onclick="addToCart(this)">Add To Card</button>' +
    '</li>';  
}
document.getElementById("load-product").innerHTML = html;
var cart = [];
function quantityCarts(quantities) {
  document.getElementById('cart-num').innerHTML = quantities;
}
function saveCart() {
  localStorage.setItem('addToCart', JSON.stringify(cart));
}
function loadCart() {
  cartLoad = JSON.parse(localStorage.getItem('addToCart'));
  quantityCarts(cartLoad.length);
}
if (localStorage.getItem("addToCart") != null) {
  loadCart();
  cart = cartLoad;
}
function addToCart($this) {
  var productParent = $this.closest('li');
  var idProduct = parseInt(productParent.getAttribute('id'));
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === idProduct) {
      for (var k = 0; k < cart.length; k++) {
        if (products[i].id == cart[k].id) {
          cart[k].count = cart[k].count + 1;
          quantity = cart.length;
          quantityCarts(quantity);
          saveCart();
          return;
        }
      }
      cart.push(products[i]);
      quantity = cart.length;
      quantityCarts(quantity);
      saveCart();
    }
  }
}