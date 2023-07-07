import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div class=" bg-[#920303] mt-20">
                <div class="max-w-2xl mx-auto text-white py-10">
                    <div class="text-center">
                        <h3 class="text-3xl mb-3"> Download our fitness app </h3>
                        <p> Stay fit. All day, every day. </p>
                        <div class="flex justify-center my-10">
                            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                                    <div class="text-left ml-3">
                                        <p class='text-xs  '>Download on </p>
                                        <p class="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm ">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Hot Foods, 2021. Develop By MD. Shamim Islam</p>
                        <div class="order-1 md:order-2">
                            <Link to='/admin' class="px-2">Admin</Link>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;