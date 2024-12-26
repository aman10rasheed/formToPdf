import React from 'react';

type Props = {
    label: string; // The label for the rating
    value: number; // Current rating value
    maxRating?: number; // Maximum number of stars/ratings (default: 5)
    onChange: (value: number) => void; // Function to update the rating
    isValid?: boolean; // Validation state for the rating
    errorMessage?: string; // Error message to display if invalid
};

const Rating = ({
    label,
    value,
    maxRating = 5,
    onChange,
}: Props) => {
    return (
        <div className='flex gap-2 items-center'>
            <label className="block w-24 text-sm font-medium text-gray-700">{label}</label>
            <div className="flex gap-1 items-center mt-1">
                {[...Array(maxRating)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.preventDefault();
                                onChange(ratingValue);
                            }}
                            className={`${
                                ratingValue === value ? 'bg-green-500' : 'bg-gray-300'
                            } w-8 h-8 rounded-full text-white font-bold flex items-center justify-center`}
                        >
                            {ratingValue}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Rating;