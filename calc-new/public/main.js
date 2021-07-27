System.register(["./calculator/calculator"], function (exports_1, context_1) {
    "use strict";
    var calculator_1, calculator, input, clear, backSpace, compute, operations, operationsArray, getResult, setResult;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (calculator_1_1) {
                calculator_1 = calculator_1_1;
            }
        ],
        execute: function () {
            calculator = new calculator_1.Calculator();
            input = document.getElementById('input');
            clear = document.getElementById('clear');
            backSpace = document.getElementById('delete');
            compute = document.getElementById('compute');
            operations = document.querySelectorAll('input');
            operationsArray = Array.prototype.slice.call(operations);
            operationsArray.forEach(function (element) {
                if (element.id === '') {
                    element.addEventListener('click', function () {
                        input.value = input.value + element.value;
                    });
                }
            });
            clear.addEventListener('click', function () {
                getResult('clear');
            });
            backSpace.addEventListener('click', function () {
                getResult('delete');
            });
            compute.addEventListener('click', function () {
                getResult('compute');
            });
            getResult = function (functionName) {
                calculator.calculateResult(input.value, functionName);
                setResult();
            };
            setResult = function () {
                input.value = calculator.getResult();
            };
        }
    };
});
