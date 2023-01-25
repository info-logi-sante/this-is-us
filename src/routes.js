import { useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import UserPage from './pages/UserPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '',
      element: <DashboardLayout />,
      children: [{ path: '', element: <UserPage /> }],
    },
  ]);

  return routes;
}
