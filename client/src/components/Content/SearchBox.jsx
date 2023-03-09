import React, { useState } from 'react';

const SearchBox = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };

    return (
        <div className="relative">
            <label htmlFor="company-website" className="block lg:text-base font-medium text-gray-700 mb-2 sm1:text-sm">
                รหัสอุปกรณ์
            </label>
            <input
                type="text"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
            />
            {filteredData.length !== 0 && (
                <button
                    className="absolute top-0 right-0 mt-3 mr-4 text-gray-600"
                    onClick={clearInput}
                >
                    Clear
                </button>
            )}
            {filteredData.length !== 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {filteredData.map((value, key) => {
                        return (
                            <div
                                key={key}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                    setFilteredData([]);
                                    setWordEntered(value);
                                }}
                            >
                                <p>{value}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchBox;
