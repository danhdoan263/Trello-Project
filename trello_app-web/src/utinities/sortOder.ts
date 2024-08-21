export const sortOder = <T>(arrray: T[], oder: string[], key: keyof T): T[] => {
  return arrray.sort((a, b) => {
    return (
      oder.indexOf(a[key] as unknown as string) -
      oder.indexOf(b[key] as unknown as string)
    );
  });
};
