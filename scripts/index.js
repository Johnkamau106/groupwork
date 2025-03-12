const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); // Corrected from 'liContainer' to 'listContainer'

function addTask(){
    if(inputBox.value === '') {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Corrected 'liContainer' to 'listContainer'
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Corrected the multiplication sign
        li.appendChild(span);

        inputBox.value = ''; // Clear the input box after adding the task
        saveData();
    }
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked'); // Toggle 'checked' class when clicking on a task
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove(); // Remove the task when clicking on the '×'
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML); // Save list to local storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data'); // Load saved tasks from local storage
}

// Show tasks if they exist in local storage when the page is loaded
showTask();
