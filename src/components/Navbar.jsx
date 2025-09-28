import React, { useState } from "react";
import { Menu, X, Search, Heart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ search, setSearch, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    setSearch("");
    setIsCategoriesOpen(false);
    setIsOpen(false);
    navigate("/");
  };

  const linkClass = "text-white hover:text-red-400 transition font-medium";
  const activeClass = "text-red-400 font-bold underline";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-400">HungryHub</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            onClick={() => {
              setSearch("");
              setCategory("");
              setIsOpen(false);
            }}
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Contact
          </NavLink>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="text-white hover:text-red-400"
            >
              Categories
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-lg shadow-lg w-40">
                {["Seafood", "Beef", "Chicken", "Vegetarian"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes..."
              className="px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-gray-600 w-5 h-5" />
          </div>

          {/* Favorites Icon */}
          <NavLink to="/favorites" className="ml-2 text-red-500 hover:text-red-400">
            <Heart size={28} />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-white px-6 py-4 flex flex-col space-y-3 overflow-hidden"
          >
            <NavLink
              to="/"
              onClick={() => {
                setSearch("");
                setCategory("");
                setIsOpen(false);
              }}
              className={({ isActive }) =>
                `${isActive ? activeClass : linkClass} block w-full`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${isActive ? activeClass : linkClass} block w-full`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${isActive ? activeClass : linkClass} block w-full`
              }
            >
              Contact
            </NavLink>

            {/* Mobile Categories */}
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="block w-full text-left hover:text-red-400"
            >
              Categories
            </button>
            {isCategoriesOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                {["Seafood", "Beef", "Chicken", "Vegetarian"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="block w-full text-left hover:text-red-400"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile Search */}
            <div className="relative mt-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search recipes..."
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-gray-600 w-5 h-5" />
            </div>

            {/* Mobile Favorites */}
            <NavLink to="/favorites" className="mt-3 text-red-500 hover:text-red-400">
              <Heart size={28} />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
