const done = length => {
  const outputDiv = document.getElementById('output');
  const result = `Collatz conjecture proven true in ${length} steps`;

  // Preserve existing numbers and add a line break
  const existingContent = outputDiv.innerHTML;
  outputDiv.innerHTML = existingContent + '<br>';

  // Append the final number and the result
  outputDiv.innerHTML += `1<br>${result}`;
};

let numbers = [];

const countdown = (num, callback) => {
  numbers.push(num);

  if (num == 1) {
    callback(numbers.length - 1);
  } else {
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
    numbers = []; // Clear the numbers array
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    countdown(inputNumber, done);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
});