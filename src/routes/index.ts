import AuthenticationPage from '@Components/Authentication';
import { IRoute } from './types';

// Lazy loading
//*  Please consider to rethink before implementing lazy loading
// const HomePage = React.lazy(() => import('@Pages/HomePage'));
// const DashboardPage = React.lazy(() => import('@Pages/DashboardPage'));

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
