var addChar = function (input, character) {
    if (input.value == null || input.value == '0')
        input.value = character;
    else
        input.value += character;
};
var cos = function (form) {
    form.display.value = Math.cos(form.display.value);
};
var sin = function (form) {
    form.display.value = Math.sin(form.display.value);
};
var tan = function (form) {
    form.display.value = Math.tan(form.display.value);
};
var sqrt = function (form) {
    form.display.value = Math.sqrt(form.display.value);
};
var ln = function (form) {
    form.display.value = Math.log(form.display.value);
};
var exp = function (form) {
    form.display.value = Math.exp(form.display.value);
};
var deleteChar = function (input) {
    input.value = input.value.substring(0, input.value.length - 1);
};
var val = 0.0;
var percent = function (input) {
    val = +input.value;
    input.value = input.value + '%';
};
var changeSign = function (input) {
    if (input.value.substring(0, 1) == '-')
        input.value = input.value.substring(1, input.value.length);
    else
        input.value = '-' + input.value;
};
var compute = function (form) {
    if (val !== 0.0) {
        var percent_1 = form.display.value;
        percent_1 = percent_1.substring(percent_1.indexOf('%') + 1);
        form.display.value = (parseFloat(percent_1) / 100) * val;
        val = 0.0;
    }
    else
        form.display.value = eval(form.display.value);
};
var square = function (form) {
    form.display.value = eval(form.display.value) * eval(form.display.value);
};
var checkNum = function (str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < '0' || ch > '9') {
            if (ch != '/' &&
                ch != '*' &&
                ch != '+' &&
                ch != '-' &&
                ch != '.' &&
                ch != '(' &&
                ch != ')' &&
                ch != '%') {
                alert('invalid entry!');
                return false;
            }
        }
    }
    return true;
};
