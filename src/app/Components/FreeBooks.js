"use client";
import Card from "../Components/Card";
import Data from "../../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FreeBooks() {
  const freeBook = Data.filter((d) => d.category === "Free");
  console.log(freeBook);

  return (
    <>
      <div className="box mt-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Offered Free Books</h1>
          <p>
            Explore our collection of free books, carefully selected to ignite
            your passion for reading. Download and enjoy these titles at no
            cost, anytime, anywhere.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            modules={[Pagination, Autoplay]}
            className="h-full w-full"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {freeBook.map((cardData, index) => (
              <SwiperSlide key={index}>
                <Card cardData={cardData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr />
    </>
  );
}
