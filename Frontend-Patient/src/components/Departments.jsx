import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Clinical Nutritionist",
      imageUrl: "/departments/ClinicalNutritionist.jpg",
    },
    {
      name: "Sports Dietitian",
      imageUrl: "/departments/SportsDietitian.jpg",
    },
    {
      name: "Wellness Coach",
      imageUrl: "/departments/WellnessCoach.jpg",
    },
    {
      name: "Nutrition Therapist",
      imageUrl: "/departments/NutritionTherapist.jpg",
    },
    {
      name: "Pediatric Dietician",
      imageUrl: "/departments/PediatricDietician.jpg",
    },
    {
      name: "Geriatric Dietician",
      imageUrl: "/departments/GeriatricDietician.jpg",
    },
    {
      name: "Vegan Dietician",
      imageUrl: "/departments/VeganDietician.jpg",
    },
    {
      name: "Renal Dietician",
      imageUrl: "/departments/RenalDietician.jpg",
    },
    {
      name: "Diabetes Educator",
      imageUrl: "/departments/DiabetesEducator.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel
        responsive={responsive}
       
      >
        {departmentsArray.map((depart, index) => {
          return (
            <div className="card" key={index}>
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl} alt={depart.name} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Departments;
