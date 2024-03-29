import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaCarrot } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_DOCTOR } from '../utils/queries';
import { ADD_DOCTOR } from '../utils/mutations';
import Auth from '../utils/auth';

const Doctors = () => {
  // const data = [
  //   {
  //     img: "/src/assets/doc1.jpg",
  //     name: "Dr. Serena Mitchell",
  //     specialties: "Orthopedic Surgeon",
  //   },
  //   {
  //     img: "/src/assets/doc2.jpg",
  //     name: "Dr. Julian Bennett",
  //     specialties: "Cardiologist",
  //   },
  //   {
  //     img: "/src/assets/doc3.jpg",
  //     name: "Dr. Camila Rodriguez",
  //     specialties: "Pediatrician",
  //   },
  //   {
  //     img: "/src/assets/doc4.jpg",
  //     name: "Dr. Victor Nguyen",
  //     specialties: "Neurologist",
  //   },
  //   {
  //     img: "/src/assets/doc5.jpg",
  //     name: "Dr. Ethan Carter",
  //     specialties: "Dermatologist",
  //   },
  //   {
  //     img: "/src/assets/doc6.jpg",
  //     name: "Dr. Olivia Martinez",
  //     specialties: "Ophthalmologist",
  //   },
  // ];

  // Data to pull from DR SEED
  const { loading, data } = useQuery(QUERY_ALL_DOCTOR);
  const doctors = data?.doctors || [];

  // adding DRS to profile
  const [addDoctor, { error }] = useMutation
    (ADD_DOCTOR);

  // Styling for DR Cards
  const slider = useRef(null);
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(event.target);
    console.log(value);
    try {
      const { data } = await addDoctor({
        variables: {
          email: Auth.getProfile().data.email,
          doctorName: value,
        },

      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      {/* TOP SECTION */}
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        {/* INTRO CARD */}
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="text-1xl mt-2 text-center lg:text-start">
          Please browse the list of doctors below, find the best one for your needs and book an appointment! If a different specializtion is needed, call for inquiry or email us directly. 
          </p>
        </div>
        {/* ARROWS */}
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-gradient-to-r from-[#4da8f3] to-[#163d69] text-white px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-gradient-to-r from-[#4da8f3] to-[#163d69] text-white px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

      {/* DR CARDS */}
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {doctors.map((doctor) => (
            <div
              className="h-[400px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={doctor.doctorName}
            >
              {/* <div>
                <img
                  src={e.img}
                  alt="img"
                  className="h-45 rounded-t-xl w-full object-cover"
                />
              </div> */}

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{doctor.doctorName}</h1>
                <h3 className="pt-2">{doctor.specialty}</h3>

                <button onClick={handleFormSubmit} className='border rounded-xl w-full my-5 mx-2 py-2 px-2 bg-gradient-to-r from-[#4da8f3] to-[#163d69] text-white' value={doctor.doctorName} style={{ cursor: 'pointer' }}>Add {`${doctor.doctorName}`}</button>

              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;