import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="box h-full w-full">
        {/* <div className="section w-full h-full">
          <Image
            src={" /bgImage1.webp"}
            alt="Banner Image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div> */}
        <div className="section w-full ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold text-center">
              Shop, Read, and Enjoy Thousands of Books <br />
              <span className="text-pink-500">Anytime, Anywhere Online!!!</span>
            </h1>
            <p className="text-xl text-justify">
              Browse our vast collection of books, purchase with ease, and start
              reading instantly on any device. Your gateway to endless stories
              and knowledge, accessible anytime, anywhere.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Submit</button>
        </div>
      </div>
      <hr />
    </>
  );
}
