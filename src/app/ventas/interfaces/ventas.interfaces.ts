export enum Color {
  red,
  black,
  blue,
  green,
}

export interface Hero {
  name: string;
  flying: boolean;
  color: Color;
}
