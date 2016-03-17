// $("h1").click(function(){
// 	$("p").slideToggle();
// });


// $("h1").click(function(){
// 	var className=$(this).attr("class");
// 	$("p." + className).slideToggle();
// });


// $("h1").click(function(){
// 	$(this).next().slideToggle();
// });



// $(".box1").animate({
// 	"width":"200px"
// }, 2000, animation2);

// function animation2(){
// 	$(".box2").animate({
// 		"width":"300px"
// 	},2000);
// }



// $("#go-button").click(function(){
// 	// Get the info from the box 
// 	var username = $("#username").val();
// 	// Do some stuff with it
// 	var greeting = "Hello "+username;
// 	// Output it to the page
// 	$("#greeting").html(greeting);
// });


// Rules of Debugging:
// check the console
// adding a break point (go to sources tab)


// $("#tellFortune").click(function(){
// 	// Get the info from numChildren
// 	var children=$("#numChildren").val();
// 	var partnersName=$("#partner").val();
// 	var where=$("#location").val();
// 	var jobTitle=$("#job").val();

// 	// do some stuff
// 	var fortuneTeller="You will have"+children+ "with" + partnersName + "in" + where + "and you will be" + jobTitle;
// 	// Output
// 	$("#fortune").html(fortuneTeller);
// });



// The Age Calculator

// Create a text box for a user to enter their birth year
// Create a button that says "How old am I?"
// Create an empty div with the id #age
// Add a click event, so when the user clicks the button, it calculates their two possible ages and says "You are either NN or NN" in the #age div

// $("#howOld").click(function(){
// 	var age=$("#box3").val();
// 	var currentYear = new Date().getFullYear();
// 	var yourAge="You are either " + (currentYear-age) + " or " + (currentYear-age-1) + " years old.";
// 	$("#age").html(yourAge);
// });
// <div id="box3"></div>
// <button id="howOld">How old am I?</button>
// <div id="age"></div>



// The Lifetime Supply Calculator

// Create 2 text boxes - one for the user's current age, and one for the # of snacks they eat per day
// Create a button that says "How many snacks?"
// Create an empty div with the id #snacks
// When the user clicks the button, calculate how many snacks they would eat total for the rest of your life (assuming a max age of 100), and print "You will need NN to last you until the ripe old age of X" in the #snacks div.

// $("#howManySnacks").click(function(){
// 	var now=$("#currentAge").val();
// 	var snacksPerDay=$("#howMany").val();
// 	var desiredSnacks="You would eat " + (100-now)*snacksPerDay + " to the end off your life.";
// 	$("#snacks").html(desiredSnacks);
// });


// <input type="text" id="currentAge">My age</input></br>
// <input type="text" id="howMany">Snacks Per Day</input></br>
// <button id="howManySnacks">How many snacks?</button>
// <div id="#snacks"></div>



// Grade Calculator

// Create a text box where a user can enter a score (a number)
// Create a button that says "Grade Me!"
// Create an empty div #grade
// When the user clicks the button, it should output a letter grade from A-F in the #grade div

 



// var a="Your grade is A";
// var b="Your grade is B";
// var c="Your grade is C";
// var d="Your grade is D";
// var e="Your grade is E";
// var f="Your grade is F";

// $("#submit").click(function(){
// 	var score=parseInt($("#score").val());

// 	if (score>9){
// 		$("#grade").html(a);
// 	}else if(score>=8){
// 		$("#grade").html(b);
// 	}else if (score>=7){
// 		$("#grade").html(c);
// 	}else if(score>=6){
// 		$("#grade").html(d);
// 	}else if(score>=5){
// 		$("#grade").html(e);
// 	}else($("#grade").html(f));

// });


// <input type="text" id="score">What is your score</input>
// <button id="submit"> Grade me!</button>
// <div id="grade"></div>





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


























// // When the user submits the form, run the `enter` function
// $('#entry').submit(enter);

// // `enter()` reads the user's input, and updates the receipt
// function enter(event) {
  
//   // Set up variables to use
//   var entry;
  
//   // Prevent form submission
//   event.preventDefault();
  
//   // Read the user input
//   entry1 = $('#newEntry').val();
  
//   // Convert to decimal
//   entry1 = parseFloat(entry);
  
  
//   // Add line item to table
//   $('#entries1').append('<tr><td></td><td>');

//   // Print the updated total with proper currency formatting
//   $('#totalList').html(currencyFormat(total));
  
//   // Clear out the input field, ready for next value
//   $('#newEntry1').val('');
  
// }





















// $('.multi-field-wrapper').each(function() {
//     var $wrapper = $('.multi-fields', this);
//     $(".add-field", $(this)).click(function(e) {
//         $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
//     });
//     $('.multi-field .remove-field', $wrapper).click(function() {
//         if ($('.multi-field', $wrapper).length > 1)
//             $(this).parent('.multi-field').remove();
//     });
// });






// function cashRegister() {
//     var total = 0;
//     $('#price').each(function() {
//         total += parseInt($(this).text(),10);
//     });
//     $('#cost').html(total);
// $('#add').click(cashRegister);​
// );
	
// Here is a fiddle of what i think you want to do:

// http://jsfiddle.net/maniator/qEy3L/

// JS:

// function getTotal(){
//     var total = 0;
//     $('.price').each(function(){
//         total += parseFloat(this.innerHTML)
//     });
//     $('#total').text(total);
// }

// getTotal();





// var cashRegister = {
//     total: 0,
//     add: function (itemCost) {
//         this.total += itemCost;
//     },

//     scan: function (item) {
//         switch (item) { 
//         case "eggs": 
//             this.add(0.98); 
//             break;

//         case "milk": 
//             this.add(1.23); 
//             break;

//          case "magazine": 
//             this.add(4.99); 
//             break;

//          case "chocolate": 
//             this.add(0.45); 
//             break;
//         }
//         return true;
//     }
// };

// cashRegister.scan("eggs");
// cashRegister.scan("eggs");
// cashRegister.scan("magazine");
// cashRegister.scan("magazine");
// cashRegister.scan("magazine");


// $("#howOld").click(function(){
// 	var age=$("#box3").val();
// 	var currentYear = new Date().getFullYear();
// 	var yourAge="You are either " + (currentYear-age) + " or " + (currentYear-age-1) + " years old.";
// 	$("#age").html(yourAge);
// });
// <input type="text" placeholder="Price"></input>
// <input type="text" placeholder="Name"></input>
// <button id="add">Add Item</button>
// <div id="list"></div>
// <div>Total: $
// 	<span id="cost"></span>
// </div>

