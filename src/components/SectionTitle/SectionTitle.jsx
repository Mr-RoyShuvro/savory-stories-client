import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-3/4 md:w-4/12 mx-auto text-center pb-10'>
            <h3 className='text-[#D99904] text-xl pb-4'>---{subHeading}---</h3>
            <h1 className='text-[#151515] text-[40px] border-t-[#E8E8E8] border-t-4 pt-5 border-b-[#E8E8E8] border-b-4 pb-6 uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;