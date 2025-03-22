import { motion } from "framer-motion";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";

const dishes = [
  { 
    name: "Tofu Diavola", 
    image: dish1, 
    price: "$22", 
    desc: "Spicy tofu in a rich, tangy tomato-chili sauce, garnished with fresh basil and herbs."
  },
  { 
    name: "Insalata di Pollo", 
    image: dish2, 
    price: "$28", 
    desc: "Tender boiled chicken with crisp lettuce, cherry tomatoes, and a light lemon vinaigrette."
  },
  { 
    name: "Pollo e Peperoni", 
    image: dish3, 
    price: "$30", 
    desc: "Sautéed chicken breast with colorful capsicum in a garlic and white wine sauce."
  },
  { 
    name: "Cosce di Pollo Rustico", 
    image: dish4, 
    price: "$35", 
    desc: "Juicy chicken drumsticks roasted with zucchini, bell peppers, and rosemary."
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200 relative">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-6xl font-extrabold mb-16 text-gray-800">
          Our Signature Dishes 🍽️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Dish Image */}
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-80 object-cover transition-all group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all"></div>
              </div>

              {/* Hover Glassmorphism Effect */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-all bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                <h3 className="text-4xl font-bold">{dish.name}</h3>
                <p className="text-lg italic">{dish.desc}</p>
                <p className="text-2xl font-semibold mt-2">{dish.price}</p>
                <button className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all">
                  Add to Cart
                </button>
              </div>

              {/* Dish Details */}
              <div className="p-4 bg-white text-center group-hover:bg-orange-50 transition-all">
                <h3 className="text-3xl font-bold text-gray-800">{dish.name}</h3>
                <p className="text-lg text-gray-600">{dish.desc}</p>
                <p className="text-xl font-semibold text-orange-500 mt-2">
                  {dish.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;