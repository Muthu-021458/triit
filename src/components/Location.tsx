import { MapPin, Clock } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the sweetness in person
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  176, Velachery Main Rd
                  <br />
                  Gowriwakkam, Sembakkam
                  <br />
                  Chennai, Tamil Nadu 600073
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Opening Hours
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
                  <p className="text-pink-600 font-semibold mt-2">
                    Open Daily!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://maps.app.goo.gl/W9KGcdGGJvyTYxt8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl p-8 shadow-lg flex items-center justify-center" style={{height:"325px"}}>
                <div className="text-center">
                  <div className="text-8xl mb-4">🗺️</div>
                  <p className="text-gray-700 font-semibold text-lg">
                    Map Location
                  </p>
                  <p className="text-gray-600 mt-2">
                    Find us easily on your favorite map app
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
