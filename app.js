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
    let link = document.createElement('a');
    newDiv.className = 'boxes';
    newDiv.id = clicks;
    link.id = clicks;
    let divText = document.createTextNode(clicks);
    link.appendChild(divText);
    newDiv.appendChild(link);
    document.body.appendChild(newDiv);
    clicks++;



    // Listener for click on boxes
    let boxes = document.querySelectorAll('.boxes');

    boxes.forEach(function(div){
        // Changes box background to random color
        div.addEventListener('click', function(e){
            let rainbow = ['pink', 'gray', 'purple', 'green', 'red', 'blue', 'yellow', 'orange'];
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            if(e.target===div){
                e.target.style.backgroundColor = rainbow[getRandomInt(9)];
            }
        
        });
    });
    
    
    // Adds event listeners to links
        // Double Click = removeChild()
        link.addEventListener('dblclick', function(e){
            let currentBoxes = document.getElementsByClassName('boxes');
            let target = e.target;
            if(target.parentNode == currentBoxes[0]){
                console.log(newDiv.id);
                console.log('no div');
                // Alert 
            }else if(e.target.id % 2){
                document.body.removeChild(currentBoxes[parseInt(e.target.id)-1]);
            }else{
                if(target.parentNode == currentBoxes[currentBoxes.length-1]){
                    console.log('no div');
                }else{
                document.body.removeChild(currentBoxes[parseInt(e.target.id)+1]);
                }
            }
        });
    
});

