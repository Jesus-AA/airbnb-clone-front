import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/account/account-page';
import { BookingPage } from './components/bookings/booking-page';
import { BookingsPage } from './components/bookings/bookings';
import IndexPage from './components/index-page/index-page';
import Layout from './components/layout/layout';
import LoginPage from './components/login-page/login-page';
import { NewPlaceForm } from './components/new-place-form/new-place-form';
import { PlacePage } from './components/place-page/place-page';
import { PlacesPage } from './components/places-page/places-page';
import RegisterPage from './components/register/register';
import { UserContextProvider } from './user-context';

axios.defaults.baseURL = 'https://homehub-node-back.onrender.com/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<NewPlaceForm />} />
          <Route path="/account/places/:id" element={<NewPlaceForm />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
