// step: 1 add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function() {
  // step:2 get the deposit ammount from the input field
  const depositField = document.getElementById("deposit-field");
  const depositAmmount = depositField.value;

  // step:3 get the current deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmmount;
});
