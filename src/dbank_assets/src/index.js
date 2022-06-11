import { dbank } from "../../declarations/dbank"

window.addEventListener("load", async function (param) {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function (param) {
  param.preventDefault();

  const button = param.target.querySelector("#submit-btn");

  button.setAttribute("disabled", true);

  // topUp
  if (document.getElementById("input-amount").value.length != 0) {
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    document.getElementById("input-amount").value = "";
  }

  // withdraw
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);
    document.getElementById("withdrawal-amount").value = "";
  }

  await dbank.widthraw(withdrawAmount);
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  button.removeAttribute("disabled");
});

// import { dbank } from "../../declarations/dbank";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await dbank.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });
