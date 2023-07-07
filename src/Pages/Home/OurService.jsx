import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import KebabDiningIcon from '@mui/icons-material/KebabDining';

const OurService = () => {
    return (
        <div className='my-30 service'>

            <div className='my-10 max-w-7xl mx-auto'>
                <h4 className='text-3xl font-semibold py-5 uppercase text-[#fff] text-center' >Our Specialty And Service</h4>
                <div className='md:flex justify-center gap-10 py-36 '>
                    <div className='p-10 text-center  w-60 bg-[#ffffff7e] card shadow-lg mx-auto'>
                        <DeliveryDiningIcon className='icon text-[#A00303]' />
                        <h5 className='mt-10'>Fast Delivery</h5>
                    </div>
                    <div className='p-10 text-center  w-60 bg-[#ffffff84] card backdrop:blur-2xl shadow-lg mx-auto mt-5'>
                        <OutdoorGrillIcon className='icon text-[#A00303]' />
                        <h5 className='mt-10'>Expert Chief</h5>
                    </div>
                    <div className='p-10 text-center  w-60 bg-[#ffffff84] card backdrop:blur-2xl shadow-lg mx-auto mt-5'>
                        <TwoWheelerIcon className='icon text-[#A00303]' />
                        <h5 className='mt-10'>Active Rider</h5>
                    </div>
                    <div className='p-10 text-center  w-60 bg-[#ffffff84] card backdrop:blur-2xl shadow-lg mx-auto mt-5'>
                        <KebabDiningIcon className='icon text-[#A00303]' />
                        <h5 className='mt-10'>Healthy Food</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;