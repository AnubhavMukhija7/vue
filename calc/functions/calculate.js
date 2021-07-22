"use strict";
exports.__esModule = true;
var compute = function (value) {
    var result = eval(value);
    if (result)
        return result;
    return 0;
};
exports["default"] = compute;
