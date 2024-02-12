import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaCarrot } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_DOCTOR } from '../utils/queries';
// import { ADD_DOCTOR } from '../utils/mutations';

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
            suscipit illum, numquam incidunt nostrum dolor officia doloremque
            cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
            Dolor, minus reiciendis.
          </p>
        </div>
        {/* ARROWS */}
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;