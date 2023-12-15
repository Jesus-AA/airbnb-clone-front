import axios from 'axios';
import { useEffect, useState } from 'react';
import { AccountNavigation } from '../account-navigation/account-navigation';

export function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking, index) => (
            <div key={index}>
              {booking.checkIn} to {booking.checkOut}
            </div>
          ))}
      </div>
    </div>
  );
}
