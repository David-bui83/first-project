// JavaScript for promise

function myPromise() {

    const getList = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get'
        }).then((response) => response.json()
        ).then((data) => {

            let p = data;
            
            if (p != ''){
                resolve(p);
            }else{
                reject('Error');
            }
            
        })
})

    getList.then((resolve) => {
        let nameArray = [];
        let userName = '';

        for (let i = 0; i < resolve.length; i++) {
            userName = resolve[i].name;
            nameArray.push(userName);
        };

        return nameArray;
    }).then((resolve) => {

        let stringName = [];
        let userName = '';

        for (let i = 0; i < resolve.length; i++) {
            userName = JSON.stringify(resolve[i]);
            stringName.push(userName);
        };

        return stringName;
    })
        .then(function (resolve) {
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

const promise_btn = document.querySelector('#promisebtn');

promise_btn.addEventListener('click', () => {
    myPromise();
})
