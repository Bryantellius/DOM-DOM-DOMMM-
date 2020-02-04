// Creates button on html body
let btnDiv = document.createElement('div');
btnDiv.className = 'btnDiv';
let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btnDiv.appendChild(btn);
btn.appendChild(btnText);

document.body.appendChild(btnDiv);
let clicks = 0;
// Listener for click to create black bg div
btn.addEventListener('click', function(){
    let newDiv = document.createElement('div');
    newDiv.className = 'boxes';
    newDiv.id = clicks;
    let divText = document.createTextNode(clicks);
    newDiv.appendChild(divText);
    document.body.appendChild(newDiv);
    clicks++;



    // Listener for click on boxes
    let boxes = document.querySelectorAll('.boxes');
    
    boxes.forEach(function(div){
        div.addEventListener('click', function(e){
            let rainbow = ['pink', 'gray', 'purple', 'green', 'red', 'blue', 'yellow', 'orange'];
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            e.target.style.backgroundColor = rainbow[getRandomInt(9)];
        
        });
        
    });


});