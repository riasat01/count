const addButton = document.querySelector(".plus-btn");
const subtractButton = document.querySelector(".minus-btn");
const counterViewer = document.querySelector('p');
// console.log(addButton, subtractButton, counter)
let counter = 0;

addButton.addEventListener('click',function(){
    ++counter;
    counterViewer.innerText = counter;
});

subtractButton.addEventListener('click', function(){
    if(counter > 0){
        --counter;
    }
    counterViewer.innerText = counter;
});