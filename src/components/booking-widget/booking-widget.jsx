/* eslint-disable react/prop-types */
export function BookingWidget({ place }) {
  return (
    <div className="bg-white shadow py-4 rounded-2xl">
      <div className="text-2xl text-center">Price: ${place.price} / night</div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label htmlFor="">Check in:</label>
            <input type="date" />
          </div>
          <div className="py-3 px-4 border-l">
            <label htmlFor="">Check out:</label>
            <input type="date" />
          </div>
        </div>
        <div>
          <div className="py-3 px-4 border-t">
            <label htmlFor="">Number of guests:</label>
            <input type="number" value={1} />
          </div>
        </div>
      </div>

      <button className="primary mt-4">Book this place</button>
    </div>
  );
}
