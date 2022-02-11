import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { UserProvider } from './hooks/user';
import Login from 'screens/Login';
import Auth from 'screens/Auth';
import Dashboard from 'screens/Dashboard';
import { MainAppStyle } from 'components/styleComponents';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MainAppStyle>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainAppStyle>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
