import { ChefHat, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import React from 'react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TRI-IT</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making sweet moments memorable since day one. Three joyful bakers, endless desserts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  onClick={() => scrollToSection("gallery")}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@tri-it.com</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
  <h3 className="text-lg font-bold mb-4">Follow Us</h3>
  <div className="flex gap-3">
    <a
      href="https://www.facebook.com/YourPage" // replace with your Facebook URL
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
    >
      <Facebook className="w-5 h-5" />
    </a>

    <a
  href="https://www.instagram.com/_tri_it_/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
>
  <Instagram className="w-5 h-5 text-white" />
</a>

    <a
      href="https://twitter.com/YourProfile" // replace with your Twitter URL
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
    >
      <Twitter className="w-5 h-5" />
    </a>
  </div>

  <p className="text-gray-400 text-sm mt-4">
    Share your sweet moments with #TriItDesserts
  </p>
</div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TRI-IT Dessert Shop. All rights reserved.</p>
          <p className="text-sm mt-2">Made with love and sugar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;