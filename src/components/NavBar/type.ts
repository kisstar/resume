import { Key } from 'react';

export interface Route {
  key?: Key;
  text: string;
  link: string;
}

export interface NavBar {
  brand?: string;
  routes?: Route[];
}
