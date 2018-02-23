// JavaScript to run program

/**
 * Function to check if inputs are empty
 * If any input boxes are empty, open alert box with error message
 * @param {$first}  
 * @param {$second}  
 * @param {$third}  
 */
function isEmpty($first, $second, $third) {

    // local variables to store data
    const $fNum = $first;
    const $sNum = $second;
    const $tNum = $third;

    // local boolean variable for true false condition
    let $pass = false;

    // Try catch for exception handling
    try {

        // If statement to check condiction
        if ($fNum === '' || $sNum === '' || $tNum === '') throw 'empty';
        if (isNaN($fNum) || isNaN($sNum) || isNaN($tNum)) throw 'aplabet';
        if ($tNum === '0') throw '0.'

        // Setting variable to true
        $pass = true;

    } catch (err) {

        // Alert box for error message
        alert('Input(s) cannot be ' + err);
    } finally {

        // Return true value
        return $pass;
    }
}

/**
 * Function to generate sequence 
 * @param {$first}  
 * @param {$second}  
 * @param {$third}  
 */
function getArray($first, $second, $third) {

    // Local variables to store data
    let $sNum = parseInt($first);
    let $eNum = parseInt($second);
    let $stNum = parseInt($third);

    // Create empty array to store sequence
    const $numArray = [];

    // If statement to check condition
    if ($sNum < $eNum) {
        // While loop to generate sequence and adding values to array
        while ($sNum <= $eNum) {
            // Adding number to array and incrementing by step number
            $numArray.push($sNum);
            $sNum += $stNum;
        }
    }
    else if ($sNum > $eNum) {
        // While loop to generate sequence and adding values to array
        while ($sNum >= $eNum) {
            // Adding number to array and decrementing by step number
            $numArray.push($sNum);
            $sNum += $stNum;
        }
    }

    // Return array
    return $numArray;
}

/**
 * Function to get sum of array
 * @param {$numArray}  
 */
function getSum($numArray) {

    // Local array and variable
    let $localArray = $numArray;
    let $sumOfArray = 0;

    // For loop to get sum of array
    for (let i = 0; i <= $localArray.length - 1; i++) {
        // Get sum of array
        $sumOfArray += $localArray[i];
    }

    // Return sum
    return $sumOfArray;
}

/**
 * Funtion to get binary values 
 * @param {$numArray}  
 */
function getBinary($numArray) {

    // Local arrays
    let $localArray = $numArray;
    let $binaryArray = [];

    // For loop to cycle through array and convert values to binary
    for (let i = 0; i <= $localArray.length - 1; i++) {
        // conver values to binary
        $binaryArray.push(Math.abs(parseInt($localArray[i].toString(2))));
    }

    // return array
    return $binaryArray;
}

/** 
 * Function for submit button
*/
function mySubmit() {

    // Getting values from input boxes and storing in variables
    const $startNum = document.getElementById('startNum').value;
    const $endNum = document.getElementById('endNum').value;
    const $stepNum = document.getElementById('stepNum').value;

    // If statement to check condition of returned value
    if (isEmpty($startNum, $endNum, $stepNum) === true) {

        // Display values to web page
        document.getElementById('startOutput').innerHTML = 'The generated array is ' + getArray($startNum, $endNum, $stepNum);
        document.getElementById('endOutput').innerHTML = 'The sum is ' + getSum(getArray($startNum, $endNum, $stepNum));
        document.getElementById('stepOutput').innerHTML = 'The binary of absolut element values are: ' + getBinary(getArray($startNum, $endNum, $stepNum));
    }
}

/** 
 * Function to clear input boxes
*/
function clearInput() {

    // Clear input boxes by setting input boxes equal to empty
    document.getElementById('startNum').value = '';
    document.getElementById('endNum').value = '';
    document.getElementById('stepNum').value = '';
}

