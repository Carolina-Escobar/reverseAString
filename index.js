'use strict';
//Método corto split
function reverseString(str) {
    return str.split('').reverse('').join('');
  }
  
  reverseString("hello");

// Método largo split
  function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse ('');
    var joinArray = reverseArray.join ('');
     return joinArray;
  }
  
  reverseString("hello");

//Método for loop

function reverseString(str) {
    var newstring = "";
    for (var i= str.length-1; i>=0; i--) {
    newstring += str[i];
    }
    return newstring;
  }
  
  reverseString("hello");