import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Header } from './header';

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(10),
  paddingTop: '66px',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <StyledRoot>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
