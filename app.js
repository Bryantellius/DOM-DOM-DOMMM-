// Creates Container
let main = document.createElement('div');
main.className = 'container';
document.body.appendChild(main);
// Creates Jumbotron
let jumbo = document.createElement('div')
jumbo.className = 'jumbotron my-3 shadow'
let title = document.createElement('h1');
let subTitle = document.createElement('h6');
subTitle.textContent = 'If you did not imagine "dun dun dunnn" as you read the title, try again.';
subTitle.className = 'text-center';
title.className = 'text-center';
title.textContent = 'DOM DOM DOMMMM';
jumbo.appendChild(title);
jumbo.appendChild(subTitle);
main.appendChild(jumbo);
// Creates button on html body
let btnDiv = document.createElement('div');
btnDiv.className = 'row my-3 d-flex justify-content-center';
let btn = document.createElement('button');
btn.className = 'btn btn-primary rounded shadow'
let btnText = document.createTextNode('Add Square');
btnDiv.appendChild(btn);
btn.appendChild(btnText);

main.appendChild(btnDiv);
let clicks = 0;
// Listener for click to create black bg div
btn.addEventListener('click', function(){
    let newDiv = document.createElement('div');
    let link = document.createElement('a');
    newDiv.className = 'boxes rounded shadow';
    newDiv.id = clicks;
    link.id = clicks;
    let divText = document.createTextNode(clicks);
    link.appendChild(divText);
    newDiv.appendChild(link);
    main.appendChild(newDiv);
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
            // For loop that checks place of targeted square
            for(i=0; i<currentBoxes.length; i++){
                // Checks is target has an even or odd id, deletes squares or displays alert accordingly 
               if(target.id % 2){
                   if(target.parentNode===currentBoxes[0]){
                       alert('No Square to the Left');
                       return;
                   }else{
                       if(target.parentNode===currentBoxes[i]){
                           let left = currentBoxes[i-1];
                           main.removeChild(left);
                           clicks--;
                           return;
                       }
                   }

               }else{
                   if(target.parentNode===currentBoxes[currentBoxes.length-1]){
                       alert('No Square to the Right');
                       return;
                   }else{
                    if(target.parentNode===currentBoxes[i]){
                        let right = currentBoxes[i+1];
                        main.removeChild(right);
                        clicks--;
                        return;
                    }
                   }
               } 
            }
            
        });
    
});

