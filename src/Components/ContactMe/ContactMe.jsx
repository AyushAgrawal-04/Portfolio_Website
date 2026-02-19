import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

/* ✅ Initialize EmailJS */
emailjs.init("jFshlkPFrvbkh280H");

export default function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_aql535j",       // ✅ NEW SERVICE ID
        "Portfolio_contactMe",   // ✅ TEMPLATE ID
        formRef.current
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-red-900 text-white py-16 px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {/* CONTACT INFO */}
        <motion.div
          className="bg-black/90 p-7 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span className="break-all">ayushmagrawal.76@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500" />
              <span>+91 76669 72175</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-black/90 p-7 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            Drop a Message
          </h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-red-500 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-red-500 hover:bg-red-600 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center mt-4 text-sm ${
                status.includes("success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}