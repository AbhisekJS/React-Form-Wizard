import React, { useState } from "react";
import Step1 from "./MultiStep1";
import Step2 from "./MultiStep2";
import StepR2 from "./MultiStepR2";
import Step3 from "./MultiStep3";
import StepLoginFb from "./LoginFB";
import StepLoginMail from "./LogInEmail";
import AltStep3 from "./MultiAltStep3";
import Step4 from "./MultiStep4";
import Step5 from "./MultiStep5";
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    comments: "",

    business: "",
    usCitizen: "",
    largeCorporation: "",
    takingSurvey: "",
    contractedWithLargeCorporation: "",

    login: "",
    fbLogIn: "",
    mailLogin: ""
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  const reDirect = () => {
    setCurrentStep(3);
  };
  console.log(currentStep);

  if (currentStep === 1) {
    return (
      <Step1
        data={formData}
        handleChange={handleChange}
        next={next}
        formCount
      />
    );
  }

  if (currentStep === 2 && formData.business === "no") {
    return (
      <StepR2
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }
  if (currentStep === 2) {
    return (
      <Step2
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }
  if (currentStep === 3 && formData.login === "yes") {
    return (
      <StepLoginFb
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }
  if (currentStep === 3 && formData.login === "no") {
    return (
      <StepLoginMail
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
        reDirect={reDirect}
      />
    );
  }

  if (currentStep === 3 || formData.mailLogin === "no") {
    return (
      <Step3
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }
  if (currentStep === 3) {
    return (
      <Step3
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }

  if (currentStep === 4 && formData.largeCorporation === "no") {
    return (
      <AltStep3
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <Step4
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }
  if (currentStep === 5) {
    return (
      <Step5
        data={formData}
        handleChange={handleChange}
        next={next}
        back={back}
      />
    );
  }

  if (currentStep) {
    return <Submit data={formData} back={back} />;
  }
};
export default MultiStepForm;
