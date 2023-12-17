/* eslint-disable react/prop-types */
export function PlaceImages({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover ';
  }
  return (
    <img
      className={className}
      src={
        'https://homehub-node-back.onrender.com/uploads/' + place.photos[index]
      }
    />
  );
}
