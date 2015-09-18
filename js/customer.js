function Customer(customerName, customerEmail, customerAddress, customerPhone) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerAddress = customerAddress;
    this.customerPhone = customerPhone;
}

$(document).ready(function() {
  var customerName;
  var customerEmail;
  var customerAddress;
  var customerPhone;

  $("#start-btn").click(function() {
    event.preventDefault();
    var customerName = $("input#customer-name").val();
    var customerEmail = $("input#customer-email").val();
    var customerAddress = $("input#customer-address").val();
    var customerPhone = $("input#customer-phone").val();
    customer = new Customer(customerName, customerEmail, customerAddress, customerPhone);


    $("#start-btn").hide();
    $("#customer-form").show();
    $("#order-form").hide();

  $("#customer-form").submit(function() {
    event.preventDefault();

    $("start-btn").hide();
    $("#customer-form").hide();
    $("#order-form").show();
  })

  });
});
