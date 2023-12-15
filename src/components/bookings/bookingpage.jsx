import { useParams } from 'react-router-dom';

export function BookingPage() {
  const { id } = useParams();
  return <div>Single PAge: {id}</div>;
}
