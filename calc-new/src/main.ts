import { Calculator } from './calculator/calculator';
import { Functions } from './interface/interface';

const calculator = new Calculator();
const input = document.getElementById('input') as HTMLInputElement;
const clear = document.getElementById('clear') as HTMLInputElement;
const backSpace = document.getElementById('delete') as HTMLInputElement;
const compute = document.getElementById('compute') as HTMLInputElement;
const operations = document.querySelectorAll('input');
const operationsArray: HTMLInputElement[] =
  Array.prototype.slice.call(operations);

operationsArray.forEach((element) => {
  if (element.id === '') {
    element.addEventListener('click', () => {
      input.value = input.value + element.value;
    });
  }
});

clear.addEventListener('click', () => {
  getResult('clear');
});

backSpace.addEventListener('click', () => {
  getResult('delete');
});

compute.addEventListener('click', () => {
  getResult('compute');
});

const getResult = (functionName: Functions) => {
  calculator.calculateResult(input.value, functionName);
  setResult();
};

const setResult = () => {
  input.value = calculator.getResult();
};
