import bg1 from '../assets/bg1.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
      <div className='grid lg:grid-cols-2 max-w-[1340px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <h1 className='py-2 text-5xl md:text-7xl font-bold text-orange-600'>What's Up Doc? </h1>
          <h2 className='text-5xl font-bold'>Appointment Booking Service</h2>
          <h2 className='text-4xl'>Your Health Is Our Priority</h2>
          <button className='border w-60 my-4 py-2 px-6 bg-gradient-to-r from-[#4da8f3] to-[#163d69] text-white text-2xl'>Get Started</button>
        </div>
        <div>
          <img className='w-[800px] object-cover h-full' src={bg1} alt="Background"/>
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5% '>

        </div>
      </div>
    </div>
  );
};

export default Home;