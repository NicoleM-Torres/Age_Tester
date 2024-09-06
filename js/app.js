/*
<input type="text" id="userAge" placeholder="Enter age here">
        <button id="checkAgeBtn">Verify Age</button>
        <button id="clearBtn">Clear</button>
        <p id="result"></p>
*/

document.getElementById('checkAgeBtn').addEventListener('click', function(){
    const userAge = document.getElementById('userAge').ariaValueMax;
    const result = document.getElementById('result');

    if (isNaN(userAge) || userAge === '' || userAge < 0 || userAge > 120){
        result.textContent = ' ERROR: Enter a valid age between 0 & 120';
        result.style.color = 'red';
        return;
    }// END OF IF STATEMENT

    const age = parseInt(userAge, 10);

    
    
    })