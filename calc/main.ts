import cos from './functions/trignometry/cos';
import sin from './functions/trignometry/sin';
import tan from './functions/trignometry/tan';
import addChar from './functions/addCharacher';
import deleteChar from './functions/deleteCaracter';
import compute from './functions/calculate';
import changeSign from './functions/changeSign';
import exp from './functions/exponential';
import ln from './functions/log';
import sq from './functions/square';
import sqrt from './functions/squareRoot';
import percent from './functions/percentage';
import isValid from './functions/checkValid';

const cosine = (form: HTMLFormElement) => {
  form.display.value = cos(+form.display.value);
};

const sine = (form: HTMLFormElement) => {
  form.display.value = sin(+form.display.value);
};

const tangent = (form: HTMLFormElement) => {
  form.display.value = tan(+form.display.value);
};

const addCharacher = (input: HTMLInputElement, character: string) => {
  input.value = addChar(input.value, character);
};

const deleteCharacher = (input: HTMLInputElement) => {
  input.value = deleteChar(input.value);
};

const calculate = (form: HTMLFormElement) => {
  form.display.value = compute(form.display.value);
};

const changeSigns = (input: HTMLInputElement) => {
  input.value = changeSign(input.value);
};

const exponential = (form: HTMLFormElement) => {
  form.display.value = exp(+form.display.value);
};

const log = (form: HTMLFormElement) => {
  form.display.value = ln(+form.display.value);
};

const square = (form: HTMLFormElement) => {
  form.display.value = sq(+form.display.value);
};

const squareRoot = (form: HTMLFormElement) => {
  form.display.value = sqrt(+form.display.value);
};

const checkNum = (value: string) => {
  isValid(value);
};

const percentage = (form: HTMLFormElement) => {
  form.display.value = percent(+form.display.value);
};
