import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './hooks/user';
import Login from 'screens/Login';
import Auth from 'screens/Auth';
import Dashboard from 'screens/Dashboard';
import { MainAppStyle } from 'components/styleComponents';

function App() {
  return (
    <UserProvider>
      <MainAppStyle>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainAppStyle>
    </UserProvider>
  );
}

export default App;
