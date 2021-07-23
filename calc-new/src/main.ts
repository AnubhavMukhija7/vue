import { Calculator } from './calculator/calculator';
import { functions } from './interface/interface';

const calculator = new Calculator();
const input = document.getElementById('input') as HTMLInputElement;
const clear = document.getElementById('clear') as HTMLInputElement;
const backSpace = document.getElementById('delete') as HTMLInputElement;
const compute = document.getElementById('compute') as HTMLInputElement;
// const operations = Array.from(document.getElementsByClassName('addValue'));

// operations.forEach((element) => {
//   element.addEventListener('click', () => {
//     input.value += element.innerHTML;
//     console.log(input.value);
//   });
// });

clear.addEventListener('click', () => {
  getResult('clear');
});

backSpace.addEventListener('click', () => {
  getResult('delete');
});

compute.addEventListener('click', () => {
  getResult('compute');
});

const getResult = (functionName: functions) => {
  calculator.calculateResult(input.value, functionName);
  setResult();
};

const setResult = () => {
  input.innerHTML = calculator.getResult();
};
