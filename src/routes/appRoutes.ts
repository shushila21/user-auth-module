import Dashboard from '@Views/Dashboard';
import Authentication from '@Views/Authentication';
import { IRoute } from './types';

// Lazy loading
//*  Please consider to rethink before implementing lazy loading
// const HomePage = React.lazy(() => import('@Pages/HomePage'));
// const DashboardPage = React.lazy(() => import('@Pages/DashboardPage'));

const appRoutes: IRoute[] = [
  {
    path: '/login',
    name: 'Login',
    component: Authentication,
    authenticated: false,
  },
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: true,
  },
];

export default appRoutes;
