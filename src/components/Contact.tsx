import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again!");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Choose an option below to continue
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["contact", "feedback"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveForm(tab)}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeForm === tab
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300 transition"
              }`}
            >
              {tab === "contact" ? "Get In Touch" : "Feedback"}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200"
                required
              />

              {/* Animated Form Sections */}
              <AnimatePresence mode="wait">
                {/* CONTACT FORM */}
                {activeForm === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200"
                      required
                    />
                  </motion.div>
                )}

                {/* FEEDBACK FORM */}
                {activeForm === "feedback" && (
                  <motion.div
                    key="feedback"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <select
  name="rating"
  value={formData.rating}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 pr-8 rounded-xl border-2 border-orange-200 bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 appearance-none"
>
  <option value="" disabled hidden>
    Rate Your Experience
  </option>
  <option value="5" className="text-gray-800">⭐⭐⭐⭐⭐ Excellent</option>
  <option value="4" className="text-gray-800">⭐⭐⭐⭐ Good</option>
  <option value="3" className="text-gray-800">⭐⭐⭐ Average</option>
  <option value="2" className="text-gray-800">⭐⭐ Poor</option>
</select>
                    <textarea
                      name="message"
                      placeholder="Your Feedback"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200"
                      required
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                <Send className="w-5 h-5" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}