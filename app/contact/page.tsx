"use client";

import { z } from "zod";
import { useState } from "react";
import { Github as GitHub, Linkedin, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validation";
import { toast } from "sonner";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

    const message = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;

    const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
      }),
    })
      .then(() => form.reset())
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

  return (
    <div className="p-6 bg-[#1a1a1a] rounded-2xl">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <div className="h-1 w-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
      </div>

      <p className="text-gray-300 mb-8">
        Feel free to reach out to me through any of these channels. I&apos;m always open to new
        opportunities and collaborations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <div className="bg-[#252525] p-6 rounded-xl mb-6 shadow-[0_0_20px_rgba(0,0,0)]">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#333] p-2 rounded-md">
                  <Send size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>jasurungarov17@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#333] p-2 rounded-md">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+996 707 067 776</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-[#252525] p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0)]">
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="https://github.com/jasurungarov" className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors">
                <GitHub size={20} />
                <span>GitHub</span>
              </Link>

              <Link href="https://linkedin.com/in/jasurungarov" className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Link>

              <Link href="https://t.me/aliabdulwah1d" className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors">
                <Send size={20} />
                <span>Telegram</span>
              </Link>

              <Link href="https://wa.me/996707067776" className="flex items-center gap-3 bg-[#333] p-3 rounded-lg hover:bg-[#444] transition-colors">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#252525] p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0)]">
          <h2 className="text-xl font-bold mb-4">Send Message</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...form.register("name")}
                disabled={isLoading}
                className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="John Doe"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...form.register("email")}
                disabled={isLoading}
                className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="example@email.com"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...form.register("message")}
                disabled={isLoading}
                className="w-full bg-[#333] border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Your message here..."
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
