const body = document.querySelector('body');
let bigDiv = document.createElement('div');
let bigWidth = 450;
let bigHeight = 450;
let divArray = [];
let squares = 0;

function createBigDiv() {
    bigDiv.setAttribute('style', 'width: ' + bigWidth + 
        'px; height: ' + bigHeight + 
        'px; display: flex; flex-flow: row wrap; overflow:auto; border: 2px solid black;' + 
        'margin: 10px; position: absolute; left: 50%; top: 50%; margin-top: -' + 
        bigHeight/2 + 'px; margin-left: -' + bigWidth/2 + 'px;');
    body.appendChild(bigDiv);
}


function createGrid(width, height) {
    (bigWidth/width != Math.floor(bigWidth/width)) ? bigWidth = Math.floor(bigWidth/width)*width : bigWidth; //resizes the grid so div w/h are round numbers. 
    (bigHeight/height != Math.floor(bigHeight/height)) ? bigHeight = Math.floor(bigHeight/height)*height : bigHeight;
    createBigDiv();
	for (let i = 0; i < width*height; i++) {
    divArray[i] = document.createElement('div');
    divArray[i].setAttribute('style', 'width: ' + 
        bigWidth/width + 'px ; height: ' +  bigHeight/height + 'px;');
    bigDiv.appendChild(divArray[i]);
    divArray[i].addEventListener('mouseover', mouseDraw(i));
    }
}

function mouseDraw(i) {
    return function() {
        divArray[i].style.backgroundColor = 'black';
    }
}

function setupButtons() {
    const clearButton = document.createElement('button');
    clearButton.innerHTML = "Clear";
    clearButton.addEventListener('click', function(e) {
        squares = prompt('Enter a value for width and height of the area.');
        squares = (squares == null) ? 10 : squares;
        squares = (squares < Math.min(bigWidth, bigHeight)) ? squares : Math.min(bigWidth, bigHeight);
        bigDiv.remove();
        bigDiv = document.createElement('div');
        createGrid(squares, squares);
    })
    body.appendChild(clearButton);
    clearButton.setAttribute('style', 'position: absolute; width: 50px; left: 50%; top: 50%; margin-top: -' + 
        (bigHeight+60)/2 + 'px; margin-left: -25px')
}

setupButtons();
createGrid(10,10);



