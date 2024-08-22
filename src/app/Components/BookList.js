import Data from "../../../data.json";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function BookList() {
  return (
    <>
      <Navbar />
      <div className="box">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Explore, Discover, and Enjoy Your Next
            <span className="text-pink-500"> Favorite Book</span> 📚
          </h1>
          <p className="mt-12 text-justify md:text-center">
            Browse our complete collection of books, showcasing a wide variety
            of genres, authors, and titles. Whether you're into fiction,
            non-fiction, or anything in between, you'll find something that
            captivates your interest.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Data.map((cardData) => (
            <Card cardData={cardData} key={cardData.id} />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
