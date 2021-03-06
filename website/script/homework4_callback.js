// JavaScript for callback

/**
 * function to get the email from the array
 * @param {$listOfObjects}  
 */
function getEmail ($listOfObjects, callback) {
    // local variable to store data
    const oList = $listOfObjects;

    // if statement to check if it's an object
    // if it is an object, extract email, sort, and return email
    // else return error
    if (typeof $listOfObjects === 'object') {
        
        // local array and variable
        let $emailArray = [];
        let $userEmail = '';
        
        // for loop to extract email and store into local array
        for (let i = 0; i < $listOfObjects.length; i++) {
            $userEmail = JSON.stringify($listOfObjects[i].email);
            $emailArray.push($userEmail);
        }

        // sort array
        $emailArray.sort();

        // return array
        displayEmails($emailArray);
    } else {
        // return error
        displayEmails('Error');
    }


}

/**
 * function to display email
 * @param {$listOfEmails}  
 */
let displayEmails = function ($listOFEmails) {

    // local variable 
    const $eList = $listOFEmails;

    // if statement to check if it is an object
    // if object, display email 
    // else display error
    if (typeof $eList === 'object') {
        
        // local vairable 
        let email = '';

        // for loop to display email 
        for (let i = 0; i < $listOFEmails.length; i++) {
            email += '<li style="list-style-type: none;">' + JSON.parse($eList[i]) + '</li>';
        }

        // display email 
        document.getElementById("callback").innerHTML = email;
    } else {
        // display error
        document.getElementById("callback").innerHTML = $eList;
    }

}


/** 
 * function to run program 
*/
function myCallBack() {

    // variable to store html request
    const req = new XMLHttpRequest();
    let objList = '';
    // funciton to check and get list
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            // variable to store list 
            objList = JSON.parse(req.responseText);

            // passing list and callback function
            getEmail(objList, displayEmails());
        };
    };

    // open function to get list from  url
    req.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    req.send();
}

// variable selecting element by id
let btn = document.querySelector('#callbtn');

// adding event listen to and passing function
btn.addEventListener('click', () =>{
    myCallBack();
})