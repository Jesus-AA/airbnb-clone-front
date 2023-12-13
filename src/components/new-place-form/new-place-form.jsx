import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AccountNavigation } from '../account-navigation/account-navigation';
import { Perks } from '../perks/perks';
import { PhotosUploader } from '../photos-uploader/photos-uploader';

export function NewPlaceForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/' + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
    });
  }, [id]);

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

  async function addNewPlace(ev) {
    ev.preventDefault();

    await axios.post('/places', {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  return (
    <div>
      <AccountNavigation />
      <form onSubmit={addNewPlace}>
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
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

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
              value={checkIn}
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
  );
}
