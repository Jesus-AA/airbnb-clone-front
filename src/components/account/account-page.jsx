import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../user-context';

export default function AccountPage() {
  const { user, ready } = useContext(UserContext);

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link
          className="py-2 px-6 bg-primary text-white rounded-full"
          to={'/account'}
        >
          My Profile
        </Link>
        <Link className="py-2 px-6 rounded-full" to={'/account/bookings'}>
          My Bookings
        </Link>
        <Link className="py-2 px-6 rounded-full" to={'/account/places'}>
          My accommodations{' '}
        </Link>
      </nav>
    </div>
  );
}
