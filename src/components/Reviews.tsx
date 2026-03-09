import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Review {
  name: string;
  rating: number;
  message: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  // Fetch Firebase reviews
  useEffect(() => {
    const fetchFirebaseReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedback"));
        const reviewList: Review[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const rating = Number(data.rating);

          if (rating > 3) {
            reviewList.push({
              name: data.name,
              rating,
              message: data.message,
            });
          }
        });

        setReviews(reviewList);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchFirebaseReviews();
  }, []);

  // ✅ Animate using CSS keyframes — no infinite loop issue
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reviews.length === 0) return;

    const half = track.scrollWidth / 2;

    // Inject a dynamic keyframe based on actual content width
    const styleId = "marquee-style";
    let style = document.getElementById(styleId) as HTMLStyleElement;
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }
    style.innerHTML = `
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-${half}px); }
      }
      .marquee-track {
        animation: marquee ${reviews.length * 5}s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `;
  }, [reviews]);

  if (reviews.length === 0) {
    return (
      <section className="py-20 bg-white text-center">
        <p className="text-gray-400 text-lg">No reviews yet.</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our happy customers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          <div ref={trackRef} className="marquee-track flex gap-8 w-max">
            {/* Duplicate for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {review.name?.charAt(0).toUpperCase()}
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
                <p className="text-gray-700 leading-relaxed italic">"{review.message}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}