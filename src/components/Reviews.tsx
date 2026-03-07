import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'The best pancakes I\'ve ever had! The atmosphere is so welcoming and the staff are incredibly friendly. TRI-IT has become our family\'s favorite weekend spot.',
    avatar: '👩',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Their chocolate cake is absolutely divine! Fresh ingredients and unique flavors make every visit special. Highly recommend the milkshakes too!',
    avatar: '👨',
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Amazing desserts at great prices! The waffles are crispy and delicious, and the ice cream selection is incredible. Can\'t wait to come back!',
    avatar: '👧',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">
                    {review.name}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
