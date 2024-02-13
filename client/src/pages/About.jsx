import React from "react";
import img from "../assets/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-10">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-lg text-justify lg:text-start">

          Welcome to What's Up Doc, where compassionate care meets cutting-edge medicine. Driven by a commitment to excellence, we strive to provide personalized healthcare solutions tailored to each patient's unique needs. As a patient, we encourage you to browse our list of esteemed doctors to find the best fit for your needs.
        </p>
        <p className="text-lg text-justify lg:text-start">
        At What's Up Doc, we prioritize preventive care to help our patients achieve and maintain optimal health. From routine check-ups and vaccinations to chronic disease management, our goal is to empower individuals to take control of their well-being. With a focus on education and proactive healthcare strategies, we aim to foster long-lasting relationships built on trust and mutual respect.
        </p>
        <p className="text-lg text-justify lg:text-start">
        We understand that every individual is different, and we take the time to listen attentively to concerns and answer questions. Whether you're seeking treatment for a specific condition or simply looking to prioritize your health, we're here to support you every step of the way. Experience the difference at What's Up Doc, where your health is our top priority.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className="shadow-lg rounded-lg" src={img} alt="img" />
      </div >
    </div>
  );
};






export default About;