import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                },
            });

            tl.from("#aboutEyebrow", {
                opacity: 0,
                y: 25,
                duration: 0.7,
                ease: "power3.out",
            })
                .from(
                    "#aboutTitle",
                    {
                        opacity: 0,
                        y: 60,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    "#aboutDescription",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );

            gsap.utils.toArray(".aboutStat").forEach((stat) => {
                gsap.from(stat, {
                    opacity: 0,
                    y: 30,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 85%",
                    },
                });
            });

            gsap.utils.toArray(".aboutCapability").forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    x: -25,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                });
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
        >

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-64 top-1/3 h-[550px] w-[550px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}

                <div
                    className="border-b border-white/[0.08] pb-16"
                >
                    <p
                        id="aboutEyebrow"
                        className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400"
                    >
                        <span className="h-px w-12 bg-violet-500" />

                        About me
                    </p>

                    <h2
                        id="aboutTitle"
                        className="max-w-6xl text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]"
                    >
                        I build things
                        <br />
                        <span className="text-zinc-600">
                            that make sense.
                        </span>
                    </h2>
                </div>


                {/* ================= MAIN CONTENT ================= */}

                <div className="grid gap-16 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:py-24">

                    {/* LEFT */}

                    <div>
                        <p
                            id="aboutDescription"
                            className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl"
                        >
                            I'm a full stack developer focused on building
                            modern web applications that are fast, scalable,
                            and enjoyable to use.
                        </p>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
                            I care about the details behind the interface as
                            much as the interface itself — from responsive
                            layouts and smooth interactions to APIs,
                            authentication, databases, and deployment.
                        </p>


                        {/* Stats */}

                        <div className="mt-16 grid max-w-lg grid-cols-2 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08]">

                            <div className="aboutStat bg-[#080808] p-6">
                                <span className="block text-3xl font-semibold tracking-tight text-white">
                                    01
                                </span>

                                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Developer
                                </span>
                            </div>

                            <div className="aboutStat bg-[#080808] p-6">
                                <span className="block text-3xl font-semibold tracking-tight text-white">
                                    Full
                                </span>

                                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Stack
                                </span>
                            </div>

                            <div className="aboutStat bg-[#080808] p-6">
                                <span className="block text-3xl font-semibold tracking-tight text-white">
                                    Web
                                </span>

                                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Applications
                                </span>
                            </div>

                            <div className="aboutStat bg-[#080808] p-6">
                                <span className="block text-3xl font-semibold tracking-tight text-white">
                                    India
                                </span>

                                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-zinc-600">
                                    Based
                                </span>
                            </div>

                        </div>
                    </div>


                    {/* RIGHT */}

                    <div>

                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-600">
                            What I do
                        </p>


                        <div className="border-t border-white/[0.08]">

                            {/* Capability 01 */}

                            <div className="aboutCapability group border-b border-white/[0.08] py-8">
                                <div className="flex items-start justify-between gap-8">

                                    <div className="flex gap-6">
                                        <span className="text-xs tracking-[0.2em] text-violet-500">
                                            01
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-medium tracking-tight text-white">
                                                Frontend Development
                                            </h3>

                                            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                                                Responsive interfaces,
                                                component architecture,
                                                animations, and thoughtful
                                                user experiences.
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xl text-zinc-700 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500">
                                        ↗
                                    </span>

                                </div>
                            </div>


                            {/* Capability 02 */}

                            <div className="aboutCapability group border-b border-white/[0.08] py-8">
                                <div className="flex items-start justify-between gap-8">

                                    <div className="flex gap-6">
                                        <span className="text-xs tracking-[0.2em] text-violet-500">
                                            02
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-medium tracking-tight text-white">
                                                Backend Development
                                            </h3>

                                            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                                                APIs, authentication,
                                                databases, server-side logic,
                                                and scalable application
                                                architecture.
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xl text-zinc-700 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500">
                                        ↗
                                    </span>

                                </div>
                            </div>


                            {/* Capability 03 */}

                            <div className="aboutCapability group border-b border-white/[0.08] py-8">
                                <div className="flex items-start justify-between gap-8">

                                    <div className="flex gap-6">
                                        <span className="text-xs tracking-[0.2em] text-violet-500">
                                            03
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-medium tracking-tight text-white">
                                                Full Stack Applications
                                            </h3>

                                            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                                                Connecting polished interfaces
                                                with reliable backend systems
                                                to create complete products.
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xl text-zinc-700 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500">
                                        ↗
                                    </span>

                                </div>
                            </div>


                            {/* Capability 04 */}

                            <div className="aboutCapability group border-b border-white/[0.08] py-8">
                                <div className="flex items-start justify-between gap-8">

                                    <div className="flex gap-6">
                                        <span className="text-xs tracking-[0.2em] text-violet-500">
                                            04
                                        </span>

                                        <div>
                                            <h3 className="text-2xl font-medium tracking-tight text-white">
                                                Deployment & DevOps
                                            </h3>

                                            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                                                Production deployment,
                                                environment configuration,
                                                APIs, and application
                                                reliability.
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xl text-zinc-700 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500">
                                        ↗
                                    </span>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM LINE ================= */}

                <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-xs uppercase tracking-[0.2em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
                    <span>
                        Design · Development · Deployment
                    </span>

                    <span>
                        02 / 04
                    </span>
                </div>

            </div>
        </section>
    );
};

export default About;