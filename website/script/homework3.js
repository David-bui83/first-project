// JavaScript to run program

/**
 * Function to check if inputs are empty
 * If any input boxes are empty, open alert box with error message
 * @param {$first}  
 * @param {$second}  
 * @param {$third}  
 */
function isEmpty($first, $second, $third){
    
    // local variables to store data
    const $fNum = $first;
    const $sNum = $second;
    const $tNum = $third;
    
    // If statement to check for empty input boxes
    if ($fNum.trim() === '' || $sNum.trim() === '' || $tNum.trim() === ''){
        alert("Input(s) cannot be empty.")
    }
}

/**
 * 
 * @param {*}  
 * @param {*}  
 * @param {*}  
 */
function getArray($first, $second, $third){

    // Local variables to store data
    const $sNum = $first;
    const $eNum = $second;
    const $stNum = $third;

    // Create empty array to store sequence
    const $numArray = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    // While loop to generate sequence and adding values to array
    while ($sNum <= $eNum){
        

        eNum += stNum;
    }
}

function getSum($numArray){

}

function getBinary($numArray){

}

/** 
 * 
 * 
*/
function mySubmit() {

    // Getting values from input boxes and storing in variables
    const $startNum = document.getElementById('startNum').value;
    const $endNum = document.getElementById('endNum').value;
    const $stepNum = document.getElementById('stepNum').value;

    // Calling function and passing values
    isEmpty($startNum, $endNum, $stepNum)

    document.getElementById('startOutput').innerHTML = 'Start Number: ' + $sNum;
    document.getElementById('endOutput').innerHTML = 'End Number: ' + $eNum;
    document.getElementById('stepOutput').innerHTML = 'Step Number: ' + $sNum;
    // mySubmit($startNum, $endNum, $stepNum)
    
}

/** 
 * Function to clear input boxes
*/
function clearInput(){

    // Clear input boxes by setting input boxes equal to empty
    document.getElementById('startNum').value = '';
    document.getElementById('endNum').value = '';
    document.getElementById('stepNum').value = '';
}

