import React from "react";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/home.png')] bg-no-repeat bg-cover ">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-orange-500 text-5xl font-bold leading-tight">
          What's Up Doc? 
        <h2 className="text-white text-4xl font-bold leading-tight">
          Appointment Booking Service
        </h2>
        <h2 className="text-white text-4xl font-bold leading-tight">
         You health is our priority
        </h2>
        </h1>
        <p className="text-white text-2xl font-semi-bold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. 
        </p>
      </div>
    </div>
  );
};

export default Home;