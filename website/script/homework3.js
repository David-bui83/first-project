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
 * Function to generate sequence 
 * 
 * @param {*}  
 * @param {*}  
 * @param {*}  
 */
function getArray($first, $second, $third){

    // Local variables to store data
    let $sNum = parseInt($first);
    let $eNum = parseInt($second);
    let $stNum = parseInt($third);

    // Create empty array to store sequence
    const $numArray = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    // While loop to generate sequence and adding values to array
    while ($sNum <= $eNum){

        $numArray.push($sNum);
        $sNum += $stNum;
    }

    return $numArray;
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

    document.getElementById('startOutput').innerHTML = 'Start Number: ' + getArray($startNum, $endNum, $stepNum);
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

