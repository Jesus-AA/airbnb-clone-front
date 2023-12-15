import axios from 'axios';
import { differenceInCalendarDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { AccountNavigation } from '../account-navigation/account-navigation';
import { PlaceImages } from '../place-images/place-images';

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
            <div
              className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
              key={index}
            >
              <div className="w-48">
                <PlaceImages place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <div className="border-t border-gray-300 mt-2 py-2">
                  {format(new Date(booking.checkIn), 'yyyy-MM-dd')} to{' '}
                  {format(new Date(booking.checkOut))}
                </div>
                <div>
                  Number of nights:{' '}
                  {differenceInCalendarDays(
                    new Date(booking.checkOut),
                    new Date(booking.checkIn)
                  )}
                  Total: ${booking.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
