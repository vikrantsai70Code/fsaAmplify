import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import Login from './pages/Login';
import Layout from './components/Layout';
import ApplicationForm from './pages/ApplicationForm';
import Applications from './pages/Applications';
import ReviewApplications from './pages/ReviewApplications';
import ApproveApplications from './pages/ApproveApplications';

const App: React.FC = () => {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={currentUser ? <Layout /> : <Navigate to="/login" />}>
          <Route path="apply" element={<ApplicationForm />} />
          <Route path="applications" element={<Applications />} />
          <Route path="review" element={<ReviewApplications />} />
          <Route path="approve" element={<ApproveApplications />} />
          <Route path="" element={
            <Navigate to={currentUser?.role === 'student' ? '/applications' : `/${currentUser?.role}`} />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;