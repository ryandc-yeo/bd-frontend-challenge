import { useState, ReactElement } from "react";

const MultiStepForm = (steps: ReactElement[]) => {
  const [currStep, setCurrStep] = useState(0);

  const back = () => {
    setCurrStep((i) => {
      if (i <= 0) {
        return i;
      } else {
        return i - 1;
      }
    });
  };

  const next = () => {
    setCurrStep((i) => {
      if (i >= steps.length - 1) {
        return i;
      } else {
        return i + 1;
      }
    });
  };

  const submit = () => {};

  const setStep = (i: number) => {
    setCurrStep(i);
  };

  return {
    back,
    next,
    submit,
    setStep,
    currStep,
    steps,
    step: steps[currStep],
  };
};

export default MultiStepForm;
