import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Banner = () => {
    return (
        <div className='banner-bg md:h-[100vh] w-full p-5'>
            <div className='md:flex justify-between items-center max-w-7xl mx-auto'>
                <div className='md:w-1/2'>
                   
                    <div className='my-5 flex'>
                        <input type="text" className='p-2 w-full rounded-full px-5 focus:outline-red-500' placeholder='Find your choice ?' />
                        <button className='p-2 rounded-full px-5 focus:outline-red-500 bg-[#D7DBDE] text-[#8F0505] ml-[-3rem]'>Find</button>
                    </div>
                    <h1 className='md:text-6xl text-3xl uppercase my-5 block font-extrabold title text-[#ffffff]'>All your favorite foods hare.</h1>
                    <button className='bg-[#D7DADD] flex gap-3 mt-5 px-5 py-2  rounded-sm ring-offset-slate-400  text-[#B00303] border border-white shadow-xl my-5'>Order Now <TrendingFlatIcon className='animate-ping'></TrendingFlatIcon></button>
                </div>
                <img src="https://freepngimg.com/save/139206-food-plate-top-snack-view/528x525" alt="" />
            </div>
        </div>
    );
};

export default Banner;