import React from 'react';

const Open = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h3 className='text-3xl font-bold my-5' > Opening Hour </h3>
            <hr />

            <div className='my-5 md:grid grid-cols-2 gap-10'>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Sun</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Mon</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Tues</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Wed</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Thurs</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Fri</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
                <div className="info_item my-3">
                    <span className="info_item_img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="info_item_content grid grid-cols-4 md:text-xl   text-sm">
                        <span>Satur</span>
                        <span>8  AM </span>
                        <span>-</span>
                        <span>10  PM</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Open;