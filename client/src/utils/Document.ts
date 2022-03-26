export const getDateString = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const getTimeString = (time: Date): string => {
  const hour = time.getHours();
  let minute = time.getMinutes().toString();
  if (minute.length < 2) {
    minute = '0' + minute;
  }

  return `${getDateString(time)} - ${hour}:${minute}`;
};

export const getSizeString = (size: number) => {
  if (size < 1000) {
    return `${size} o`;
  }
  size = Math.ceil(size / 1000);
  if (size < 1000) {
    return `${size} Ko`;
  }
  size = Math.ceil(size / 1000);
  if (size < 1000) {
    return `${size} Mo`;
  }

  size = Math.ceil(size / 1000);
  return `${size} Go`;
};
