import React from 'react';

const Cover = ({ img, title, subTitle }) => {
    return (
        <div
            className="hero h-[600px]"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="hero-overlay bg-opacity-60 h-80 w-3/4 "></div>
            <div className="hero-content text-neutral-content text-center ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
                    <p className="mb-5 uppercase text-white">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;