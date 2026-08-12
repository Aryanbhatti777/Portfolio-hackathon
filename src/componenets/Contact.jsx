import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contactHeader",
          start: "top 80%",
          once: true,
        },
      });

      headerTl
        .from("#contactEyebrow", {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          "#contactTitle",
          {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        );

      gsap.from("#contactInfo", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contactInfo",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from("#contactForm", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contactForm",
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-5 py-28 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/[0.08] blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto max-w-7xl">
        <div
          id="contactHeader"
          className="border-b border-white/[0.08] pb-12 sm:pb-16"
        >
          <p
            id="contactEyebrow"
            className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400 sm:gap-4 sm:text-xs sm:tracking-[0.3em]"
          >
            <span className="h-px w-8 bg-violet-500 sm:w-12" />
            Get in touch
          </p>

          <h2
            id="contactTitle"
            className="max-w-6xl text-[clamp(3.4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.075em]"
          >
            Let's make
            <br />
            <span className="text-zinc-600">something happen.</span>
          </h2>
        </div>

        <div className="grid gap-14 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-24">
          <div id="contactInfo">
            <p className="max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              Have an idea, a project, or just want to talk about technology?
              Send me a message and I'll get back to you.
            </p>

            <a
              href="mailto:bhattiaryan777@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 break-all text-base text-zinc-300 transition-colors duration-300 hover:text-white sm:mt-10 sm:text-xl"
            >
              bhattiaryan777@gmail.com
              <span className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="mt-12 sm:mt-16">
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-zinc-700 sm:text-xs">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Aryanbhatti777"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/[0.08] px-4 py-2.5 text-xs text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white sm:px-5 sm:text-sm"
                >
                  GitHub ↗
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/[0.08] px-4 py-2.5 text-xs text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white sm:px-5 sm:text-sm"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-3 sm:mt-16">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                Available for opportunities
              </span>
            </div>
          </div>

          <form
            ref={formRef}
            id="contactForm"
            onSubmit={handleSubmit}
            className="border-t border-white/[0.08]"
          >
            <div className="border-b border-white/[0.08] py-6">
              <label
                htmlFor="userName"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:text-xs"
              >
                01 / Name
              </label>

              <input
                id="userName"
                name="user_name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-700 sm:text-lg"
              />
            </div>

            <div className="border-b border-white/[0.08] py-6">
              <label
                htmlFor="userEmail"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:text-xs"
              >
                02 / Email
              </label>

              <input
                id="userEmail"
                name="user_email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-700 sm:text-lg"
              />
            </div>

            {/* Message */}
            <div className="border-b border-white/[0.08] py-6">
              <label
                htmlFor="message"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:text-xs"
              >
                03 / Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none bg-transparent text-base leading-7 text-white outline-none placeholder:text-zinc-700 sm:text-lg"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <p className="mt-5 text-sm text-violet-400">
                Message sent successfully. Thank you!
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-8 flex w-full items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Message sent ✓"
                  : "Send message"}

              {status !== "success" && (
                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-7 text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <span>Available for opportunities</span>
          <span>India · 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
