const toTitleCase = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(' ');
};

export default toTitleCase;
