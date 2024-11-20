const id = document.getElementById("parfa-tag");
console.log(id);
//! Invalid id will return null

const my_class = document.getElementsByClassName("headding");
// console.log(my_class);
//! Invalid class will return empty HTMLCollection

const tagName = document.getElementsByTagName("p");
// console.dir(tagName);
//! Display all the p tag in the console

const query = document.querySelector(".my_class");
// console.dir(query);
//! Display the first element with the class .my_class

const queryAll = document.querySelectorAll(".my_class");
// console.dir(queryAll);
//! Display all the element with the class .my_class

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

console.log(document.body.innerText);
console.log(document.body.innerHTML);
console.log(document.body.textContent);
//!textContent can return the text that is hidden by CSS but innerText can't.

//` Practice
// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.
let myClass = document.querySelector("h2");
let newClass = " from Apna College";
myClass.innerText = myClass.innerText + newClass;

// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
// let access = document.querySelectorAll(".box");

// access[0].innerText = "TESTxxds";
// access[1].innerText = "dsdsd";
// access[2].innerText = "ij[jw";

let test = document.querySelector(".box");
test.firstChild.textContent = "name";
// test.secondChild.textContent = "age";

//`

// node.append( el ) adds at the end of node (inside)
let divTest = document.querySelector("#test");
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
divTest.append(newBtn);

// node.prepend( eI ) adds at the start of node (inside)
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello</i>";
document.querySelector("body").prepend(newHeading);

// node.before( eI ) adds before the node (outside)
// node.after( eI ) adds after the node (outside)

//` Practise
//Q. Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.
let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);

//Q.Create a p tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the element.
let practise_p = document.querySelector("#p");
// practise_p.setAttribute("class", "newClass"); //!the setAttribute method will overwrite the existing class name.

//Did you notice, how you overwrite the class name when you add a new one ? Solve this problem using classList.
practise_p.classList.add("newClass"); //!but the classList method will not overwrite the existing class name, instead it will add the new class keeping the existing class name as it is.
//`
