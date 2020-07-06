'use strict';
alert('Welcom to my information page');
var username = prompt("Whats your name");
alert ('Welcom to my information page' + username)
var name = prompt("do you know me? YES/NO");
switch (name.toLocaleLowerCase()) {
    case 'yes':
        alert("Thank You ");
        console.log("Thank You");
        break;
    case 'no':
        alert(' My name Is AMjad');
        console.log(' My name Is AMjad');
        break;
    default:
        console.log('Default statment');
        break;
}
var myAge = prompt('What is my age');
switch (myAge) {
    case myAge > '25':
        alert("NO less than this");
        console.log("NO less than 26");
        break;
    case myAge < '25':
        alert('Thats wrong more than 24');
        console.log('Thats wrong more than 24');
        break;
    case myAge == '25':
        alert('Thank You thats write');
        console.log("Thank You thats write");
        break;
    default:
        console.log('Default statment');
        break;
}
var jordan = confirm('Are you from jordan?')
var study = confirm('Are you an Engineer?')


document.write('<h3>' + "What you answerd" + '</h3>');
document.write('<h3>' + "Whats your name.." + username + '</h3>');
document.write('<h3>' + "do you know me?.." + name + '</h3>');
document.write('<h3>' + "my age is.." + myAge + '</h3>');
document.write('<h3>' + "Are you from jordan..?" + jordan + '</h3>');
document.write('<h3>' + "Are you an Engineer..?" + study + '</h3>');


