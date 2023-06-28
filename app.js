const done = length => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `Collatz conjecture proven true in ${length} steps`;
};

let counter = 0;
counter++;

const countdown = (num, callback) => {
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
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    countdown(inputNumber, done);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
});