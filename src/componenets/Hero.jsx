import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.8 });

            tl.from("#availability", {
                opacity: 0,
                y: -20,
                duration: 0.7,
                ease: "power3.out",
            })
                .from(
                    "#heroIntro",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )
                .from(
                    ".title",
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: {
                            each: 0.15,
                            from: "start",
                        },
                    },
                    "-=0.15"
                )
                .from(
                    "#heroDescription",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .fromTo(
                    ".heroBtn",
                    {
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        stagger: 0.1,
                    },
                    "-=0.25"
                )
                .from(
                    "#heroImage",
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                        duration: 0.8,
                        ease: "back.out(1.5)",
                    },
                    "-=0.4"
                )
                .from(
                    "#scrollIndicator",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            const heroScroll = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            heroScroll
                .to(
                    "#heroTitle",
                    {
                        opacity: 0,
                        y: () => (window.innerWidth < 640 ? -60 : -100),
                        ease: "none",
                    },
                    0
                )
                .to(
                    "#descriptionScroll",
                    {
                        opacity: 0,
                        y: () => (window.innerWidth < 640 ? -30 : -50),
                        ease: "none",
                    },
                    0
                )
                .to(
                    "#heroButtons",
                    {
                        opacity: 0,
                        y: () => (window.innerWidth < 640 ? -15 : -30),
                        ease: "none",
                    },
                    0
                )
                .to(
                    "#heroImage",
                    {
                        opacity: 0,
                        y: -40,
                        scale: 0.9,
                        ease: "none",
                    },
                    0
                )
                .to(
                    "#sIndicatorScroll",
                    {
                        opacity: 0,
                        y: 20,
                        ease: "none",
                    },
                    0
                );

            gsap.to("#heroImageInner", {
                y: -8,
                duration: 3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-5 pb-10 pt-28 text-white sm:px-8 sm:pt-32 lg:px-16 lg:pt-32"
        >
            {/* Background grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="relative max-w-6xl">
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

                    {/* Intro */}
                    <p
                        id="heroIntro"
                        className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm sm:tracking-[0.25em]"
                    >
                        Full Stack Developer · India
                    </p>

                    {/* Title */}
                    <h1
                        id="heroTitle"
                        className="max-w-6xl text-[clamp(3.4rem,11vw,9rem)] font-semibold leading-[0.88] tracking-[-0.075em] sm:text-[clamp(4.5rem,10vw,9rem)]"
                    >
                        <span className="title">Building</span>
                        <br />

                        <span className="title">
                            <span className="text-zinc-500">digital</span>{" "}
                            experiences
                        </span>
                        <br />

                        <span className="relative inline-block text-violet-500">
                            <span className="title">that matter.</span>

                            <span className="absolute -right-3 top-0 h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.8)] sm:-right-5 sm:h-3 sm:w-3" />
                        </span>
                    </h1>

                    {/* Description + Buttons */}
                    <div className="mt-8 flex flex-col gap-7 sm:mt-10 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div id="descriptionScroll">
                            <p
                                id="heroDescription"
                                className="max-w-xl text-[0.95rem] leading-7 text-zinc-400 sm:text-base lg:text-lg"
                            >
                                I design and build fast, modern web
                                applications with a focus on clean interfaces,
                                thoughtful interactions, and scalable
                                technology.
                            </p>
                        </div>

                        <div
                            id="heroButtons"
                            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
                        >
                            <a
                                href="#work"
                                className="heroBtn group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white"
                            >
                                View my work

                                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    <Send size={20} />
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="heroBtn flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                            >
                                Let's talk
                            </a>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div
                        id="scrollIndicator"
                        className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4 sm:mt-5 sm:pt-2"
                    >
                        <div
                            id="sIndicatorScroll"
                            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:text-xs sm:tracking-[0.2em]"
                        >
                            <span>Scroll to explore</span>
                            <span className="h-px w-8 bg-zinc-700 sm:w-10" />
                            <span>↓</span>
                        </div>

                        <div className="hidden text-xs tracking-[0.2em] text-zinc-600 sm:block">
                            01 / 04
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div
                id="heroImage"
                className="absolute right-5 top-24 z-10 hidden w-28 sm:block md:right-8 md:top-28 md:w-32 lg:right-12 lg:top-32 lg:w-36 xl:right-16 xl:w-40"
            >
                <div
                    id="heroImageInner"
                    className="relative rounded-full border border-violet-500/20 bg-white/[0.03] p-1.5 shadow-[0_0_45px_rgba(139,92,246,0.15)] backdrop-blur-sm"
                >
                    {/* Violet ring */}
                    <div className="absolute -inset-1 rounded-full border border-violet-500/10" />

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden rounded-full">
                        <img
                            src="/projects/imageMe.jpeg"
                            alt="Aryan Bhatti"
                            className="h-full w-full object-cover object-top"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent" />
                    </div>

                    {/* Status */}
                    <span className="absolute bottom-1 right-2 h-3 w-3 rounded-full border-2 border-[#080808] bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                </div>
            </div>
        
    </section > 
)};

export default Hero;