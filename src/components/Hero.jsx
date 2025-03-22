import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/restaurant-hero.jpg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-black bg-opacity-70 text-white z-10">
        
        <h1 className="text-xl md:text-3xl font-bold">🍴 RestoHub</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <a href="#menu" className="hover:text-orange-400 transition-all">Menu</a>
          <a href="#testimonials" className="hover:text-orange-400 transition-all">Testimonials</a>
          <a href="#contact" className="hover:text-orange-400 transition-all">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-sm"
          >
            {isOpen ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </motion.svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-14 left-0 w-full bg-black bg-opacity-70 z-20"
          >
            <div className="flex flex-col items-center py-4">
              <a
                href="#menu"
                className="text-white text-lg py-2 hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </a>
              <a
                href="#testimonials"
                className="text-white text-lg py-2 hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-white text-lg py-2 hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
        
        <motion.h1
          className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Savor the Flavor 🍲
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-xl lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Delicious meals, unforgettable experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <span className="absolute inset-0 bg-orange-400 opacity-20 rounded-full animate-ping"></span>
          Explore Menu
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 animate-bounce hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="#menu" className="text-gray-300 font-medium">↓ Scroll Down</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;