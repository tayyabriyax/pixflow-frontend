import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  Create,
  Home,
  Profile,
  Search,
  Settings,
  SignIn,
  SignUp
} from './pages';
import { Layout, PrivateRoute } from './Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute>
            <Create />
          </PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute>
            <Search />
          </PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute>
            <Profile />
          </PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute>
            <Settings />
          </PrivateRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
