'use client'
import React, { useRef } from "react";
import { User, Flag, Home } from "lucide-react";
import html2pdf from "html2pdf.js";

interface PlayerData {
    name: string;
    venue: string;
    batch: string;
    days: string;
    month: string;
    speed: number;
    stamina: number;
    flexibility: number;
    strength: number;
    balanceCoordination: number;
    overallAbility: number;
    passing: number;
    receiving: number;
    dribbling: number;
    finishing: number;
    overallTechnicalAbility: number;
    overallTacticalAbility: number;
    attackingAttitude: number;
    supportPlay: number;
    defendingAttitude: number;
    transition: number;
    confidence: number;
    focus: number;
    coachability: number;
    attitude: number;
    punctuality: number;
    areaOfFocus: string;
    homeWork: string;
}

interface ProgressCardProps {
    data: PlayerData;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ data }) => {
        const cardRef = useRef<HTMLDivElement>(null);
            
        const handleDownloadCanvas = () => {
            if (cardRef.current) {
            const element = cardRef.current;
            const opt = {
                filename: `${data.name}.pdf`,
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
            }
        };

    return (
        <div>
            <div ref={cardRef} className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">
                            {data.name || "Player's Name"}
                        </h1>
                        <p className="text-sm text-gray-600">
                            Batch: {data.batch || "N/A"}
                        </p>
                    </div>
                    <User className="w-8 h-8 text-blue-500" />
                </div>

                {/* Venue and Schedule */}
                <div className="mb-4">
                    <p className="text-gray-700">
                        <Flag className="inline w-5 h-5 mr-2 text-green-500" />
                        Venue: {data.venue || "Not Specified"}
                    </p>
                    <p className="text-gray-700">
                        <Home className="inline w-5 h-5 mr-2 text-purple-500" />
                        Days: {data.days || "Not Specified"},{" "}
                        {data.month || "Unknown Month"}
                    </p>
                </div>

                {/* Physical Attributes */}
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Physical Attributes
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                        { label: "Speed", value: data.speed },
                        { label: "Stamina", value: data.stamina },
                        { label: "Flexibility", value: data.flexibility },
                        { label: "Strength", value: data.strength },
                        {
                            label: "Balance & Coordination",
                            value: data.balanceCoordination,
                        },
                        { label: "Overall Ability", value: data.overallAbility },
                    ].map((attr) => (
                        <div key={attr.label} className="flex justify-between">
                            <span>{attr.label}</span>
                            <span className="font-semibold">{attr.value}</span>
                        </div>
                    ))}
                </div>

                {/* Technical Skills */}
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mt-6">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                        { label: "Passing", value: data.passing },
                        { label: "Receiving", value: data.receiving },
                        { label: "Dribbling", value: data.dribbling },
                        { label: "Finishing", value: data.finishing },
                        {
                            label: "Overall Technical Ability",
                            value: data.overallTechnicalAbility,
                        },
                    ].map((skill) => (
                        <div key={skill.label} className="flex justify-between">
                            <span>{skill.label}</span>
                            <span className="font-semibold">{skill.value}</span>
                        </div>
                    ))}
                </div>

                {/* Tactical Abilities */}
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mt-6">
                    Tactical Abilities
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                        { label: "Attacking Attitude", value: data.attackingAttitude },
                        { label: "Support Play", value: data.supportPlay },
                        { label: "Defending Attitude", value: data.defendingAttitude },
                        { label: "Transition", value: data.transition },
                        {
                            label: "Overall Tactical Ability",
                            value: data.overallTacticalAbility,
                        },
                    ].map((tactical) => (
                        <div key={tactical.label} className="flex justify-between">
                            <span>{tactical.label}</span>
                            <span className="font-semibold">{tactical.value}</span>
                        </div>
                    ))}
                </div>

                {/* Attitude & Behavior */}
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mt-6">
                    Attitude & Behavior
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                        { label: "Confidence", value: data.confidence },
                        { label: "Focus", value: data.focus },
                        { label: "Coachability", value: data.coachability },
                        { label: "Attitude", value: data.attitude },
                        { label: "Punctuality", value: data.punctuality },
                    ].map((behavior) => (
                        <div key={behavior.label} className="flex justify-between">
                            <span>{behavior.label}</span>
                            <span className="font-semibold">{behavior.value}</span>
                        </div>
                    ))}
                </div>

                {/* Area of Focus and Homework */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">Area of Focus</h2>
                    <p className="text-gray-700 mt-2">
                        {data.areaOfFocus || "Not Specified"}
                    </p>

                    <h2 className="text-lg font-semibold text-gray-800 mt-4">Homework</h2>
                    <p className="text-gray-700 mt-2">
                        {data.homeWork || "Not Specified"}
                    </p>
                </div>
            </div>

            <button
                onClick={handleDownloadCanvas}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Download PDF
            </button>
        </div>
    );
};

export default ProgressCard;
