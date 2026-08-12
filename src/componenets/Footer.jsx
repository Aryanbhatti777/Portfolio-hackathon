import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    const footerRef = useRef(null)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                    once: true,
                },
            });

            tl.from("#footerEyebrow", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out",
            })
                .from(
                    "#footerTitle",
                    {
                        opacity: 0,
                        y: 50,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    ".footerItem",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
        }, "#footer");

        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            ref={footerRef}
            id="footer"
            className="relative overflow-hidden bg-[#080808] px-6 pb-8 pt-24 text-white sm:px-10 lg:px-16 lg:pt-32"
        >
          
            <div className="pointer-events-none absolute -right-72 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

            <div className="relative mx-auto max-w-7xl">

      
                <div className="border-b border-white/[0.08] pb-20 lg:pb-28">

                    <p
                        id="footerEyebrow"
                        className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400"
                    >
                        <span className="h-px w-12 bg-violet-500" />
                        Have a project?
                    </p>

                    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

                        <h2
                            id="footerTitle"
                            className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]"
                        >
                            Let's build
                            <br />
                            <span className="text-zinc-600">
                                something great.
                            </span>
                        </h2>

                        <a
                            href="#contact"
                            className="footerItem group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white"
                        >
                            Let's talk

                            <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                ↗
                            </span>
                        </a>

                    </div>
                </div>

             
                <div className="grid gap-12 border-b border-white/[0.08] py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">

              
                    <div className="footerItem">

                        <button
                            onClick={scrollToTop}
                            className="text-3xl font-bold tracking-[-0.06em]"
                        >
                            AB<span className="text-violet-500">.</span>
                        </button>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-600">
                            Full Stack Developer building modern,
                            performant, and thoughtful digital experiences.
                        </p>

                    </div>

               
                    <div className="footerItem">
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-700">
                            Navigation
                        </p>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#work"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                Work
                            </a>

                            <a
                                href="#about"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                About
                            </a>

                            <a
                                href="#skills"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                Skills
                            </a>

                            <a
                                href="#contact"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

               
                    <div className="footerItem">
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-700">
                            Connect
                        </p>

                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com/Aryanbhatti777"
                                target="_blank"
                                rel="noreferrer"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aryan-bhatti-8556b2363"
                                target="_blank"
                                rel="noreferrer"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="mailto:bhattiaryan777@gmail.com"
                                className="w-fit text-sm text-zinc-500 transition-colors hover:text-white"
                            >
                                Email ↗
                            </a>
                        </div>
                    </div>

          
                    <div className="footerItem">
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-700">
                            Availability
                        </p>

                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                            </span>

                            <span className="text-sm text-zinc-500">
                                Available for work
                            </span>
                        </div>

                        <p className="mt-4 text-sm text-zinc-700">
                            India · 2026
                        </p>
                    </div>

                </div>

                <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                        © 2026 Aryan Bhatti
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="footerItem group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-white"
                    >
                        Back to top

                        <span className="transition-transform duration-300 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </button>

                </div>

            </div>
        </footer>
    );
};

export default Footer;