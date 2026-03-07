import { ChefHat } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-15" style={{ animation: 'float-slow 6s ease-in-out infinite' }}></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-15" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}></div>

        <svg className="absolute inset-0 w-full h-full opacity-10" style={{ animation: 'shimmer 15s infinite' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="url(#grad)" />
            </pattern>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(244, 114, 182)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(251, 146, 60)', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20 text-4xl animate-float" style={{ animationDelay: '0s' }}>🍰</div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-15 text-3xl animate-float-slow" style={{ animationDelay: '0.5s' }}>🧁</div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 opacity-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>🥞</div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 opacity-15 text-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}>🍓</div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 opacity-15 text-4xl animate-float" style={{ animationDelay: '0.7s' }}>🍌</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-bounce">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full shadow-2xl">
              <ChefHat className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
            TRI-IT
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Sweet Moments Start at TRI-IT
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Delicious pancakes, waffles, cakes & desserts made with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Order Now
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-orange-300">
              View Menu
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">50+</div>
              <div className="text-gray-600">Desserts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">5★</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
