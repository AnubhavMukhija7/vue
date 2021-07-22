const addChar = (input: HTMLInputElement, character: string): void => {
  if (input.value == null || input.value == '0') input.value = character;
  else input.value += character;
};

export default addChar;
