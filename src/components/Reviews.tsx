import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Review {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

// Example static reviews
const fetchGoogleReviews = async (): Promise<Review[]> => [
  { name: 'Sarah Johnson', rating: 5, text: 'The best pancakes I\'ve ever had!', avatar: '👩' },
  { name: 'Michael Chen', rating: 5, text: 'Chocolate cake is divine!', avatar: '👨' },
  { name: 'Emily Rodriguez', rating: 5, text: 'Amazing desserts!', avatar: '👧' },
  { name: 'John Doe', rating: 4, text: 'Loved the cupcakes!', avatar: '🧑' },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchGoogleReviews();
      setReviews(data);
    };
    getReviews();
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
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

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: isMobile ? ['0%', '-100%'] : ['0%', '-50%'],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: isMobile ? 12 : 30,
              ease: 'linear',
            }}
          >
            {/* Duplicate reviews for smooth loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  isMobile ? 'w-full' : 'min-w-[300px]'
                } bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">{review.name}</div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}