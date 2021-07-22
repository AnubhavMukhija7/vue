"use strict";
exports.__esModule = true;
var cos_1 = require("./functions/trignometry/cos");
var sin_1 = require("./functions/trignometry/sin");
var tan_1 = require("./functions/trignometry/tan");
var addCharacher_1 = require("./functions/addCharacher");
var deleteCaracter_1 = require("./functions/deleteCaracter");
var calculate_1 = require("./functions/calculate");
var changeSign_1 = require("./functions/changeSign");
var exponential_1 = require("./functions/exponential");
var log_1 = require("./functions/log");
var square_1 = require("./functions/square");
var squareRoot_1 = require("./functions/squareRoot");
var percentage_1 = require("./functions/percentage");
var checkValid_1 = require("./functions/checkValid");
var cosine = function (form) {
    form.display.value = cos_1["default"](+form.display.value);
};
var sine = function (form) {
    form.display.value = sin_1["default"](+form.display.value);
};
var tangent = function (form) {
    form.display.value = tan_1["default"](+form.display.value);
};
var addCharacher = function (input, character) {
    input.value = addCharacher_1["default"](input.value, character);
};
var deleteCharacher = function (input) {
    input.value = deleteCaracter_1["default"](input.value);
};
var calculate = function (form) {
    form.display.value = calculate_1["default"](form.display.value);
};
var changeSigns = function (input) {
    input.value = changeSign_1["default"](input.value);
};
var exponential = function (form) {
    form.display.value = exponential_1["default"](+form.display.value);
};
var log = function (form) {
    form.display.value = log_1["default"](+form.display.value);
};
var square = function (form) {
    form.display.value = square_1["default"](+form.display.value);
};
var squareRoot = function (form) {
    form.display.value = squareRoot_1["default"](+form.display.value);
};
var checkNum = function (value) {
    checkValid_1["default"](value);
};
var percentage = function (form) {
    form.display.value = percentage_1["default"](+form.display.value);
};
