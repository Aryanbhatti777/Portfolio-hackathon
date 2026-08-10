import gsap from "gsap";
import { Send } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

const Navbar = () => {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            
            let tl = gsap.timeline()

            tl.from("#nav", {
                yPercent: -100,
                duration: 0.8,
                opacity: 0,
                ease: "back.out",
            }).from("#logo", {
                xPercent: -100,
                duration: 0.5,
                opacity: 0,
                ease: "back.out"
            }, "-=0.5").from(".navLink", {
                yPercent: 100,
                opacity: 0,
                ease: "back.out",
                stagger: {
                    each: 0.2,
                    from: "start"
                }
            }, "-=0.5").fromTo("#cta", {
                scale: 0.9,
                opacity: 0,

            }, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "linear"
            }, "-=0.7")
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            <nav
                className="fixed top-6 left-1/2 z-50 flex h-16 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 backdrop-blur-xl" id="nav">

                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight text-white"
                    id="logo"
                >
                    AB<span className="text-violet-500">.</span>
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#work"
                        className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white navLink"
                    >
                        Work
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white navLink"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white navLink"
                    >
                        Skills
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white hover:scale-[2] navLink"
                    >
                        Contact
                    </a>
                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className="flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-600"
                    id="cta"
                >
                    Let's Talk
                    <span className="text-base"><Send size={20} /></span>
                </a>
            </nav>
        </>
    );
};

export default Navbar;

