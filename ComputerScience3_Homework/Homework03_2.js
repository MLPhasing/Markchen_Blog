function repeatStringConstructor(number, literal){
    let resString = "";
    for (let i = 0; i < number; i ++){
        resString += literal;
    }
    return resString;
}

function linePrinter(numSpaceBefore, literalNum, numSpaceAfter, literal){
    let spaceBefore = repeatStringConstructor(numSpaceBefore, " ");
    let spaceAfter  = repeatStringConstructor(numSpaceAfter, " ");
    let lineMiddle  = repeatStringConstructor(literalNum, literal);

    return spaceBefore + lineMiddle + spaceAfter;
}

function drawSquare(sideLength, literal){
    let squareString = "";
    for (let line = 0; line < sideLength; line ++){
        squareString += linePrinter(0, sideLength, 0, literal);
        squareString += "\n";
    }
    // console.log(squareString);
    // alert(squareString);
    return squareString
}

function drawRTTriangle(sideLength, literal){
    let triangleString = "";
    for (let line = 1; line <= sideLength; line ++){
        triangleString += linePrinter(0, line, sideLength - line, literal);
        triangleString += '\n';
    }
    // console.log(triangleString);
    return triangleString;
}

function drawSpade(sideLength, literal){
    let spadeString = "";
    let middleLength= 0;
    let spaceBeforeLine = 0;
    if (sideLength % 2 == 1){
        middleLength = 1     
    }
    else{
        middleLength = 2
    }
    spaceBeforeLine = (sideLength - middleLength)/2;
    while (middleLength <= sideLength){
        spadeString += linePrinter(spaceBeforeLine, middleLength, spaceBeforeLine, literal);
        spadeString += '\n'
        middleLength += 2;
        spaceBeforeLine -= 1;
    }
    middleLength -= 4;
    spaceBeforeLine += 2;
    while (middleLength > 0){
        spadeString += linePrinter(spaceBeforeLine, middleLength, spaceBeforeLine, literal);
        spadeString += '\n'
        middleLength -= 2;
        spaceBeforeLine += 1;
    }
    // console.log(spadeString);
    return spadeString;
}

function main(){
    while (true){
        var usrInput = prompt("Please choose the shape you want to print: \nSquare - 1   |   Spade - 2   |   Rt Triangle - 3   |");
        if (usrInput * 1 == 1 || usrInput * 1 == 2 || usrInput * 1 == 3){break;}
        else{alert("Invalid Input, please try again.");}
    }
    while (true){
        var sideLength = prompt("Please put the sidelength of shape here.") * 1;
        if (sideLength * 1 != NaN && sideLength * 1 > 0){break;}
        else{alert("Invalid Input, please try again.");}
    }
    let literal = prompt("Please put the character you want to use to print here.")[0];
    usrInput *= 1;
    let resultStr = "";
    if (usrInput == 1){resultStr = drawSquare(sideLength, literal);}
    else if (usrInput == 2){resultStr = drawSpade(sideLength, literal);}
    else{resultStr = drawRTTriangle(sideLength, literal);}
    alert(resultStr);
}