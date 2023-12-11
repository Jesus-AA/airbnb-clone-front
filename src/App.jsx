import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/index-page/index-page';
import Layout from './components/layout/layout';
import LoginPage from './components/login-page/login-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
