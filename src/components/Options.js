import React from 'react';
import '../css/options.css'
const Options = ({ options, onSelectOption, isAnswerable }) => {

   {/*Seçeneklerin hangi şık olduğunu belirleyen fonksiyon*/} 
    const getOptionLabel = (index) => {
        switch (index % 4) {
            case 0:
                return 'a';
            case 1:
                return 'b';
            case 2:
                return 'c';
            case 3:
                return 'd';
            default:
                return '';
        }
    };
    return (
        
        <div id="options">
            {options.map((option, index) => (
                <div>
                    <button
                        key={index}
                        className="option"
                        disabled={!isAnswerable}
                        onClick={() => onSelectOption(option)}
                    >
                       <span>{getOptionLabel(index)} - ) </span>   {option}
                    </button>
                </div>

            ))}
        </div>
    );
};

export default Options;
