import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Send } from "lucide-react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from("#nav", {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    "#logo",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".navLink",
                    {
                        opacity: 0,
                        y: 10,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .fromTo(
                    "#cta",
                    {
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            let lastScroll = window.scrollY;

            const handleScroll = () => {
                const currentScroll = window.scrollY;

                if (currentScroll <= 20) {
                    gsap.to("#nav", {
                        y: 0,
                        duration: 0.2,
                        ease: "power3.out",
                    });

                    lastScroll = currentScroll;
                    return;
                }

                if (currentScroll > lastScroll) {
                    gsap.to("#nav", {
                        y: -120,
                        duration: 0.2,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to("#nav", {
                        y: 0,
                        duration: 0.2,
                        ease: "power3.out",
                    });
                }

                lastScroll = currentScroll;
            };

            window.addEventListener("scroll", handleScroll, {
                passive: true,
            });

            const sections = ["work", "about", "skills", "contact"];
            const observers = [];

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (!section) return;

                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    },
                    {
                        threshold: 0,
                        rootMargin: "-30% 0px -60% 0px",
                    }
                );

                observer.observe(section);
                observers.push(observer);
            });

            return () => {
                window.removeEventListener("scroll", handleScroll);
                observers.forEach((observer) => observer.disconnect());
            };
        });

        return () => ctx.revert();
    }, []);

    const handleNavClick = (e, target) => {
        e.preventDefault();

        gsap.to(window, {
            duration: 0.9,
            scrollTo: {
                y: target,
                offsetY: 100,
            },
            ease: "power3.inOut",
        });
    };

    return (
        <nav
            id="nav"
            className="fixed left-1/2 top-6 z-50 flex h-16 w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 backdrop-blur-xl transition-all duration-500"
            style={{ transform: "translateX(-50%)" }}
        >
            <a
                id="logo"
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="text-xl font-bold tracking-tight text-white"
            >
                AB<span className="text-violet-500">.</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
                {[
                    ["work", "Work"],
                    ["about", "About"],
                    ["skills", "Skills"],
                    ["contact", "Contact"],
                ].map(([id, label]) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => handleNavClick(e, `#${id}`)}
                        className="navLink relative inline-flex items-center py-1 text-sm text-white transition-colors duration-300"
                    >
                        {label}

                        <span className="absolute -bottom-1 left-0 h-px bg-violet-500 transition-all duration-300" />
                    </a>
                ))}
            </div>

            <a
                id="cta"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
                Let's Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Send size={18} />
                </span>
            </a>
        </nav>
    );
};

export default Navbar;