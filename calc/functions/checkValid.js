"use strict";
exports.__esModule = true;
var isValid = function (str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < '0' || ch > '9') {
            var checkForOperator = checkInvalidOperator(ch);
            if (!checkForOperator) {
                alert('invalid entry!');
                return false;
            }
        }
    }
    return true;
};
exports["default"] = isValid;
var checkInvalidOperator = function (ch) {
    if (ch != '/' &&
        ch != '*' &&
        ch != '+' &&
        ch != '-' &&
        ch != '.' &&
        ch != '(' &&
        ch != ')' &&
        ch != '%')
        return false;
    return true;
};
