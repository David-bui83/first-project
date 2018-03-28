// const variables to store data
const eBtn = document.querySelector('#ex_btn');

/**
 * function to check inputs 
 * @param {n1} n1 
 * @param {n2} n2 
 */
function check(n1, n2) {

    // bool value set to false
    let pass = false;

    // try catch for exceptaion
    try {

        // if statement to throw error
        if (n1 === '' || n2 === '') throw 'Input(s) cannot be empty';
        if (isNaN(n1) || isNaN(n2)) throw 'Input(s) must be an number';
        if (2 > n1 || n1 > 100 || 2 > n2 || n2 > 100) throw 'The range is between 2 and 100';

        // set value to true
        pass = true;

    } catch (err) {

        // display error message
        document.getElementById('error_output').innerHTML = err;
        document.getElementById('prime_out1').innerHTML = '';
        document.getElementById('prime_out2').innerHTML = '';
    } finally {

        // return value
        return pass;
    }
}

/**
 * function to get smaller number
 * @param {n1} n1 
 * @param {n2} n2 
 */
function smallNumber(n1, n2) {

    // if statement to check for smaller number
    // if n1 is smaller than n2, return n1
    // else return n2
    if (n1 < n2) {
        // return n1
        return n1;
    } else {
        // return n2
        return n2;
    }
}

/**
 * function to get the bigger number
 * @param {n1} n1 
 * @param {n2} n2 
 */
function bigNumber(n1, n2) {

    // if statement to check for bigger number
    // if n1 is bigger than n2, return n1
    // else return n2
    if (n1 > n2) {
        // return n1
        return n1;
    } else {
        // return n1
        return n2;
    }
}

/**
 * function to get all the prime numbers
 * @param {n1} n1 
 * @param {n2} n2 
 */
function getNumbers(n1, n2) {

    // variable to store data
    let numArray = [];

    // for loop to get prime number and store in array
    // pass value to isPrime() function
    // store number at index i if value is prime
    for (let i = n1; i <= n2; i++) {

        // variable to store returned true/false value from isPrime() funciton
        let num = isPrime(i);

        // if statement to check for true/false value
        // if value is true, push value at index i into array
        if (num === true) {
            // push value at index i into array
            numArray.push(i);
        }
    }

    // return array
    return numArray;
}

/**
 * function to identify prime number
 * @param {num} num 
 */
function isPrime(num) {

    // if statement to check if number is prime
    // if number equals 2, return true
    // else if number is greater than two, if num mod 2 equals 0, return false
    if (num === 2) {
        // return true
        return true;
    } else if (num % 2 === 0) {
        // return false
        return false;
    }

    // variable to store square root value of number
    let sRoot = Math.sqrt(num);
    // for loop identify the non-prime numbers
    for (let i = 3; i <= sRoot; i += 2) {
        // if statement to check for non-prime numbers
        // if number is mod i equals to 0, return false
        if (num % i === 0) {
            // return false
            return false;
        }
    }

    // return true
    return true;
}

/**
 * button event 
 */
eBtn.addEventListener('click', () => {

    // variable to store value from inputs
    let number1 = document.getElementById('input1').value;
    let number2 = document.getElementById('input2').value;

    // if statement to check if inputs are valid
    // if check() function return true, continue program
    if (check(number1, number2) === true) {

        // variable to store data
        let n1 = parseInt(number1);
        let n2 = parseInt(number2);
        let sN = smallNumber(n1, n2);
        let eN = bigNumber(n1, n2);
        let nArr = getNumbers(sN, eN);

        // if statement to check length of array
        // if array length is greater than 0, display number of prime numbers and prime numbers
        // else, display 'there is 0 prime numbers'
        if (nArr.length > 0) {

            // display value
            document.getElementById('error_output').innerHTML = '';
            document.getElementById('prime_out1').innerHTML = 'There are ' + nArr.length + ' prime numbers';

            let pNum = '';
            for (let i = 0; i < nArr.length; i++){
                pNum += '<li style="list-style-type:none">' + nArr[i] + '</li>'
            }

            document.getElementById('prime_out2').innerHTML = pNum;
        } else {

            // display value
            document.getElementById('error_output').innerHTML = '';
            document.getElementById('prime_out1').innerHTML = 'There are ' + nArr.length + ' prime numbers';
            document.getElementById('prime_out2').innerHTML = '';
        }
    };
})