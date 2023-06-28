const done = length => {
  const outputDiv = document.getElementById('output');
  const result = `Collatz conjecture proven true in ${length} steps`;
  outputDiv.innerHTML += '<br>' + result;

  // Store result in local storage to keep it even after page reload
  localStorage.setItem('collatzResult', outputDiv.innerHTML);
};

let counter = 0;
let numbers = new Set(); // Store unique numbers

const countdown = (num, callback) => {
  if (numbers.has(num)) {
    return; // Stop recursion if number is repeated
  }

  numbers.add(num);

  if (num == 1) {
    callback(counter);
  } else {
    counter++;
    if (num % 2 === 0) {
      setTimeout(() => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += num + '<br>';
        countdown(num / 2, callback);
      }, 100);
    } else {
      setTimeout(() => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += num + '<br>';
        countdown(3 * num + 1, callback);
      }, 100);
    }
  }
};

document.getElementById('convergeBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputNumber').value;
  const inputNumber = parseInt(inputText);

  if (!isNaN(inputNumber)) {
    numbers.clear(); // Clear the numbers set
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    countdown(inputNumber, done);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
});

// Retrieve stored result from local storage on page reload
window.addEventListener('load', () => {
  const outputDiv = document.getElementById('output');
  const collatzResult = localStorage.getItem('collatzResult');
  if (collatzResult) {
    outputDiv.innerHTML = collatzResult;
  }
});