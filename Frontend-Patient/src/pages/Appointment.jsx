import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"NutriFit – Your Wellness, Our Mission"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
