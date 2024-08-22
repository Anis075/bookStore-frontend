"use client";

export default function Card({ cardData }) {
  return (
    <>
      <div className="h-fit mt-8 p-6 dark:text-slate-900 ">
        <div className="card bg-base-100 h-full shadow-xl my-4">
          <figure>
            <img src={cardData.image} alt="Shoes" />
          </figure>
          <div className="card-body justify-between flex-grow-0 ">
            <div className="flex items-center justify-between relative">
              <p className="w-fit ">{cardData.authorName}</p>
              <span className="badge badge-secondary absolute right-0 -top-5 ">
                {cardData.category}
              </span>
            </div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-3">
                Rs.{cardData.price}
              </div>
              <div className="badge badge-outline px-2 py-3 hover:bg-pink-500 hover:text-white cursor-pointer ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
