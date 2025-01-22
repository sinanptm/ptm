"use client";

import { motion } from "framer-motion";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitMessage } from "@/action";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contact: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors = {
      name: formData.name.length >= 2 ? "" : "Name must be at least 2 characters.",
      email: formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Please enter a valid email address.") : "",
      phone: formData.phone ? (/^\+?[1-9]\d{1,14}$/.test(formData.phone) ? "" : "Please enter a valid phone number.") : "",
      message: formData.message.length >= 10 ? "" : "Message must be at least 10 characters.",
      contact: formData.email || formData.phone ? "" : "Please provide at least an email or phone number.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!validateForm()) return;

      setFormStatus("submitting");
      await submitMessage(formData.name, formData.email, formData.phone, formData.message);
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Name</label>
          <Input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 text-orange-500"
          />
          {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-white mb-2">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 text-orange-500"
          />
          {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-white mb-2">Phone</label>
          <Input
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 text-orange-500"
          />
          {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>}
        </div>
        {errors.contact && <p className="text-red-500 mt-1 text-sm">{errors.contact}</p>} {/* Show general contact error */}
        <div>
          <label className="block text-white mb-2">Message</label>
          <Textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800 text-orange-500 border-gray-700 "
          />
          {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
        </div>
        <Button
          type="submit"
          disabled={formStatus === "submitting"}
          className={`w-full ${formStatus === "submitting" ? "bg-gray-500 text-gray-200" : "bg-orange-700 text-white hover:bg-orange-800"
            } transition-colors duration-300`}
        >
          {formStatus === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {formStatus === "success" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-500">
          Thank you for your message. We&apos;ll get back to you soon!
        </motion.p>
      )}
    </motion.div>
  );
};

export default memo(ContactForm);
