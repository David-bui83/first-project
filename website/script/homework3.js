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

    // If statement to check for empty input boxes
    if ($fNum.trim() === '' || $sNum.trim() === '' || $tNum.trim() === '') {
        alert("Input(s) cannot be empty.");
        clearInput();
    }

    if ($tNum === '0') {
        alert("Step cannot be 0.");
        clearInput;
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
        while ($sNum >= $eNum) {
            // Adding number to array and decrementing by step number
            $numArray.push($sNum);
            $sNum += $stNum;
        }
    }
    // Return Array
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

    for (let i = 0; i <= $localArray.length - 1; i++) {
        $sumOfArray += $localArray[i];
    }
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

    // Calling function and passing values
    isEmpty($startNum, $endNum, $stepNum)

    // Display values to web page
    document.getElementById('startOutput').innerHTML = 'The generated array is ' + getArray($startNum, $endNum, $stepNum);
    document.getElementById('endOutput').innerHTML = 'The sum is ' + getSum(getArray($startNum, $endNum, $stepNum));
    document.getElementById('stepOutput').innerHTML = 'The binary of absolut element values are: ' + getBinary(getArray($startNum, $endNum, $stepNum));
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

