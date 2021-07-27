System.register([], function (exports_1, context_1) {
    "use strict";
    var Calculator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Calculator = /** @class */ (function () {
                function Calculator() {
                    this.value = '0';
                }
                Calculator.prototype.calculateResult = function (value, functionName) {
                    this.value = value;
                    if (functionName === 'compute')
                        this.compute();
                    else if (functionName === 'clear')
                        this.allClear();
                    else
                        this.delete();
                };
                Calculator.prototype.getResult = function () {
                    return this.value;
                };
                Calculator.prototype.compute = function () {
                    var result = eval(this.value);
                    if (result)
                        this.value = result;
                    this.value = 'Invalid Operation';
                };
                Calculator.prototype.delete = function () {
                    this.value = this.value.substring(0, this.value.length - 1);
                };
                Calculator.prototype.allClear = function () {
                    this.value = '0';
                };
                return Calculator;
            }());
            exports_1("Calculator", Calculator);
        }
    };
});
