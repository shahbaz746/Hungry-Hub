import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slide = () => {
  const [meals, setMeals] = useState([]);
  const sliderRef = useRef(null);

  // Fetch random meals
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        if (data.meals) {
          // shuffle and take 15
          let randomMeals = [...data.meals].sort(() => 0.5 - Math.random());
          setMeals(randomMeals.slice(0, 15));
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-gray-900 py-10 px-4">
      

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="min-w-[200px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {meal.strMeal}
              </h3>
              <a
                href={
                  meal.strSource ||
                  `https://www.themealdb.com/meal/${meal.idMeal}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slide;
