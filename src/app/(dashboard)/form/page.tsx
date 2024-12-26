"use client";

import InputField from "@/components/InputField";
import Rating from "@/components/Rating";
import React, { useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    batch: "",
    days: "",
    month: "",
    speed: 0,
    stamina: 0,
    flexibility: 0,
    strength: 0,
    balanceCoordination: 0,
    overallAbility: 0,
    passing: 0,
    receiving: 0,
    dribbling: 0,
    finishing: 0,
    overallTechnicalAbility: 0,
    overallTacticalAbility: 0,
    attackingAttitude: 0,
    supportPlay: 0,
    defendingAttitude: 0,
    transition: 0,
    confidence: 0,
    focus: 0,
    coachability: 0,
    attitude: 0,
    punctuality: 0,
    areaOfFocus: "",
    homeWork: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (name: string, value: number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-around">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-4 justify-around mt-4">
          <InputField
            label="Venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
          />

          <InputField
            label="Days"
            name="days"
            value={formData.days}
            onChange={handleChange}
          />
          <InputField
            label="Month"
            name="month"
            value={formData.month}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold ">PHYSICAL</h2>
          <div className="flex gap-16 mt-3 justify-around">
            <Rating
              label="Speed"
              value={formData.speed}
              onChange={(value) => handleRatingChange("speed", value)}
            />
            <Rating
              label="Stamina"
              value={formData.stamina}
              onChange={(value) => handleRatingChange("stamina", value)}
            />
            <Rating
              label="Flexibility"
              value={formData.flexibility}
              onChange={(value) => handleRatingChange("flexibility", value)}
            />
          </div>
          <div className="flex gap-16 mt-3 justify-around">
            <Rating
              label="Strength"
              value={formData.strength}
              onChange={(value) => handleRatingChange("strength", value)}
            />
            <Rating
              label="Balance & Coordination"
              value={formData.balanceCoordination}
              onChange={(value) =>
                handleRatingChange("balanceCoordination", value)
              }
            />
            <Rating
              label="Overall Ability"
              value={formData.overallAbility}
              onChange={(value) => handleRatingChange("overallAbility", value)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold ">TECHNICAL</h2>
          <div className="flex gap-16 mt-3 justify-around">
            <Rating
              label="Passing"
              value={formData.passing}
              onChange={(value) => handleRatingChange("passing", value)}
            />
            <Rating
              label="Receiving"
              value={formData.receiving}
              onChange={(value) => handleRatingChange("receiving", value)}
            />
            <Rating
              label="Dribbling"
              value={formData.dribbling}
              onChange={(value) => handleRatingChange("dribbling", value)}
            />
          </div>
          <div className="flex gap-16 mt-3">
            <Rating
              label="Finishing"
              value={formData.finishing}
              onChange={(value) => handleRatingChange("finishing", value)}
            />
            <Rating
              label="Overall Ability"
              value={formData.overallTechnicalAbility}
              onChange={(value) =>
                handleRatingChange("overallTechnicalAbility", value)
              }
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold ">TACTICAL</h2>
          <div className="flex gap-16 mt-3 justify-around">
            <Rating
              label="Attacking Attitude"
              value={formData.attackingAttitude}
              onChange={(value) =>
                handleRatingChange("attackingAttitude", value)
              }
            />
            <Rating
              label="Support Play"
              value={formData.supportPlay}
              onChange={(value) => handleRatingChange("supportPlay", value)}
            />
            <Rating
              label="Defending Attitude"
              value={formData.defendingAttitude}
              onChange={(value) =>
                handleRatingChange("defendingAttitude", value)
              }
            />
          </div>
          <div className="flex gap-16 mt-3">
            <Rating
              label="Transition"
              value={formData.transition}
              onChange={(value) => handleRatingChange("transition", value)}
            />
            <Rating
              label="Overall Ability"
              value={formData.overallTacticalAbility}
              onChange={(value) =>
                handleRatingChange("overallTacticalAbility", value)
              }
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold ">SOCIAL/PSYCHOLOGICAL</h2>
          <div className="flex gap-16 mt-3 justify-around">
            <Rating
              label="Confidence"
              value={formData.confidence}
              onChange={(value) => handleRatingChange("confidence", value)}
            />
            <Rating
              label="Focus"
              value={formData.focus}
              onChange={(value) => handleRatingChange("focus", value)}
            />
            <Rating
              label="Attitude"
              value={formData.attitude}
              onChange={(value) => handleRatingChange("attitude", value)}
            />
          </div>
          <div className="flex gap-16 mt-3">
            <Rating
              label="Punctuality"
              value={formData.punctuality}
              onChange={(value) => handleRatingChange("punctuality", value)}
            />
            <Rating
              label="Coachability"
              value={formData.coachability}
              onChange={(value) => handleRatingChange("coachability", value)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold">AREA OF FOCUS</h2>
          <textarea
            name="areaOfFocus"
            value={formData.areaOfFocus}
            onChange={handleChange}
            className="mt-3 p-2 border border-gray-300 rounded w-full h-32"
            placeholder="Enter the area of focus here..."
          />
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold">HOME WORK</h2>
          <textarea
            name="homeWork"
            value={formData.homeWork}
            onChange={handleChange}
            className="mt-3 p-2 border border-gray-300 rounded w-full h-32"
            placeholder="Enter the home work here..."
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
