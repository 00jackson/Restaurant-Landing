import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 bg-orange-500 text-white text-center">
      <motion.h2 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>
      <p className="mt-4 text-lg">Reserve your table or order online!</p>
      <motion.button
        className="mt-6 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        Contact Us
      </motion.button>
    </section>
  );
};

export default Contact;