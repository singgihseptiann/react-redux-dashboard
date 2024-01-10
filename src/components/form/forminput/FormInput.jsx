// FormInput.js
import React, { useState } from "react";
import ReusableFormInput from "../ReusableFormInput";
import HorizontalTabs from "../../tabs/Tabs";

const FormInput = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleTabChange = (stepKey) => {
    setCurrentStep(stepKey);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (data) => {
    console.log("Data saved:", data);
    // Add your logic for handling the next step
  };

  const steps = [
    { title: "Step 1", fieldName: "field1" },
    { title: "Step 2", fieldName: "field2" },
    { title: "Step 3", fieldName: "field3" },
    { title: "Step 4", fieldName: "field4" },
  ];

  return (
    <div>
      <HorizontalTabs
        steps={steps}
        currentStep={currentStep}
        handleTabChange={handleTabChange}
      />

      <div>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: index === currentStep ? "block" : "none" }}
          >
            <h2>{step.title}</h2>
            <ReusableFormInput
              label={`Field ${index + 1}`}
              type="text"
              name={step.fieldName}
              value={formData[step.fieldName]}
              onChange={handleChange}
              onNext={handleNext}
              showButton={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormInput;
