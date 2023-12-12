import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import AccountPage from './components/account/account-page';
import IndexPage from './components/index-page/index-page';
import Layout from './components/layout/layout';
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register/register';
import { UserContextProvider } from './user-context';

axios.defaults.baseURL = 'http://127.0.0.1:4000';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
