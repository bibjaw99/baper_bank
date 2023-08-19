// step:1 add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function() {
  // setp:2 get the email address
  // always remember to get the value to get text from the input field
  // ====================================================
  // i. Set id on the html element
  // ii. Get the element using getElementById
  // iii. Get the value from the element
  // ====================================================
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // step:3 Get the password
  const passField = document.getElementById("user-password");
  const password = passField.value;

  // step:4 varify email and password from the client side. BTW this is not how email and pass get checked in real life
  if (email === "myemail@gmail.com" && password === "secret") {
    window.location.href = "bank.html"; // will take you to the dashboard
  } else {
    alert("invalid email or password");
  }
});
