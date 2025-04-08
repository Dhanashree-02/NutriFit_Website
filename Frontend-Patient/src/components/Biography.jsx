import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About" />
      </div>

      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
        NutriFit is a premier nutrition and wellness center dedicated to helping you achieve optimal health through balanced, personalized dietary guidance.Our team of expert dieticians is committed to understanding your unique needs and crafting nutrition plans that fit your lifestyle. At NutriFit, we combine science, compassion, and expertise to empower you on your journey toward lasting health and wellness.


        </p>
        <p>
        Our center is equipped with modern nutritional assessment tools and guided by a team of highly skilled dieticians, all dedicated to delivering expert, personalized care.
        </p>
        <p>
        Our team of experienced dieticians, nutritionists, and wellness experts work together to provide holistic and personalized nutrition solutions.
        </p>
        <p>
        We believe in a client-centered approach, where every individual's nutritional needs are met with care, attention, and professional expertise.
        </p>
        <p>
        We are dedicated to making a meaningful impact on our clients' lives by providing the guidance, support, and care they need to achieve their healthiest selves.
        </p>
      </div>
    </div>
  );
};

export default Biography;
