/*
<input type="text" id="userAge" placeholder="Enter age here">
        <button id="checkAgeBtn">Verify Age</button>
        <button id="clearBtn">Clear</button>
        <p id="result"></p>
*/

document.getElementById("checkAgeBtn").addEventListener("click", function () {
  const userAge = document.getElementById("userAge").value;
  const result = document.getElementById("result");

  //MAKES SURE USER INPUT IS VALID
  if (isNaN(userAge) || userAge === "" || userAge < 0 || userAge > 100) {
    result.textContent = " ERROR: Enter a valid age between 0 & 100";
    result.style.color = "red";
    return;
  } // END OF IF STATEMENT

  //turns string into int '10' arg specifies string should be parsed as a decimal
  const age = parseInt(userAge, 10);

  // SORT THROUGH USER INPUT AND CATEGORIZE AGE & DISPLAY YO SCREEN
  if (age < 18) {
    result.textContent = "You're a baby.";
    result.style.color = "orange";
  } else if (age >= 18 && age < 65) {
    result.textContent = "You're an adult .";
    result.style.color = "green";
  } else if (age >= 65) {
    result.textContent = "You're practically ancient.";
    result.style.color = "blue";
  } //END OF IF ELSE STATEMENT
}); // END OF CHECK AGE FUNCTION

// CLEAR USER INPUT BUTTON
document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("userAge").value = "";
  document.getElementById("result").textContent = "";
});
