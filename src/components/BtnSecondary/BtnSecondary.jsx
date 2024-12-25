import React from 'react';

const BtnSecondary = ({btnSecondaryText}) => {
    return (
        <div className='flex flex-col items-center'>
            <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-[3px] border-[#BB8506] rounded-lg text-[#BB8506] text-xl font-medium px-8 uppercase hover:border-[#BB8506] hover:text-[#BB8506] hover:bg-[#1F2937]">
                {btnSecondaryText}
            </button>
        </div>
    );
};

export default BtnSecondary;