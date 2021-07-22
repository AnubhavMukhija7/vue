const isValid = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (ch < '0' || ch > '9') {
      const checkForOperator = checkInvalidOperator(ch);
      if (!checkForOperator) {
        alert('invalid entry!');
        return false;
      }
    }
  }
  return true;
};

export default isValid;

const checkInvalidOperator = (ch: string): boolean => {
  if (
    ch != '/' &&
    ch != '*' &&
    ch != '+' &&
    ch != '-' &&
    ch != '.' &&
    ch != '(' &&
    ch != ')' &&
    ch != '%'
  )
    return false;
  return true;
};
