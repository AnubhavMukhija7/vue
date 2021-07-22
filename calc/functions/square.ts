const square = (form: HTMLFormElement): void => {
  form.display.value = +form.display.value * +form.display.value;
};

export default square;
