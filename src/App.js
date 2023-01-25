import Router from './routes';
import ThemeProvider from './theme';
import DashboardLayout from './layouts/dashboard';
import UserPage from './pages/UserPage';

export const App = () => (
  <ThemeProvider>
    <Router />
    <DashboardLayout>
      <UserPage />
    </DashboardLayout>
  </ThemeProvider>
);
