import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Booking = () => {
  
  const params = useParams();
  const data = useLoaderData();
  const [contentData , setContentData] = useState([]);

  console.log(parseInt(params.id));

  useEffect(()=>{
      const findData = data.find(oneData => oneData.id === parseInt(params.id));
      setContentData(findData)
  },[data, params.id])

  return (
    <div className="grid grid-cols-2 gap-7 text-white max-w-6xl mx-auto mt-24">
      <section className="space-y-4 text-center">
        <h1 className="text-8xl font-babe">{contentData.spot_name}</h1>
        <p className="font-mono text-justify">
          {contentData.description}
        </p>
      </section>

      <section className="flex justify-end">
        <div className="bg-white p-4 w-96">
          <form>
            <label
              
              className="block mb-2 text-base font-mono text-gray-700"
            >
              Origin
            </label>
            <select
              name="origin"
              className=" text-gray-900 text-lg font-mono font-bold rounded-md w-full bg-gray-200 p-4"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>

            <label
              
              className="block mb-2 text-base font-mono text-gray-700 mt-3"
            >
              Destination
            </label>
            <select
              name="destination"
              className=" text-gray-900 text-lg font-mono font-bold rounded-md w-full bg-gray-200 p-4"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>

            <div className="flex justify-between">
              <div className=" text-black mt-3">
                <h1 className="font-mono text-gray-700">From</h1>
                <input type="date" name="date" id="" />
              </div>
              <div className=" text-black mt-3">
                <h1 className="font-mono text-gray-700">To</h1>
                <input type="date" name="ToDate" id="" />
              </div>
            </div>
          </form>
        <div>
            <Link to="/startBooking" className="btn bg-yellow-500 w-full font-mono mt-4 rounded-md">
                Start Booking
            </Link>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
