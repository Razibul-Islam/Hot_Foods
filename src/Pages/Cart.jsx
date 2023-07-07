import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Home/Footer';

const Cart = () => {
    return (
        <div>
            <div className='md:h-96 h-24 about-banner flex justify-center items-center'>
                <div className='flex  justify-center items-center gap-5 text-white'>
                    <Link to='/'>Home</Link>
                    <p>|</p>
                    <Link to='/cart'>Cart</Link>
                </div>
            </div>


            {/* data  */}


            <div className='max-w-4xl mx-auto my-16'> 
                <div className='w-full bg-white shadow flex justify-between items-center my-3'>
                    <img className='w-24 h-24 bg-[#911c1cec]' src="https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png" alt="" />
                    <p>Name : Pizza</p>
                    <p className='px-5'>1 * 3 </p>
                    <p className='px-5'>540 $</p>
                </div>
                <div className='w-full bg-white shadow flex justify-between items-center my-3'>
                    <img className='w-24 h-24 bg-[#911c1cec]' src="https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg" alt="" />
                    <p>Name : Pizza</p>
                    <p className='px-5'>1 * 3 </p>
                    <p className='px-5'>540 $</p>
                </div>
                <div className='w-full bg-white shadow flex justify-between items-center my-3'>
                    <img className='w-24 h-24 bg-[#911c1cec]' src="https://www.pngkit.com/png/full/125-1254324_noodle-bowl-png-maggi.png" alt="" />
                    <p>Name : Pizza</p>
                    <p className='px-5'>1 * 3 </p>
                    <p className='px-5'>540 $</p>
                </div>
                <div className='w-full bg-white shadow flex justify-between items-center my-3'>
                    <img className='w-24 h-24 bg-[#911c1cec]' src="https://www.bhg.com/thmb/OnQix5vIa3np3ao1rICCgKd8wZ4=/1274x0/filters:no_upscale():strip_icc()/buffalo-chicken-pasta-RU335391-85e8c95577354c86a165e098d1c8e2a2.jpg" alt="" />
                    <p>Name : Pizza</p>
                    <p className='px-5'>1 * 3 </p>
                    <p className='px-5'>540 $</p>
                </div>

                <div className='my-10 flex justify-end gap-5'>
                    <button className='bg-[#a11d1d] px-5 py-1 rounded text-white'>Clear</button>
                    <button className='bg-[#a11d1d] px-5 py-1 rounded text-white'>CheckOut</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;