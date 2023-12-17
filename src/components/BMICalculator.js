"use client";
import React, { useState, useEffect } from "react";
import TitleNav from "./TitleNav";

const BMICalculator = () => {
  const [weight, setWeight] = useState(65); // 65kg
  const [height, setHeight] = useState(162.56); // 5'4''
  const [bmi, setBMI] = useState(24.6); // BMI result 24.6
  const [result, setResult] = useState("Normal weight"); // Normal weight

  const calculate = () => {
    if (weight === undefined || weight.length < 1) {
      setWeight(0);
    }
    if (height === undefined || height.length < 1) {
      setHeight(0);
    }

    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM <= 0) {
      setBMI(""); // Reset BMI if input is invalid
      return;
    }

    const calculatedBMI = weightInKg / (heightInM * heightInM);
    setBMI(calculatedBMI.toFixed(1));

    if (bmi < 18.5) {
      setResult("Underweight");
    } else if (bmi < 25) {
      setResult("Normal weight");
    } else if (bmi < 30) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
  };
  useEffect(() => {
    calculate();
  }, [weight, height, bmi, result]);
  return (
    <>
      {/* max-w-md w-screen mx-auto text-left border border-gray-200 rounded-md p-5 shadow-lg */}
      <div className="box-container-shadow">
        <TitleNav title="BMI Calculator" />
        <div className="mb-3">
          <label
            htmlFor="weight"
            className="block mb-3 font-medium text-gray-700">
            Weight
          </label>

          <div className="relative">
            <input
              id="weight"
              type="text"
              value={weight || ""}
              onChange={(e) => setWeight(e.target.value)}
              className="tw-field "
            />
            <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
              <span className="text-gray-400 sm:text-base">kg</span>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="height"
            className="block mb-3 font-medium text-gray-700">
            Height
          </label>
          <div className="relative">
            <input
              id="height"
              type="text"
              value={height || ""}
              onChange={(e) => setHeight(e.target.value)}
              className="tw-field"
            />
            <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-3">
              <span className="text-gray-400 sm:text-base">cm</span>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="bmiVal"
            className="block mb-3 font-medium text-gray-700">
            BMI
          </label>
          <input
            id="bmiVal"
            type="text"
            value={bmi}
            className="tw-field text-indigo-600"
            onChange={(e) => {
              return null;
            }}
          />
        </div>
        <p className="mb-3">
          <em className="italic text-gray-500 text-sm ">{result}</em>
        </p>
      </div>
    </>
  );
};

export default BMICalculator;
