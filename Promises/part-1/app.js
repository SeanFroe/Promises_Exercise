let baseURL = "http://numbersapi.com";
let favNumber = 5;
let numbers = [6, 3, 8];
let $factsList = $("#number-facts");

//1.
$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
  console.log(data);
});
//2.
$.getJSON(`${baseURL}/${numbers}?json`).then((data) => {
  console.log(data);
});

//3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<li>${data.text}</li>`));
});
