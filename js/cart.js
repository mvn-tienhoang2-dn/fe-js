var products = JSON.parse(localStorage.getItem('addToCart'));
function saveCart() {
  localStorage.setItem('addToCart', JSON.stringify(products));
}
function loadDataCard() {
  var html = '';
  document.getElementById("load-cart-data").innerHTML = html;
  for (k = 0; k < products.length; k++) {
    var total = products[k].count * products[k].price;
    html += '<tr>' +
      ' <td id="' + products[k].id + '">' + (k+1)+ '</td>' +
      '<td>' + products[k].productName + '</td>' +
      '<td><input type="number" data-id="' + products[k].id + '" onclick ="updateProduct(this)" value="' + products[k].count + '"></td>' +
      '<td>' + products[k].price + '</td>' +
      ' <td>' + total + '</td>' +
      ' <td><button class="btn btn-delete"  data-id="' + products[k].id + '" onclick="removeProduct(this)">x</button></td>' +
      '</tr>';
  }
  document.getElementById("load-cart-data").innerHTML = html;
};
loadDataCard();
function updateProduct($this) {
  var id = parseInt($this.getAttribute('data-id')); 
  $this.addEventListener('input', function (evt) {
    for (var i = 0; i < products.length; i++){
      if (products[i].id === id) {
        products[i].count = this.value;
        saveCart();
        loadDataCard();
      }
    }
    });
};
function removeProduct($this) {
  var id = parseInt($this.getAttribute('data-id')); 
  for (j = 0; j < products.length; j++){
    if (products[j].id == id) {
      console.log(products[j].id);
      products.splice(j, 1);
    }
  }
  saveCart();
  loadDataCard();
}