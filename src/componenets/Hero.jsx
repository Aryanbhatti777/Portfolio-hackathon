import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.8, })

            tl.from("#availability", {
                opacity: 0,
                yPercent: -100,
                ease: "back.out",
                duration: 0.8
            }).from("#heroIntro", {
                yPercent: 30,
                duration: 0.4,
                opacity: 0,
                ease: "back.out"
            }, "-=0.5").from(".title", {
                yPercent: 30,
                opacity: 0,
                ease: "back.out",
                duration: 0.8,
                stagger: {
                    each: 0.2,
                    from: "start",
                }
            }).from("#heroDescription", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            }, "-=0.5").fromTo(".heroBtn", {
                opacity: 0,
                scale: 0.9,
                stagger: {
                    each: 0.1,
                    from: "start"
                }
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.2,
                ease: "power3.out",
            }, "-=0.2").from("#scrollIndicator", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.3")
            
            gsap.to("#heroTitle", {
                opacity: 0,
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "+=500",
                    // markers: true,
                    scrub: 1,
                }
            })

            gsap.to("#discriptionScroll", {
                opacity: 0,
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "+=1500",
                    scrub: 1,
                    // markers: true,
                }
            })
            gsap.to("#heroButtons", {
                opacity: 0.4,
                y: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "+=1000",
                    markers: true,
                    scrub: 1,
                }
            })
            gsap.to("#sIndicatorScroll", {
                opacity: 0,
                y: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "+=1500",
                    markers: true,
                    scrub: 1,
                }
            })
        })

        return () => ctx.revert()
    }, [])
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-6 pt-32 text-white sm:px-10 lg:px-16">
            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Violet Glow */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

            {/* Main Content */}
            <div className="relative mx-auto w-full max-w-7xl ">
                <div className="max-w-6xl">

                    {/* Availability */}
                    <div
                        id="availability"
                        className="mb-4 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                            Available for work
                        </span>
                    </div>

                    {/* Small Intro */}
                    <p
                        id="heroIntro"
                        className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500"
                    >
                        Full Stack Developer · India
                    </p>

                    {/* Main Heading */}
                    <h1
                        id="heroTitle"
                        className="max-w-6xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
                    >
                        <span className="title">Building</span>
                        <br />
                        <span className="title">
                            <span className="text-zinc-500">digital</span>{" "}
                            experiences</span>
                        <br />

                        <span className="relative inline-block text-violet-500">
                            <span className="title">that matter.</span>
                            <span className="absolute -right-5 top-0 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.8)]" />
                        </span>
                    </h1>

                    {/* Bottom Content */}
                    <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                        {/* Description */}
                        <div id="discriptionScroll">
                            <p
                                id="heroDescription"
                                className="max-w-xl text-base leading-7 text-zinc-400 sm:text-lg"
                            >
                                I design and build fast, modern web applications with a focus
                                on clean interfaces, thoughtful interactions, and scalable
                                technology.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div
                            id="heroButtons"
                            className="flex flex-wrap items-center gap-3"
                        >
                            <a
                                href="#work"
                                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white heroBtn"
                            >
                                View my work

                                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    <Send size={20} />
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white heroBtn"
                            >
                                Let's talk
                            </a>
                        </div>
                    </div>

                    {/* Bottom Meta */}
                    <div
                        id="scrollIndicator"
                        className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-2"
                    >
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-600" id="sIndicatorScroll">
                            <span>Scroll to explore</span>

                            <span className="h-px w-10 bg-zinc-700" />

                            <span>↓</span>
                        </div>

                        <div className="hidden text-xs tracking-[0.2em] text-zinc-600 sm:block">
                            01 / 04
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

