import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Home/Footer";

const Gallery = () => {
  return (
    <div>
      <div className="md:h-96 h-24 about-banner flex justify-center items-center">
        <div className="flex  justify-center items-center gap-5 text-white">
          <Link to="/">Home</Link>
          <p>|</p>
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                className="rounded shadow-md"
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg"
                alt=""
              />
            </div>
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                className="rounded shadow-md"
                src="https://media.istockphoto.com/id/1160577908/photo/two-meat-plate-with-salad-leaves-and-summer-salad-in-waiters-hand.jpg?s=612x612&w=0&k=20&c=oEkvTjNVSBSwXiFoQnEPh1yGIKFwGws-TeJbRN82Ag4="
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://media.istockphoto.com/id/502840530/photo/luxury-restaurant-table-on-sunset.jpg?s=612x612&w=0&k=20&c=KMVfVojQ0UmscMmj1S-Hd2trPlw2xEXpOyn9OyWT0Mw="
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://media.istockphoto.com/id/540590170/photo/restaurant-table-with-sushi-plate-and-champagne-glasses.jpg?s=612x612&w=0&k=20&c=NVgVaI4pnRSN_jixNeIor6RMQ-p4w36sGaXvZ5eqBBQ="
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://t3.ftcdn.net/jpg/03/02/00/02/360_F_302000253_7QLZiEIkLZiJn9iVHMAf4Prfu49Eno6l.jpg"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://us.123rf.com/450wm/rawpixel/rawpixel1702/rawpixel170201177/70696966-women-communication-dinner-together-concept.jpg?ver=6"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://us.123rf.com/450wm/dolgachov/dolgachov1705/dolgachov170501894/78233992-technology-lifestyle-and-people-concept-happy-friends-with-smartphone-having-dinner-and.jpg?ver=6"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
