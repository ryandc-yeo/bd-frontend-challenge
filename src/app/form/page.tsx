/* eslint-disable react/jsx-key */
"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
} from "react-icons/pi";
import { MdOutlineHorizontalRule } from "react-icons/md";

import React, { useState, FormEvent } from "react";
import Account from "@/app/components/account";
import Address from "@/app/components/address";
import Preferences from "@/app/components/preferences";
import MultiStepForm from "@/app/components/multistep";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: string;
  company: string;
  phoneNumber: string;
  wantsNotifications: boolean;
  shareInformation: boolean;
  notificationPreferences: "email" | "text";
};

const userData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  zipCode: "",
  company: "",
  phoneNumber: "",
  wantsNotifications: false,
  shareInformation: false,
  notificationPreferences: "email",
};

const Form = () => {
  const [data, setData] = useState(userData);
  const stepName = ["Account", "Address", "Preferences"];

  const update = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const { back, next, submit, setStep, currStep, steps, step } = MultiStepForm([
    <Account {...data} updateFields={update} />,
    <Address {...data} updateFields={update} />,
    <Preferences {...data} updateFields={update} />,
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (currStep === steps.length - 1) {
      console.log(data);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Error:", response.status);
      }
    } else {
      return next();
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center text-gray-700">
      <div className="relative bg-slate-200 max-w-fit p-3">
        <h1 className="text-3xl text-center font-medium pt-2">
          {stepName[currStep]}
        </h1>
        <form className="mt-5 bg-white rounded-lg p-5" onSubmit={handleSubmit}>
          <div className="flex justify-between top-2 text-center text-5xl bg-gray-100 rounded-lg px-10 py-4 mb-5">
            {/* {currStep + 1} / {steps.length} */}
            <PiNumberCircleOne
              className={`${currStep == 0 ? "text-yellow-400" : ""}`}
            />
            <MdOutlineHorizontalRule />
            <PiNumberCircleTwo
              className={`${currStep == 1 ? "text-yellow-400" : ""}`}
            />
            <MdOutlineHorizontalRule />
            <PiNumberCircleThree
              className={`${currStep == 2 ? "text-yellow-400" : ""}`}
            />
          </div>
          {step}
          <div className="flex justify-between gap-2 mt-5 text-md font-light">
            {currStep === 0 ? (
              <div></div>
            ) : (
              <button
                type="button"
                className="border border-gray-400 flex gap-2 items-center px-6 py-1 rounded-lg text-gray-500 hover:bg-gray-400 hover:text-white transition-all"
                onClick={back}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </button>
            )}
            {currStep === steps.length - 1 ? (
              <button
                type="submit"
                className="bg-gray-400 text-white rounded-lg px-6 py-1 hover:bg-white hover:text-gray-500 hover:outline transition-all"
              >
                Register!
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gray-400 text-white rounded-lg px-6 py-1 hover:bg-white hover:text-gray-500 hover:outline transition-all"
              >
                Next Step <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
