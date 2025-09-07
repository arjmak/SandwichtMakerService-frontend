import React, { useState } from 'react';

const SelectDropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="w-64">
            <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">
                Select an option:
            </label>
            <select
                id="options"
                value={selectedOption}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
                <option value="" disabled>Select your option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 8l4.5 4.5 4.5-4.5H5.5z"/>
                </svg>
            </div>
        </div>
    );
};

export default SelectDropdown;