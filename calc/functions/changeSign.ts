const changeSign = (input: HTMLInputElement): void => {
  if (input.value.substring(0, 1) == '-')
    input.value = input.value.substring(1, input.value.length);
  else input.value = '-' + input.value;
};

export default changeSign;
