const convertToHref = (url: string) => {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}

const convertTo2D = <T>(arr: T[], size: number) => {
  const res: T[][] = [];

  arr.forEach((val, ind) => {
    if (ind % size === 0) {
      res.push([val]);
    } else {
      res[res.length - 1].push(val);
    }
  });

  return res;
}

export { convertToHref, convertTo2D };