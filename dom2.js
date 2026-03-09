// let button = document.getElementById("addBtn");
// let list = document.getElementById("list");

// button.addEventListener("click", function () {

//   let li = document.createElement("li");

//   li.textContent = "New Item";

//   list.appendChild(li);

// });




// To add Dynamic content 
// button.addEventListener("click", function () {

//   let li = document.createElement("li");

//   li.textContent = "Item " + Math.floor(Math.random() * 100);

//   list.appendChild(li);

// });




// 10 march 2026 gpt Js
// querySelector()
// let heading = document.querySelector(".title");

// console.log(heading);




// ID Selection
// let h = document.querySelector("#heading");

// h.textContent = "Learning JS";




// Tag selection
// let p = document.querySelector("p");

// console.log(p);




// querySelectorAll()
// let paragraphs = document.querySelectorAll("p");

// console.log(paragraphs);




// loop through elements
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(p) {
  p.style.color = "blue";
});

