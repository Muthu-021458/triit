const galleryImages = [
  { emoji: '🥞', label: 'Pancakes', gradient: 'from-yellow-300 to-orange-300' },
  { emoji: '🧇', label: 'Waffles', gradient: 'from-orange-300 to-red-300' },
  { emoji: '🍰', label: 'Cakes', gradient: 'from-pink-300 to-purple-300' },
  { emoji: '🧁', label: 'Cupcakes', gradient: 'from-purple-300 to-pink-300' },
  { emoji: '🍩', label: 'Donuts', gradient: 'from-pink-300 to-orange-300' },
  { emoji: '🍪', label: 'Cookies', gradient: 'from-yellow-300 to-brown-300' },
  { emoji: '🍨', label: 'Sundaes', gradient: 'from-blue-300 to-pink-300' },
  { emoji: '🥤', label: 'Shakes', gradient: 'from-cyan-300 to-blue-300' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Sweet Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of our delicious creations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer aspect-square"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <div className="text-6xl md:text-7xl mb-3 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <div className="text-white font-bold text-lg md:text-xl">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
