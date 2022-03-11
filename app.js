const done = length => console.log(`Collatz conjecture proven true in ${length} steps`);
let counter = 0;
counter++;

const countdown = (num, callback) => {
    if (num == 1) {
        callback(counter);
    } else {
        counter++
        if (num % 2 === 0) {
            setTimeout(() => {
                console.log(num);
                countdown(num / 2, callback);
            }, 100);
        } else { 
            setTimeout(() => {
                console.log(num);
                countdown(3 * num + 1, callback);
            }, 100);
        }
    }
};

countdown(103, done);