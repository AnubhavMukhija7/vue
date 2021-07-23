import { functions } from '../interface/interface';
export class Calculator {
  private value: string;

  constructor() {
    this.value = '0';
  }
  public calculateResult(value: string, functionName: functions) {
    this.value = value;
    if (functionName === 'compute') this.compute();
    else if (functionName === 'clear') this.allClear();
    else this.delete();
  }

  public getResult() {
    return this.value;
  }

  private compute() {
    const result = eval(this.value);
    if (result) this.value = result;
    this.value = 'Invalid Operation';
  }

  private delete() {
    this.value = this.value.substring(0, this.value.length - 1);
  }

  private allClear() {
    this.value = '0';
  }
}
