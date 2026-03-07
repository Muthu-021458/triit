import { Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Our Sweet Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-bold text-orange-600">TRI-IT</span>, we believe every bite should be a celebration.
                Our journey began with three playful chef monkeys who dreamed of bringing joy through desserts.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We're passionate about creating sweet moments using only the freshest ingredients.
                From fluffy pancakes to decadent cakes, each dessert is crafted with creativity,
                sweetness, and fun at its heart.
              </p>

              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <span className="text-gray-700 font-semibold">Made with Love</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 font-semibold">Fresh Daily</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🐵👨‍🍳🐵</div>
                  <p className="text-gray-700 font-semibold">Three Chef Monkeys</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Representing Creativity, Sweetness & Fun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
