import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Coursol from "./Coursol";
import Spinner from "./Spiner";

const Home = ({ search, category }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from API whenever search or category changes
  useEffect(() => {
    let url = "";

    if (search) {
      // Search meals by name
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    } else if (category) {
      // Filter meals by category
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    } else {
      // Default → show random meals
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    }

    if (url) {
      setLoading(true); // start spinner
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals) {
            // Shuffle randomly if no search/category
            let mealsData = data.meals;
            if (!search && !category) {
              mealsData = [...mealsData].sort(() => 0.5 - Math.random());
            }
            setMeals(mealsData.slice(0, 10)); // show only 10 dishes
          } else {
            setMeals([]);
          }
          setLoading(false); // stop spinner
        })
        .catch((err) => {
          console.error(err);
          setLoading(false); // stop spinner on error
        });
    }
  }, [search, category]);

  return (
    <>
      {/* Overlay spinner */}
      {loading && <Spinner />}

      <div className="bg-gray-900 min-h-screen pt-24 px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-400">
          {search
            ? `🔎 Results for "${search}"`
            : category
            ? `🍽️ Category: ${category}`
            : "🍕 Recipes for You"}
        </h2>

        {/* Meals Grid */}
        {meals.length === 0 ? (
          <p className="text-center text-gray-300">No meals found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  {/* Dish Name */}
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {meal.strMeal}
                  </h3>

                  {/* Category + Area (only when available) */}
                  {meal.strArea && meal.strCategory && (
                    <p className="text-sm text-gray-500 mt-1">
                      {meal.strArea} • {meal.strCategory}
                    </p>
                  )}

                  {/* Mini description (only available when searching, not filter) */}
                  {meal.strInstructions && (
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {meal.strInstructions}
                    </p>
                  )}

                  {/* Button */}
                  <a
                    href={
                      meal.strSource ||
                      `https://www.themealdb.com/meal/${meal.idMeal}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Extra Sections */}
      <Slide />
      <Coursol />
      <Slide />
    </>
  );
};

export default Home;
