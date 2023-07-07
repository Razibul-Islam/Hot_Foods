import React, { useEffect, useState } from 'react';
import Rate from '@mui/icons-material/StarRate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Menus = () => {
    const [menu, setMenu] = useState([]);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-36 marker:'>
            <div className='flex justify-center flex-wrap items-center gap-5'>
                <button className='bg-[#B40303] px-5 py-1 rounded-2xl text-white  border-white shadow shadow-[#B40303]'>All</button>
                {
                    menu.map(cat => <button className='bg-[#B40303] px-5 py-1 rounded-2xl text-white  border-white shadow shadow-[#B40303]'>{cat.name}</button>)
                }
            </div>

            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 p-5 md:gap-10 gap-5 mt-10'>
                {
                    product.map(item => <div className='shadow-2xl rounded overflow-hidden relative text-sm'>
                        <FavoriteBorderIcon className='absolute right-3 text-[#B40303] top-3' />
                        <img className='w-60 mx-auto md:h-40 h-28' src={'https://'+item.image} alt="" />
                        <h4 className='text-center uppercase my-1'>{item.name}</h4>
                        <div className='flex justify-center items-center mb-1'>
                            <Rate className='text-orange-500' />
                            <Rate className='text-orange-500' />
                            <Rate className='text-orange-500' />
                            <Rate />
                            <Rate />
                        </div>
                        <h4 className='text-xl text-center text-[#B40303]'>৳ {item.price}</h4>
                        <button className='w-full py-1 bg-[#B40303] mt-2 uppercase text-white'>Add to cart</button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Menus;