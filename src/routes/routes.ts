import { LazyExoticComponent } from 'react';

import { About, Home, User } from '../02-Component-pattern/pages/Component';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    path: '/home',
    to: '/home',
    Component: Home,
    name: 'Home',
  },
  {
    to: '/users',
    path: 'users',
    Component: User,
    name: 'Users',
  },
  {
    to: '/about',
    path: 'about',
    Component: About,
    name: 'About',
  },
];
