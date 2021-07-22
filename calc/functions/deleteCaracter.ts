const deleteChar = (input: HTMLInputElement): void => {
  input.value = input.value.substring(0, input.value.length - 1);
};

export default deleteChar;
