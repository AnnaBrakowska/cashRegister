



// Cash Register

// Create two text boxes for the user to enter an item name (string) and a price (number)
// Create a button that says "Add Item"
// Create two divs
// #itemList and underneath it, a div that looks like this: <div>Total: $<span id="cost"></span></div>
// Every time the user adds an item, append the name and the price to the #itemList, and update the cost in #cost




$("#list").submit(function(){
	$('#newEntry').trigger('submit');
	var name=$("#name").val();
	var price=$("#price").val();
	var total=0;
	$("#list1").append('<tr><td></td><td>' + name + '</td></tr>');
	$("#price1").append(price);

});



// total will store the running total, starting at 0
var total = 0;

// When the user submits the form, run the `enter` function
$('#entry').submit(enter);

// `enter()` reads the user's input, and updates the receipt
function enter(event) {
  
  // Set up variables to use
  var entry, currency;
  
  // Prevent form submission
  event.preventDefault();
  
  // Read the user input
  entry = $('#newEntry').val();
  
  // Convert to decimal
  entry = parseFloat(entry);
  
  // Convert to currency
  currency = currencyFormat(entry);
  
  // Add line item to table
  $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
  
  // Update the running total
  total = total + entry;
  
  // Print the updated total with proper currency formatting
  $('#total').html(currencyFormat(total));
  
  // Clear out the input field, ready for next value
  $('#newEntry').val('');
  
}

// Use this to convert a number to U.S. currency format
function currencyFormat(number) {
  
  // Convert the number to decimal
  var currency = parseFloat(number);
  
  // Round to 2 decimal places
  currency = currency.toFixed(2);
  
  // Add the $ before the number
  currency = '$' + currency;
  
  // Send back the result
  return currency;
  
}








































