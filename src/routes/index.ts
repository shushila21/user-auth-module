import { LazyExoticComponent } from 'react';
import AuthenticationPage from '@Components/Authentication';

interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  authenticated?: boolean;
  children?: IRoute[];
}

const appRoutes: IRoute[] = [
  {
    path: '/login',
    name: 'Login',
    component: AuthenticationPage,
    authenticated: false,
  },
  {
    path: '/forgot-password',
    name: 'Login',
    component: AuthenticationPage,
    authenticated: false,
  },
];

export default appRoutes;
