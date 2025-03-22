import { motion } from "framer-motion";
import heroImage from "../assets/restaurant-hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-black bg-opacity-70 text-white z-10">
        <h1 className="text-3xl font-bold">🍴 RestoHub</h1>
        <div className="space-x-8">
          <a href="#menu" className="hover:text-orange-400 transition-all">Menu</a>
          <a href="#testimonials" className="hover:text-orange-400 transition-all">Testimonials</a>
          <a href="#contact" className="hover:text-orange-400 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Savor the Flavor 🍲
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Delicious meals, unforgettable experiences.
        </motion.p>

        {/* CTA Button with Glow Effect */}
        <motion.button
          className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <span className="absolute inset-0 bg-orange-400 opacity-20 rounded-full animate-ping"></span>
         Explore Menu
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 animate-bounce"
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