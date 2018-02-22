
function isEmpty($first, $second, $third){
    
    const $fNum = $first;
    const $sNum = $second;
    const $tNum = $third;
    

    if ($fNum.trim() === '' || $sNum.trim() === '' || $tNum.trim() === ''){
        alert("Input(s) cannot be empty.")

    }

}

function getArray($first, $second, $third){

    const $sNum = $first;
    const $eNum = $second;
    const $stNum = $third;

    const m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    while ($sNum <= $eNum){

        eNum += stNum;
    }
}


function mySubmit() {

    const $startNum = document.getElementById('startNum').value;
    const $endNum = document.getElementById('endNum').value;
    const $stepNum = document.getElementById('stepNum').value;

    isEmpty($startNum, $endNum, $stepNum)

    document.getElementById('startOutput').innerHTML = 'Start Number: ' + $sNum;
    document.getElementById('endOutput').innerHTML = 'End Number: ' + $eNum;
    document.getElementById('stepOutput').innerHTML = 'Step Number: ' + $sNum;
    // mySubmit($startNum, $endNum, $stepNum)
    
}

function clearInput(){

    document.getElementById('startNum').value = '';
    document.getElementById('endNum').value = '';
    document.getElementById('stepNum').value = '';
}

