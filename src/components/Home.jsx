import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Coursol from "./Coursol";
import Spinner from "./Spiner";
import { Heart } from "lucide-react";

const Home = ({ search, category, favoriteMeals, setFavoriteMeals }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = search
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      : category
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          let mealsData = data.meals;
          if (!search && !category) mealsData = [...mealsData].sort(() => 0.5 - Math.random());
          setMeals(mealsData.slice(0, 10));
        } else {
          setMeals([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [search, category]);

  const toggleFavorite = (meal) => {
    const isFav = favoriteMeals.some((m) => m.idMeal === meal.idMeal);
    if (isFav) {
      setFavoriteMeals(favoriteMeals.filter((m) => m.idMeal !== meal.idMeal));
    } else {
      setFavoriteMeals([...favoriteMeals, meal]);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="bg-gray-900 min-h-screen pt-24 px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-400">
          {search
            ? `🔎 Results for "${search}"`
            : category
            ? `🍽️ Category: ${category}`
            : "🍕 Recipes for You"}
        </h2>

        {meals.length === 0 ? (
          <p className="text-center text-gray-300">No meals found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {meals.map((meal) => {
              const isFav = favoriteMeals.some((m) => m.idMeal === meal.idMeal);
              return (
                <div
                  key={meal.idMeal}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
                >
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />

                  {/* Favorite Heart */}
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => toggleFavorite(meal)}
                  >
                    <Heart
                      size={24}
                      className={isFav ? "text-red-500" : "text-gray-300"}
                    />
                  </button>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{meal.strMeal}</h3>
                    {meal.strArea && meal.strCategory && (
                      <p className="text-sm text-gray-500 mt-1">{meal.strArea} • {meal.strCategory}</p>
                    )}
                    {meal.strInstructions && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{meal.strInstructions}</p>
                    )}
                    <a
                      href={meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition"
                    >
                      View Recipe
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Slide />
      <Coursol />
      <Slide />
    </>
  );
};

export default Home;
