//i wrote a function 
function addingEventListener() {
    //i created a variable input form html.
    const input = document.getElementById('input');
    //i decided  to get the elemnt by id, rather than querySelector.......
    input.addEventListener('click', clickAlert);
    //an eventlistener consists of the event and a callback function.
    function clickAlert() {
        alert('I was clicked!');
    }
}


