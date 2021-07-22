const changeSign = (value: string) => {
  if (value.substring(0, 1) == '-') return value.substring(1, value.length);
  else return '-' + value;
};

export default changeSign;
