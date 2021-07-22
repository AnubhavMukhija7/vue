const compute = (form: HTMLFormElement): void => {
  form.display.value = eval(form.display.value);
};

export default compute;
