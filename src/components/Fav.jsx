import React from "react";
import { Heart } from "lucide-react";

const Fav = ({ favoriteMeals, setFavoriteMeals }) => {
  const removeFavorite = (mealId) => {
    setFavoriteMeals(favoriteMeals.filter((meal) => meal.idMeal !== mealId));
  };

  if (!favoriteMeals || favoriteMeals.length === 0) {
    return (
      <div className="bg-gray-900 min-h-screen pt-24 px-6">
        <h2 className="text-3xl font-bold text-red-400 text-center mb-6">❤️ Your Favorites</h2>
        <p className="text-gray-300 text-center">No favorite recipes yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-24 px-6">
      <h2 className="text-3xl font-bold text-red-400 text-center mb-6">❤️ Your Favorites</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {favoriteMeals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />

            {/* Remove Favorite Heart */}
            <button
              className="absolute top-2 right-2"
              onClick={() => removeFavorite(meal.idMeal)}
            >
              <Heart size={24} className="text-red-500" />
            </button>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{meal.strMeal}</h3>
              {meal.strArea && meal.strCategory && (
                <p className="text-sm text-gray-500 mt-1">{meal.strArea} • {meal.strCategory}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Fav;
