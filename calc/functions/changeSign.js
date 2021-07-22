"use strict";
exports.__esModule = true;
var changeSign = function (value) {
    if (value.substring(0, 1) == '-')
        return value.substring(1, value.length);
    else
        return '-' + value;
};
exports["default"] = changeSign;
