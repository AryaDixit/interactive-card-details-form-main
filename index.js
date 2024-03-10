// handling card holder name
//Getting html name element
const name = document.getElementById("name");
const ch = document.querySelector(".card-holder");
//input value showing in html
name.addEventListener("keyup", function () {
  let value = name.value;
  ch.textContent = value;
  console.log("chahah", ch);
  console.log("output", value);
});

// handling card number
//Getting html name element
const cardNumber = document.getElementById("num");
const cn = document.querySelector(".card-num");
//input card number showing on card
cardNumber.addEventListener("keyup", function () {
  let value = cardNumber.value.replace(/\D/g, "").substring(0, 16);
  value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  cardNumber.value = value;

  // Update the card number display
  cn.textContent = value;
});

//handling card expiry month
//Getting html month elements
const expmon = document.getElementById("mon");
const em = document.querySelector(".month");
//input card expiry month
expmon.addEventListener("keyup", function () {
  let value = expmon.value;
  em.textContent = value;
});

//Getting html month elements
const expyear = document.getElementById("years");
const ey = document.querySelector(".year");
//input card expiry year
expyear.addEventListener("keyup", function () {
  let value = expyear.value;
  ey.textContent = value;
});

//Getting html cvv ellements
const cvv = document.getElementById("cvc");
const cv = document.querySelector(".cvv");
//input expiry year
cvv.addEventListener("keyup", function () {
  let value = cvv.value;
  cv.textContent = value;
});

//Rendering thank You Page
function handleClick() {
  let confirmBtn = document.querySelector(".form-parent");
  confirmBtn.style.display = "none";
}

function handleClick2() {
  let continueBtn = document.querySelector(".ty-section");
  if (continueBtn.style.display != "none") {
    continueBtn.style.display = "none";
  }
}
