import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors';

interface color {
  800: string;
  [key: number]: string;
}

const colors: color[] = [
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
];

const darkIntensity = 800;

export const getRandomColor = () => {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  return colors[randomColorIndex][darkIntensity];
};
