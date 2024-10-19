const id = document.getElementById("parfa-tag");
// console.log(id);
//! Invalid id will return null

const my_class = document.getElementsByClassName("headding");
// console.log(my_class);
//! Invalid class will return empty HTMLCollection

const tagName = document.getElementsByTagName("p");
// console.dir(tagName);
//! Display all the p tag in the console

const query = document.querySelector(".my_class");
// console.dir(query);
//! Display the first element with the class heading

const queryAll = document.querySelectorAll(".my_class");
// console.dir(queryAll);
//! Display all the element with the class my_class

//*Properties //*

// console.log(query.tagName);
//! Display the tag name of the element

//H Imp:-
//firstChild:- It will return the first child of the element and if there is a whitespace between the element then it will return the whitespace as well as text node as shown below.
const firstChild = document.querySelector(".my_class").firstChild;
console.log(firstChild);

//lastChild:- It will return the last child of the element and if there is a whitespace between the element then it will return the whitespace as well as text node as shown below.
const lastChild = document.querySelector(".div-tag").lastChild;
console.dir(lastChild);
