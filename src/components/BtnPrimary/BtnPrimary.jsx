import React from 'react';

const BtnPrimary = ({ btnPrimaryText }) => {
    return (
        <div className='flex flex-col items-center'>
            <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-[3px] border-[#1F2937] text-[#1F2937] text-xl font-medium px-8 uppercase hover:text-[#BB8506] hover:bg-[#1F2937]">
                {btnPrimaryText}
            </button>
        </div>
    );
};

export default BtnPrimary;