const desserts = [
  {
    name: 'Fluffy Pancakes',
    emoji: '🥞',
    description: 'Stack of golden pancakes with maple syrup and fresh berries',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    name: 'Belgian Waffles',
    emoji: '🧇',
    description: 'Crispy waffles topped with whipped cream and chocolate drizzle',
    color: 'from-orange-400 to-red-400',
  },
  {
    name: 'Chocolate Cake',
    emoji: '🍰',
    description: 'Rich chocolate layers with smooth frosting and ganache',
    color: 'from-pink-400 to-purple-400',
  },
  {
    name: 'Milkshakes',
    emoji: '🥤',
    description: 'Creamy shakes in vanilla, chocolate, strawberry and more',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Ice Cream',
    emoji: '🍦',
    description: 'Premium ice cream with various flavors and toppings',
    color: 'from-green-400 to-teal-400',
  },
];

export default function PopularDesserts() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Popular Treats
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved desserts, crafted fresh daily
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {desserts.map((dessert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${dessert.color} flex items-center justify-center text-4xl shadow-lg`}>
                {dessert.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {dessert.name}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {dessert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
