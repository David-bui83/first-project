
function getfile (){

    const req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/users');
    req.onload = function () {
        if (req.status == 200) {
           
            document.getElementById('t_out').innerHTML = req.response;

        } else {
            document.getElementById('t_out').innerHTML = ('ERROR', req.statusText);
        }
    };
    req.close;
    req.onerror = function () {
        console.log('Network Error');
    };
    req.send(); // Add request to task que
}