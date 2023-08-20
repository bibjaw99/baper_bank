// step: 1 add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step:2 get the deposit ammount from the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmmountString = depositField.value;
  const newDepositAmmount = parseFloat(newDepositAmmountString);

  // step:3 get the current deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // current balance
  const currentDepositeTotal = previousDepositTotal + newDepositAmmount;
  depositTotalElement.innerText = currentDepositeTotal;

  // current balance part
  const balanceTotalElement = document.getElementById("balance-total");
  const totalBalance = parseFloat(balanceTotalElement.innerText);
  const newBalance = totalBalance + newDepositAmmount;
  balanceTotalElement.innerText = newBalance;

  // clear input field
  depositField.value = "";
});

// withdraw part
// =======================================================================
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step:2 get the deposit ammount from the input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmmountString = withdrawField.value;
  const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const totalBalance = parseFloat(balanceTotalElement.innerText);
  const newBalance = totalBalance - newWithdrawAmmount;
  balanceTotalElement.innerText = newBalance;

  // clear input field
  withdrawField.value = "";
});
