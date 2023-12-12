import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Perks } from '../perks/perks';
import { PhotosUploader } from '../photos-uploader/photos-uploader';

export function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkinTime, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link
            className="inline-flex  gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={'/account/places/new'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === 'new' && (
        <div>
          <form>
            {preInput('Title')}
            <input
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              type="text"
              placeholder="for example: My lovely house"
            />

            {preInput('Address')}
            <input
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              type="text"
              placeholder="address"
            />

            {preInput('Pictures')}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />

            {preInput('Description')}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />

            {preInput('Perks', 'Select your perks')}
            <Perks selected={perks} onChange={setPerks} />

            {preInput('Extra info', 'House rules, etc...')}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />

            {preInput('Check in and check out')}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  value={checkinTime}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  type="text"
                  placeholder="10:00"
                />
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  type="text"
                  placeholder="15:00"
                />
              </div>

              <div>
                <h3
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                  className="mt-2 -mb-1"
                >
                  Max number of guests
                </h3>
                <input placeholder="3" type="number" />
              </div>
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
