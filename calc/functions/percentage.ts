let val = 0.0;
const percent = (input: HTMLInputElement): void => {
  val = +input.value;
  input.value = input.value + '%';
};

export default percent;
