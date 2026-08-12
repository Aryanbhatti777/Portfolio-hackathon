import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';
import React, { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

    useLayoutEffect(() => {
        
        const ctx = gsap.context(() => {
            gsap.from("#contactEyebrow", {
                opacity: 0,
                y: 25,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#contactHeader",
                    start: "top 80%",
                },
            });

            gsap.from("#contactTitle", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#contactHeader",
                    start: "top 80%",
                },
            });

            gsap.from("#contactInfo", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#contactInfo",
                    start: "top 85%",
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
                },
            });
        })

        return () => ctx.revert()
    },[])

  return (
      <section
          id="contact"
          className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
      >
          {/* Glow */}
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[160px]" />

          <div className="relative mx-auto max-w-7xl">

              {/* Header */}
              <div
                  id="contactHeader"
                  className="border-b border-white/[0.08] pb-16"
              >
                  <p
                      id="contactEyebrow"
                      className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400"
                  >
                      <span className="h-px w-12 bg-violet-500" />
                      Get in touch
                  </p>

                  <h2
                      id="contactTitle"
                      className="max-w-6xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.85] tracking-[-0.075em]"
                  >
                      Let's make
                      <br />
                      <span className="text-zinc-600">
                          something happen.
                      </span>
                  </h2>
              </div>


              {/* Content */}
              <div className="grid gap-16 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-24">

                  {/* Left */}
                  <div id="contactInfo">

                      <p className="max-w-md text-base leading-7 text-zinc-500 sm:text-lg">
                          Have an idea, a project, or just want to talk about
                          technology? I'd love to hear from you.
                      </p>

                      <a
                          href="mailto:your@email.com"
                          className="group mt-10 inline-flex items-center gap-4 text-lg text-zinc-300 transition-colors duration-300 hover:text-white sm:text-xl"
                      >
                          bhattiaryan777@gmail.com

                          <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                              ↗
                          </span>
                      </a>

                      {/* Socials */}
                      <div className="mt-16">
                          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-700">
                              Find me online
                          </p>

                          <div className="flex flex-wrap gap-3">
                              <a
                                  href="https://github.com/Aryanbhatti777"
                                  className="rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                              >
                                  GitHub ↗
                              </a>

                              <a
                                  href="https://www.linkedin.com/in/aryan-bhatti-8556b2363"
                                  className="rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-zinc-500 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                              >
                                  LinkedIn ↗
                              </a>
                          </div>
                      </div>
                  </div>


                  {/* Form */}
                  <form
                      id="contactForm"
                      className="border-t border-white/[0.08]"
                  >

                      {/* Name */}
                      <div className="border-b border-white/[0.08] py-6">
                          <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-zinc-700">
                              01 / Name
                          </label>

                          <input
                              type="text"
                              placeholder="Your name"
                              className="w-full bg-transparent text-lg text-white outline-none placeholder:text-zinc-700"
                          />
                      </div>


                      {/* Email */}
                      <div className="border-b border-white/[0.08] py-6">
                          <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-zinc-700">
                              02 / Email
                          </label>

                          <input
                              type="email"
                              placeholder="you@example.com"
                              className="w-full bg-transparent text-lg text-white outline-none placeholder:text-zinc-700"
                          />
                      </div>


                      {/* Message */}
                      <div className="border-b border-white/[0.08] py-6">
                          <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-zinc-700">
                              03 / Message
                          </label>

                          <textarea
                              rows="4"
                              placeholder="Tell me about your project..."
                              className="w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-zinc-700"
                          />
                      </div>


                      {/* Submit */}
                      <button
                          type="submit"
                          className="group mt-8 flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white"
                      >
                          Send message

                          <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                              <Send size={20 } />
                          </span>
                      </button>

                  </form>
              </div>


              {/* Bottom */}
              <div
                  id="contactFooter"
                  className="flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-xs uppercase tracking-[0.2em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between"
              >
                  <span>Available for opportunities</span>

                  <span>India · 2026</span>
              </div>

          </div>
      </section>
  )
}

export default Contact;