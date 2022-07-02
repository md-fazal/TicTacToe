function clicked(class_){
    document.getElementsByClassName(class_)[0].textContent = 'x';
    document.getElementsByClassName(class_)
    console.log(movesStack)
    movesStack.push(class_)
}

function levelChange(class_){
    let currLevel = parseInt(document.getElementsByClassName('level-num')[0].textContent.split(" ")[1])

    // console.log((class_.localeCompare('left-level') === 0))
    if (class_.localeCompare('left-level') === 0){
        if(currLevel >= 1){
            // console.log("Level " + (currLevel - 1).toString())
            document.getElementsByClassName('level-num')[0].textContent = "Level " + (currLevel - 1).toString()
        }
    }
    else if (class_.localeCompare('right-level') === 0){
        // console.log("Level" + (currLevel + 1).toString())
        document.getElementsByClassName('level-num')[0].textContent = "Level " + (currLevel + 1).toString()
    }
}

function undo(){
    class_ = movesStack.pop();
    document.getElementsByClassName(class_)[0].textContent = '';
    // document.getElementsByClassName(class_)[0].disabled = false;
}

let movesStack = new Array();