import { ChefHat } from "lucide-react";
import CountUp from "react-countup";
import React from "react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const bakeryEmojis = ["🥐", "🍰", "🍩", "🧁", "🍪"];

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 min-h-screen flex items-center overflow-hidden">
      {/* Monkeys */}
      {/* Desktop: left & right monkeys */}
      <img
        src="/heroBackground.png"
        alt="Monkey Left Bottom"
        className="hidden sm:block absolute -bottom-[130px] left-5 w-auto max-w-[340px] h-auto opacity-40"
      />
      <img
        src="/heroBackground.png"
        alt="Monkey Right Bottom"
        className="hidden sm:block absolute -bottom-[130px] right-5 w-auto max-w-[340px] h-auto opacity-40"
      />
      {/* Mobile: single centered monkey */}
      <img
        src="/heroBackground.png"
        alt="Monkey Center Bottom"
        className="sm:hidden absolute bottom-[485px] left-[49%] -translate-x-1/2 w-auto max-w-[300px] h-auto opacity-40"
      />

      {/* Bakery emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {bakeryEmojis.map((emoji, index) => {
          const positions = [
            { top: "15%", left: "10%" },
            { top: "25%", right: "15%" },
            { top: "40%", left: "20%" },
            { top: "55%", right: "25%" },
            { top: "70%", left: "15%" },
          ];
          const pos = positions[index % positions.length];
          return (
            <div
              key={index}
              style={{ ...pos }}
              className="absolute text-2xl sm:text-3xl opacity-20 animate-jump-slow"
            >
              {emoji}
            </div>
          );
        })}

        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        {/* Chef Icon */}
        <div className="flex justify-center mb-8 h-[96px] sm:h-auto">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full shadow-2xl animate-jump invisible sm:visible">
            <ChefHat className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
          TRI-IT
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Sweet Moments Start at TRI-IT
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Delicious pancakes, waffles, cakes & desserts made with love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("gallery")}
          >
            View Menu
          </button>
          <button
            className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-orange-300"
            onClick={() => scrollToSection("contact")}
          >
            Rate Us
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              <CountUp start={0} end={500} duration={3} />+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">
              <CountUp start={0} end={50} duration={3} />+
            </div>
            <div className="text-gray-600">Desserts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">
              <CountUp start={0} end={5} duration={3} />★
            </div>
            <div className="text-gray-600">Rating</div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes jump-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-jump { animation: jump 2s ease-in-out infinite; }
          .animate-jump-slow { animation: jump-slow 3s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default Hero;