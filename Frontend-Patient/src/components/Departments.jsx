import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Departments.css';

const Departments = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departmentsArray = [
    {
      name: "Clinical Nutritionist",
      imageUrl: "/departments/ClinicalNutritionist.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Warm lemon water + soaked almonds</li>
          <li>🥣 Breakfast: Oats with banana & chia seeds</li>
          <li>🥗 Lunch: Brown rice + grilled veggies + dal</li>
          <li>☕ Snack: Green tea + fruit</li>
          <li>🍽 Dinner: Quinoa salad or soup</li>
        </ul>
      ),
    },
    {
      name: "Sports Dietitian",
      imageUrl: "/departments/SportsDietitian.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Green smoothie with protein powder</li>
          <li>🥣 Breakfast: Scrambled eggs with spinach</li>
          <li>🥗 Lunch: Chicken breast + sweet potato + steamed veggies</li>
          <li>☕ Snack: Protein bar + nuts</li>
          <li>🍽 Dinner: Salmon with quinoa and greens</li>
        </ul>
      ),
    },
    {
      name: "Wellness Coach",
      imageUrl: "/departments/WellnessCoach.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Warm water with ginger and lemon</li>
          <li>🥣 Breakfast: Avocado toast with poached eggs</li>
          <li>🥗 Lunch: Grilled chicken salad with olive oil dressing</li>
          <li>☕ Snack: Herbal tea + mixed nuts</li>
          <li>🍽 Dinner: Steamed vegetables with brown rice</li>
        </ul>
      ),
    },
    {
      name: "Nutrition Therapist",
      imageUrl: "/departments/NutritionTherapist.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Herbal tea with honey</li>
          <li>🥣 Breakfast: Greek yogurt with mixed berries</li>
          <li>🥗 Lunch: Whole grain wrap with veggies and hummus</li>
          <li>☕ Snack: Carrot sticks with hummus</li>
          <li>🍽 Dinner: Baked tofu with quinoa and steamed broccoli</li>
        </ul>
      ),
    },
    {
      name: "Pediatric Dietician",
      imageUrl: "/departments/PediatricDietician.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Milk with oats</li>
          <li>🥣 Breakfast: Whole wheat pancakes with fruits</li>
          <li>🥗 Lunch: Mac & cheese with vegetables</li>
          <li>☕ Snack: Smoothie with fruits and yogurt</li>
          <li>🍽 Dinner: Grilled chicken with mashed potatoes and peas</li>
        </ul>
      ),
    },
    {
      name: "Geriatric Dietician",
      imageUrl: "/departments/GeriatricDietician.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Oatmeal with nuts and honey</li>
          <li>🥣 Breakfast: Whole wheat toast with avocado</li>
          <li>🥗 Lunch: Fish with brown rice and vegetables</li>
          <li>☕ Snack: A handful of almonds</li>
          <li>🍽 Dinner: Grilled vegetables with cottage cheese</li>
        </ul>
      ),
    },
    {
      name: "Vegan Dietician",
      imageUrl: "/departments/VeganDietician.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Chia pudding with almond milk</li>
          <li>🥣 Breakfast: Smoothie with spinach, banana, and flaxseeds</li>
          <li>🥗 Lunch: Quinoa salad with chickpeas and avocado</li>
          <li>☕ Snack: Trail mix with nuts and dried fruits</li>
          <li>🍽 Dinner: Lentil stew with brown rice</li>
        </ul>
      ),
    },
    {
      name: "Renal Dietician",
      imageUrl: "/departments/RenalDietician.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Warm water with lemon</li>
          <li>🥣 Breakfast: Scrambled eggs with spinach</li>
          <li>🥗 Lunch: Grilled chicken with mashed sweet potatoes</li>
          <li>☕ Snack: Apple slices with almond butter</li>
          <li>🍽 Dinner: Salmon with steamed vegetables</li>
        </ul>
      ),
    },
    {
      name: "Diabetes Educator",
      imageUrl: "/departments/DiabetesEducator.jpg",
      dietPlan: (
        <ul>
          <li>🌅 Morning: Warm water with cinnamon</li>
          <li>🥣 Breakfast: Whole grain toast with almond butter</li>
          <li>🥗 Lunch: Grilled chicken with a side of greens</li>
          <li>☕ Snack: Celery with peanut butter</li>
          <li>🍽 Dinner: Stir-fried tofu with mixed vegetables</li>
        </ul>
      ),
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

  const handleCardClick = (department) => {
    setSelectedDepartment(department);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedDepartment(null);
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel responsive={responsive}>
        {departmentsArray.map((depart, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(depart)}
            >
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl} alt={depart.name} />
            </div>
          );
        })}
      </Carousel>

      {/* Popup for Diet Plan */}
      {showPopup && selectedDepartment && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>{selectedDepartment.name}</h3>
            <div>{selectedDepartment.dietPlan}</div>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;