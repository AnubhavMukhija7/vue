const addChar = (input: HTMLInputElement, character: string): void => {
  if (input.value == null || input.value == '0') input.value = character;
  else input.value += character;
};

const cos = (form: HTMLFormElement): void => {
  form.display.value = Math.cos(form.display.value);
};

const sin = (form: HTMLFormElement): void => {
  form.display.value = Math.sin(form.display.value);
};

const tan = (form: HTMLFormElement): void => {
  form.display.value = Math.tan(form.display.value);
};

const sqrt = (form: HTMLFormElement): void => {
  form.display.value = Math.sqrt(form.display.value);
};

const ln = (form: HTMLFormElement): void => {
  form.display.value = Math.log(form.display.value);
};

const exp = (form: HTMLFormElement): void => {
  form.display.value = Math.exp(form.display.value);
};

const deleteChar = (input: HTMLInputElement): void => {
  input.value = input.value.substring(0, input.value.length - 1);
};

let val = 0.0;
const percent = (input: HTMLInputElement): void => {
  val = +input.value;
  input.value = input.value + '%';
};

const changeSign = (input: HTMLInputElement): void => {
  if (input.value.substring(0, 1) == '-')
    input.value = input.value.substring(1, input.value.length);
  else input.value = '-' + input.value;
};

const compute = (form: HTMLFormElement): void => {
  if (val !== 0.0) {
    let percent = form.display.value;
    percent = percent.substring(percent.indexOf('%') + 1);
    form.display.value = (parseFloat(percent) / 100) * val;
    val = 0.0;
  } else form.display.value = eval(form.display.value);
};

const square = (form: HTMLFormElement): void => {
  form.display.value = eval(form.display.value) * eval(form.display.value);
};

const checkNum = (str: string): boolean => {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < '0' || ch > '9') {
      if (
        ch != '/' &&
        ch != '*' &&
        ch != '+' &&
        ch != '-' &&
        ch != '.' &&
        ch != '(' &&
        ch != ')' &&
        ch != '%'
      ) {
        alert('invalid entry!');
        return false;
      }
    }
  }
  return true;
};
