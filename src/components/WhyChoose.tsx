import { Leaf, Sparkles, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the finest, freshest ingredients in all our desserts',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: Sparkles,
    title: 'Unique Desserts',
    description: 'Creative recipes you won\'t find anywhere else',
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    icon: Users,
    title: 'Friendly Atmosphere',
    description: 'A warm, welcoming space perfect for making sweet memories',
    color: 'text-pink-600',
    bg: 'bg-pink-100',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Premium desserts that won\'t break the bank',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose TRI-IT?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the best dessert experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bg} flex items-center justify-center shadow-md`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
