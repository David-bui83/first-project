// JavaScript for promise

/** 
 * function to execute program
*/
function myPromise() {

    // variable set to new promise
    const getList = new Promise((resolve, reject) => {

        // fetch function with GET method
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get'
        }).then((response) => response.json()
        ).then((data) => {

            // local variable
            let p = data;

            // if statement to check data
            // if variable is not empty, pass variable to resolve funciton
            // else pass error to reject function
            if (p != '') {
                resolve(p);
            } else {
                reject('Error');
            }

        })
    })

    // promise chain
    getList.then((resolve) => {
        // local array and vairable
        let nameArray = [];
        let userName = '';

        // for loop to extract name 
        for (let i = 0; i < resolve.length; i++) {
            userName = resolve[i].name;
            nameArray.push(userName);
        };

        // return name array
        return nameArray;

    }).then((resolve) => {

        // local array and variable
        let stringName = [];
        let userName = '';

        // for loop to extract name to string
        for (let i = 0; i < resolve.length; i++) {
            userName = JSON.stringify(resolve[i]);
            stringName.push(userName);
        };

        // return array
        return stringName;

    }).then(function (resolve) {
        // return sorted list
        return resolve.sort((a, b) => a.length - b.length);
    }).then(function (resolve) {

        // local vairable 
        let name = '';

        // for loop to display email 
        for (let i = 0; i < resolve.length; i++) {
            name += '<li style="list-style-type: none;">' + JSON.parse(resolve[i]) + '</li>';
        }

        // display email 
        document.getElementById("promise").innerHTML = name;
        //document.getElementById('promise').innerHTML = resolve;
    }).catch(function (reject) {
        document.getElementById('promise').innerHTML = reject;
    })
}

// variable select by id
const promise_btn = document.querySelector('#promisebtn');

// adding event listen to and passing function
promise_btn.addEventListener('click', () => {

    // Call function to run program
    myPromise();
})
