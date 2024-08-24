"use client";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
// import Data from "../../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FreeBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const freeBook = book.filter((d) => d.category === "Free");
  // console.log(freeBook);

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
