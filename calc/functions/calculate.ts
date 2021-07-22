const compute = (value: string): number => {
  const result = eval(value);
  if (result) return result;
  return 0;
};

export default compute;
