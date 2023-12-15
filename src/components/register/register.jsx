/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function userRegister(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registrations Ok!');
    } catch (error) {
      alert('Warning, please enter valid params');
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={userRegister} className="max-w-md mx-auto" action="">
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            type="text"
            placeholder="Kubo San"
          />
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            placeholder="email@.com"
          />
          <input
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            placeholder="password"
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{' '}
            <Link className="underline text-black" to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
