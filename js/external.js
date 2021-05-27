"use strict";
console.log('Hello from external JavaScript');
alert("Welcome to my website!");

var user_favorite_color = prompt("What is your favorite color?");
alert("Great! " + user_favorite_color + " is my favorite color too!");


var little_mermaid = prompt("How many days are you going to keep the little mermaid for?"),
brother_bear = prompt("What about Brother Bear?"),
hercules = prompt("And Hercules?"),
total = (+brother_bear + +little_mermaid + +hercules) * 3;
alert("Your total cost has come out to $" + total + ".")


var google_hours = prompt("How many hours did you work this week for Google?"),
amazon_hours = prompt("Okay and how many for Amazon?"),
facebook_hours = prompt("Cool beans, and how many did you work for Facebook?"),
salary = (+google_hours * 400) + (+amazon_hours * 380) + (+facebook_hours * 350)
alert("Your total salary ended up being $" + salary)

var class_max = 30,
class_current_size = prompt("What is the current class size?"),
monday = confirm("Is monday available?"),
tuesday = confirm("Is tuesday available?"),
friday = confirm("Is friday available?");



if(class_current_size < class_max && monday == true && tuesday == true && friday == true){
    alert("Professor Wilkonson's Middle Eastern Art History class is a good fit for you!")
}
else{
    alert("Unfortunately we are unable to schedule you at this time")
}


var items_in_cart = prompt("How many items are the cart?"),
current_date = prompt("What is today's date? (dd format only)"),
expiration_date = prompt("What is the expiration date? (dd format only)"),
membership = confirm("Are you a premium member?");

if(items_in_cart <= 2 && current_date < expiration_date || membership == true){
    alert("The promotion has been applied!")
}
else{
    alert("The promotion cannot be applied at this time.")
}

var username = 'codeup';
var password = 'notastrongpassword';

var five_char = password.length >= 5;
var pass_contains_username = !password.includes(username);
var user_20char = username.length <= 20;
var both_whitespace = password === password.trim() && username === username.trim();

console.log(five_char)
console.log(pass_contains_username)
console.log(user_20char)
console.log(both_whitespace)

