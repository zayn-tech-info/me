import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const phoneNumber = "2349066309138";
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
    toast.success("Redirecting to WhatsApp...");
    reset();
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 max-w-[1200px] mx-auto py-24"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #333",
          },
        }}
      />

      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base text-accent tracking-widest uppercase font-mono mb-4">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's talk.
          </h3>
          <p className="text-zinc-400 text-lg">
            Have a project or just want to recognize? Send me a message.
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            autoComplete="off"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-400">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-all placeholder:text-zinc-700"
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-red-400 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-400">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /.+@.+\..+/, message: "Invalid email" },
                })}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-all placeholder:text-zinc-700"
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-400">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-all min-h-[120px] resize-none placeholder:text-zinc-700"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <span className="text-red-400 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-bold rounded-lg px-6 py-3 hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-6 pt-6 border-t border-white/5">
            <a
              href="mailto:yakububasit59@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/zayn-tech-info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/zayntechinfo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
