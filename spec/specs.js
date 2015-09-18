describe('Pizza', function() {
  it("creates a pizza with the given selections of size and toppings", function() {
    var quantity = 1;
    var pizzaSize = ["Medium", 12];
    var pizzaToppings = ["cheese", "pineapple"];
    var testPizza = new Pizza(quantity, pizzaSize, pizzaToppings);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.eql(["Medium", 12]);
    expect(testPizza.pizzaToppings).to.eql(["cheese", "pineapple"]);
  });
});
