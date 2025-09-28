import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privecypolicy from './components/Privecypolicy';
import Tremandconditions from './components/Tremandconditions';
import Fav from './components/Fav';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [favoriteMeals, setFavoriteMeals] = useState(() => {
    // Load favorites from localStorage on app start
    const saved = localStorage.getItem("favoriteMeals");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setCategory={setCategory} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              category={category}
              favoriteMeals={favoriteMeals}
              setFavoriteMeals={setFavoriteMeals}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privecypolicy />} />
        <Route path="/terms" element={<Tremandconditions />} />
        <Route
          path="/favorites"
          element={
            <Fav
              favoriteMeals={favoriteMeals}
              setFavoriteMeals={setFavoriteMeals}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
