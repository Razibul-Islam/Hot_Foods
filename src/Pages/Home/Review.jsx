import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function Review() {
    return (
        <section className="mt-20 ">
            <h4 className='text-3xl text-[#B20303] font-bold text-center my-10 px-5'>Our Customer Reviews</h4>
            <main className="review-bg">
            <div className="py-20 first-letter:max-w-7xl mx-auto">
           
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide  className="swiper-div">
                   <div className="p-5 border rounded-xl">
                      <p className="text-sm text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet quibusdam nam eos quidem, facilis dolor natus molestias eaque magnam in temporibu ...</p>
                     <div className="flex justify-start gap-5 items-center py-3">
                     <img className="user-img rounded-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                     <p>Jhon Doe</p>
                     </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide  className="swiper-div">
                   <div className="p-5 border rounded-xl">
                      <p className="text-sm text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet quibusdam nam eos quidem, facilis dolor natus molestias eaque magnam in temporibu ...</p>
                     <div className="flex justify-start gap-5 items-center py-3">
                     <img className="user-img rounded-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                     <p>Jhon Doe</p>
                     </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide  className="swiper-div">
                   <div className="p-5 border rounded-xl">
                      <p className="text-sm text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet quibusdam nam eos quidem, facilis dolor natus molestias eaque magnam in temporibu ...</p>
                     <div className="flex justify-start gap-5 items-center py-3">
                     <img className="user-img rounded-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                     <p>Jhon Doe</p>
                     </div>
                   </div>
                </SwiperSlide>

            </Swiper>
        </div>
        </main>
        </section>
    );
}







