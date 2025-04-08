import React, { useState } from "react";
import "./BMICalculator.css";
import { useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const calculateBMI = (e) => {
    e.preventDefault();

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid weight and height values");
      return;
    }

    const heightInMeters = heightNum / 100;
    const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    let categoryResult = "";
    let show = false;

    if (bmiValue < 18.5) {
      categoryResult = "Underweight";
      show = true;
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      categoryResult = "Normal weight";
      show = false; // ✅ No popup for normal weight
    } else if (bmiValue >= 25 && bmiValue < 30) {
      categoryResult = "Overweight";
      show = true;
    } else {
      categoryResult = "Obese";
      show = true;
    }

    setCategory(categoryResult);
    setShowPopup(show);
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setShowPopup(false);
  };

  return (
    <div className="bmi-calculator-container">
      <h2>Calculate Your BMI</h2>
      <form onSubmit={calculateBMI} className="bmi-form">
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            step="0.1"
            min="0"
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="calculate-btn">Calculate</button>
          <button type="button" className="reset-btn" onClick={resetForm}>Reset</button>
        </div>
      </form>

      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
          <div className="bmi-info">
            <p>Underweight: &lt; 18.5</p>
            <p>Normal weight: 18.5 - 24.9</p>
            <p>Overweight: 25 - 29.9</p>
            <p>Obese: ≥ 30</p>
          </div>
        </div>
      )}

      {/* Popup only shows if not normal weight */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Book an Appointment</h3>
            <p>
              Your BMI falls in the <strong>{category}</strong> category.
              It's recommended to consult a health expert.
            </p>
            <div className="popup-buttons">
              <button onClick={() => setShowPopup(false)}>Close</button>
              <button onClick={() => navigate("/appointment")}>Book Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
