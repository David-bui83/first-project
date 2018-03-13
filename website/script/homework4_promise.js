// JavaScript for promise

function myPromise() {

    const getList = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'}).then(function (response){
            return response.json();
        }).then(function(data){
            const p = data;
            return p;
           
        }).then(function(p){
            let nameArray = [];
            let userName = '';
            
            for (let i = 0; i < p.length; i++){
                userName = p[i].name;
                nameArray.push(userName);
            };

            return nameArray;
            
        }).then(function(nameArray){

            let stringName = [];
            let userName = '';

            for (let i = 0; i < nameArray.length; i++){
                userName = JSON.stringify(nameArray[i]);
                stringName.push(userName);
            };

            return stringName;

        }).then(function(stringName){

            return stringName.sort((a,b) => a.length - b.length);

        }).then(function(stringName){

            resolve(stringName);
        })
    })
    getList.then(function(resolve){

         // local vairable 
         let name = '';

         // for loop to display email 
         for (let i = 0; i < resolve.length; i++) {
             name += '<li style="list-style-type: none;">' + JSON.parse(resolve[i]) + '</li>';
         }
 
         // display email 
         document.getElementById("promise").innerHTML = name;
        //document.getElementById('promise').innerHTML = resolve;
    }).catch(function(reject){
        document.getElementById('promise').innerHTML = reject;
    })
}

const promise_btn = document.querySelector('#promisebtn');

promise_btn.addEventListener('click',() =>{
    myPromise();
})
