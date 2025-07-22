import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    toast.success("Message sent! 🚀 ");
    reset();
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto mt-10 py-10">
      <Toaster position="top-center" />
      <span className="bg-green-200 rounded-md px-4 py-2">
        <span className="section-title text-xl font-bold ">Contact</span>
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100"
        autoComplete="off"
      >
        <input
          {...register("name", { required: "Name is required" })}
          className="px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-green-200 outline-none"
          placeholder="Your Name"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /.+@.+\..+/, message: "Invalid email" },
          })}
          className="px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-green-200 outline-none"
          placeholder="Your Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <textarea
          {...register("message", { required: "Message is required" })}
          className="px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-green-200 outline-none min-h-[100px] resize-none"
          placeholder="Your Message"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-3 mt-2 hover:bg-green-600 transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
