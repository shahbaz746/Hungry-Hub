import React, { useEffect, useState } from "react";

const Coursol = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        if (data.meals) {
          let randomMeals = [...data.meals].sort(() => 0.5 - Math.random());
          setMeals(randomMeals.slice(0, 6)); // pick only 6 recipes
        }
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-red-400 mb-10">
        🍲 Featured Recipes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition duration-300"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {meal.strMeal}
              </h3>
              {meal.strArea && meal.strCategory && (
                <p className="text-gray-500 text-lg mb-4">
                  {meal.strArea} • {meal.strCategory}
                </p>
              )}
              <a
                href={
                  meal.strSource ||
                  `https://www.themealdb.com/meal/${meal.idMeal}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg text-white bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 transition"
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

export default Coursol;

