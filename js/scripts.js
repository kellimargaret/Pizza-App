function Pizza(quantity, pizzaSize, pizzaTopping) {
    this.quantity = quantity;
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.price = function() {
  var cost = this.pizzaSize.sizeCost;
  this.pizzaTopping.forEach(function(pizzaTopping) {
    cost += pizzaTopping.pizzaToppingCost;
  });
  return cost*this.quantity;
}

function Topping(pizzaToppingItem, pizzaToppingCost) {
    this.pizzaToppingItem = pizzaToppingItem;
    this.pizzaToppingCost = pizzaToppingCost;
}

function pizzaSize(sizeName, sizeCost) {
    this.sizeName = sizeName;
    this.sizeCost = sizeCost;
}
