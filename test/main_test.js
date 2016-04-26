describe('Unit Test',function () {
    var inputs;
    var allNumbers;

    beforeEach(function () {
        allNumbers = loadAllNumbers ();
        inputs = "910";
    });

    describe('stringSplit()',function () {
        it('should print correct string',function () {
            var newInputs = stringSplit (inputs);
            var expectNewInputs = [
                '9',
                '1',
                '0'
            ];
            expect(newInputs).toEqual(expectNewInputs);
        });
    });

    describe('buildDisplay()',function () {
        it ('should print correct Items',function () {
            var inputs = [
                '9',
                '1',
                '0'
            ];
            var lcdDisplay = buildDisplay (inputs,allNumbers);
            var expectLcdDisplay = [
                {
                    number:'9',
                    lcd :[
                        '._.',
                        '|_|',
                        '..|'
                    ]
                },
                {
                    number:'1',
                    lcd :[
                        '...',
                        '..|',
                        '..|'
                    ]
                },
                {
                    number:'0',
                    lcd :[
                        '._.',
                        '|.|',
                        '|_|'
                    ]
                }
            ];
            expect(lcdDisplay).toEqual(expectLcdDisplay);
        });
    });

    describe('buildPrintDisplay()',function () {
        it ('should print correct printLCD',function () {
            var inputItems = [
                {
                    number:'9',
                    lcd :[
                        '._.',
                        '|_|',
                        '..|'
                    ]
                },
                {
                    number:'1',
                    lcd :[
                        '...',
                        '..|',
                        '..|'
                    ]
                },
                {
                    number:'0',
                    lcd :[
                        '._.',
                        '|.|',
                        '|_|'
                    ]
                }
            ];
            var display =buildPrintDisplay (inputItems);
            var expectDisplay =
                '...\n'+
                '._. ... ._. \n'+
                '|_| ..| |.| \n'+
                '..| ..| |_| \n';
            expect(display).toEqual(expectDisplay);
        });

    });

});


describe('Integration Test',function () {
    var allNumbers;
    var inputs;
    beforeEach(function () {
        allNumbers = loadAllNumbers();
        inputs = "910";
    });

    it ('should print correct LCDdisplay',function () {
        spyOn(console, 'log');

        printLcdDisplay (inputs);
        var expectDisplay =
            '...\n'+
            '._. ... ._. \n'+
            '|_| ..| |.| \n'+
            '..| ..| |_| \n';
        expect(console.log).toHaveBeenCalledWith(expectDisplay);
    });
    
});