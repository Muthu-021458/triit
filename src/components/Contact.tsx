import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

type FeedbackResult = "celebrate" | "sad" | null;

const EMAILJS_SERVICE_ID = "your_service_id";       // 🔁 Replace
const EMAILJS_TEMPLATE_ID = "your_template_id";     // 🔁 Replace
const EMAILJS_PUBLIC_KEY = "your_public_key";       // 🔁 Replace

export default function Contact() {
  const [activeForm, setActiveForm] = useState("contact");
  const [feedbackResult, setFeedbackResult] = useState<FeedbackResult>(null);
  const [formType, setFormType] = useState<"contact" | "feedback">("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (templateParams: Record<string, string>) => {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (activeForm === "contact") {
        // ✅ Get In Touch → always send via EmailJS
        await sendEmail({
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: "New Contact Message",
        });
        setFormType("contact");
        setFeedbackResult("celebrate");

      } else {
        const rating = parseInt(formData.rating);

        if (rating > 3) {
          // ✅ Rating 4 or 5 → store in Firebase only
          await addDoc(collection(db, "feedback"), {
            name: formData.name,
            email: formData.email,
            rating: rating,
            message: formData.message,
            createdAt: serverTimestamp(),
          });
          setFeedbackResult("celebrate");

        } else {
          // ✅ Rating < 3 → send to email via EmailJS
          await sendEmail({
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            rating: formData.rating,
            subject: "Low Rating Feedback Received",
          });
          setFeedbackResult("sad");
        }

        setFormType("feedback");
      }

      setFormData({ name: "", email: "", message: "", rating: "" });
    } catch (error) {
      console.error(error);
      alert("Error submitting. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">Choose an option below to continue</p>
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
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 outline-none"
              />

              <AnimatePresence mode="wait">
                {activeForm === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 outline-none"
                    />
                  </motion.div>
                )}

                {activeForm === "feedback" && (
                  <motion.div
                    key="feedback"
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {/* ✅ Custom select — no dropdown arrow */}
                    <div className="relative">
                      <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 outline-none bg-white appearance-none cursor-pointer"
                        style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                      >
                        <option value="">Rate Your Experience</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Good</option>
                        <option value="3">⭐⭐⭐ Average</option>
                        <option value="2">⭐⭐ Poor</option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      placeholder="Your Feedback"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

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

      {/* Overlay Card */}
      <AnimatePresence>
        {feedbackResult && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFeedbackResult(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative rounded-3xl shadow-2xl p-10 max-w-sm w-full mx-4 text-center overflow-hidden ${
                feedbackResult === "celebrate"
                  ? "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 text-white"
                  : "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white"
              }`}
            >
              {feedbackResult === "celebrate" && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {["🎉","✨","🎊","⭐","💫","🌟"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="absolute text-2xl"
                      style={{ left: `${10 + i * 15}%`, top: "-10%" }}
                      animate={{ y: ["0%", "120%"], rotate: [0, 360], opacity: [1, 0] }}
                      transition={{ duration: 1.8 + i * 0.2, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              )}

              <motion.div
                className="text-7xl mb-4"
                animate={feedbackResult === "celebrate"
                  ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                  : { y: [0, -6, 0] }
                }
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                {feedbackResult === "celebrate" ? "🎉" : "😢"}
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">
                {feedbackResult === "celebrate"
                  ? (formType === "contact" ? "Message Sent!" : "Thank You! 🌟")
                  : "We're Sorry to Hear That"}
              </h3>

              <p className="text-sm opacity-90 mb-6">
                {feedbackResult === "celebrate"
                  ? (formType === "contact"
                    ? "We've received your message and will get back to you soon."
                    : "We're thrilled you loved your experience with us!")
                  : "Your feedback means a lot. We'll work hard to improve and do better for you. 💪"}
              </p>

              <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 ${
                feedbackResult === "celebrate" ? "bg-white/20" : "bg-white/10"
              }`}>
                {feedbackResult === "celebrate" ? "✅ Submitted Successfully" : "📬 Feedback Received"}
              </div>

              <br />

              <button
                onClick={() => setFeedbackResult(null)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition hover:scale-105 ${
                  feedbackResult === "celebrate"
                    ? "bg-white text-emerald-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}