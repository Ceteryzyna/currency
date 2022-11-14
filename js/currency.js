
let amountElement = document.querySelector(".js-amount");
let rateElement = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let rateElement = 4.28;
    let value = amount * rateElement;

    valueElement.innerText = value.toFixed(2);

    formElement.addEventListener("reset", () => {
        valueElement.innerText = "EUR/";
});
})