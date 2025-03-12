const inputBox = document.getElementById('input-box');
const submitButton = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('you must write something');

    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        liContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '/u00d7';
        li.appendChild(span); 
        }
        inputBox.value = '';
        saveData();
    }
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    }, false);
        function saveData(){
            localStorage.setItem('dat', listContainer.innerHTML);}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();