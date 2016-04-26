function printLcdDisplay (inputs) {
    var allNumbers = loadAllNumbers();
    var newInputs = stringSplit(inputs);
    var lcdDisplay = buildDisplay(newInputs , allNumbers);
    var display = buildPrintDisplay(lcdDisplay);
    console.log (display);
}

function stringSplit(inputs) {
    var newInputs = inputs.split('');
    return newInputs;
}

function findDisplay (newInput , allNumbers) {
    for (var j=0; j<allNumbers.length; j++) {
        if (newInput === allNumbers[j].number) {
            return { number:allNumbers[j].number ,lcd:allNumbers[j].lcd };
        }
    }
}

function buildDisplay(newInputs , allNumbers) {
    var lcdDisplay = [];

    for (var i=0; i<newInputs.length; i++) {
        lcdDisplay.push (findDisplay(newInputs[i] , allNumbers));
    }
    return lcdDisplay;
}

function buildPrintDisplay (lcdDisplay) {
    var display = '...\n';

    for (var i=0 ; i < lcdDisplay.length ; i++) {
        for (var j=0 ; j<lcdDisplay[0].lcd.length ; j++) {
            display +=lcdDisplay[j].lcd[i]+' ';
        }
        display += '\n';
    }

    return display;
}
