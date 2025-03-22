import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Giovanni Rossi",
    review: "The truffle pasta was an absolute delight! Authentic flavors and perfect seasoning.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sophia Romano",
    review: "I loved the ambiance and the chicken salad was super fresh. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Luca Bianchi",
    review: "Best steak I’ve ever had! Cooked to perfection with a delicious sauce.",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Alessia Moretti",
    review: "The seafood platter was divine. You could taste the freshness in every bite.",
    image: "https://randomuser.me/api/portraits/women/60.jpg"
  },
  {
    name: "Marco Ferrari",
    review: "Excellent service and the Pollo e Peperoni was flavorful and juicy!",
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    name: "Isabella Conti",
    review: "The desserts were a dream! Tiramisu was light, creamy, and perfectly sweet.",
    image: "https://randomuser.me/api/portraits/women/35.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Blur Effect on Both Sides */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent z-10"></div>

      <div className="container mx-auto text-center relative z-20">
        <motion.h2
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say ❤️
        </motion.h2>

        {/* Infinite Carousel */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96 p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic">"{item.review}"</p>
                <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;