const addChar = (value: string, character: string) => {
  if (value == null || value == '0') return character;
  else return value + character;
};

export default addChar;
