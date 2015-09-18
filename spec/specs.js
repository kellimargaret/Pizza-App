describe('Pizza', function() {
  it("creates a pizza with the given selections of size and toppings", function() {
    var quantity = 1;
    var pizzaSize = ["Medium", 12];
    var pizzaTopping = ["cheese", "pineapple"];
    var testPizza = new Pizza(quantity, pizzaSize, pizzaTopping);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.eql(["Medium", 12]);
    expect(testPizza.pizzaTopping).to.eql(["cheese", "pineapple"]);
  });

  it("calculates the cost of a pizza using the given selections", function() {
    var testQuantity = 2;
    var testPizzaSize = new pizzaSize("Medium", 12);
    var testPizzaTopping1 = new Topping("cheese", 1);
    var testPizzaTopping2 = new Topping("pineapple", 3);
    var testPizza = new Pizza(testQuantity, testPizzaSize, [testPizzaTopping1, testPizzaTopping2]);
    expect(testPizza.price()).to.equal(32);
    });
});
