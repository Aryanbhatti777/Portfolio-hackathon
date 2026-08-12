import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {

    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );


    useLayoutEffect(() => {

        if (!project) return;

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                delay: 0.2,
            });


            // =========================
            // HERO
            // =========================

            tl.from("#projectBack", {
                opacity: 0,
                y: -15,
                duration: 0.5,
                ease: "power2.out",
            })
                .from(
                    "#projectCategory",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )
                .from(
                    "#projectTitle",
                    {
                        opacity: 0,
                        y: 70,
                        duration: 0.9,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    "#projectDescription",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );


            // =========================
            // HERO IMAGE
            // =========================

            gsap.from("#projectHeroImage", {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 1.3,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#projectHeroImage",
                    start: "top 85%",
                },
            });


            // =========================
            // OVERVIEW
            // =========================

            gsap.from("#projectOverview", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#projectOverview",
                    start: "top 80%",
                },
            });


            // =========================
            // FEATURES
            // =========================

            gsap.utils
                .toArray(".projectFeature")
                .forEach((feature) => {

                    gsap.from(feature, {
                        opacity: 0,
                        y: 25,
                        duration: 0.5,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: feature,
                            start: "top 85%",
                        },
                    });

                });


            // =========================
            // TECH
            // =========================

            gsap.from(".projectTech", {
                opacity: 0,
                y: 15,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,

                scrollTrigger: {
                    trigger: "#projectTech",
                    start: "top 85%",
                },
            });


            // =========================
            // CHALLENGE / SOLUTION
            // =========================

            gsap.utils
                .toArray(".projectStory")
                .forEach((story) => {

                    gsap.from(story, {
                        opacity: 0,
                        y: 40,
                        duration: 0.7,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: story,
                            start: "top 85%",
                        },
                    });

                });


            // =========================
            // ACTIONS
            // =========================

            gsap.from("#projectActions", {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#projectActions",
                    start: "top 90%",
                },
            });

        });

        return () => ctx.revert();

    }, [project]);


    // =========================
    // NOT FOUND
    // =========================

    if (!project) {

        return (
            <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-white">

                <div className="text-center">

                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
                        Error 404
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight">
                        Project not found.
                    </h1>

                    <Link
                        to="/"
                        className="mt-8 inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-400 transition hover:border-white/30 hover:text-white"
                    >
                        ← Back home
                    </Link>

                </div>

            </main>
        );
    }


    return (
        <main className="min-h-screen overflow-hidden bg-[#080808] text-white">

            {/* =========================
                HERO
            ========================= */}

            <section className="px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-40">

                <div className="mx-auto max-w-7xl">

                    <Link
                        id="projectBack"
                        to="/#work"
                        className="group mb-16 inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                        </span>

                        Back to work
                    </Link>


                    <p
                        id="projectCategory"
                        className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-violet-400"
                    >
                        {project.category}
                    </p>


                    <h1
                        id="projectTitle"
                        className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.08em]"
                    >
                        {project.title}
                    </h1>


                    <p
                        id="projectDescription"
                        className="mt-12 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
                    >
                        {project.description}
                    </p>

                </div>

            </section>


            {/* =========================
                HERO IMAGE
            ========================= */}

            <section className="px-6 sm:px-10 lg:px-16">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950">

                    <img
                        id="projectHeroImage"
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-auto w-full object-cover"
                    />

                </div>

            </section>


            {/* =========================
                OVERVIEW
            ========================= */}

            <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-40">

                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[250px_1fr]">

                    <div>

                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                            Overview
                        </p>

                    </div>


                    <div id="projectOverview">

                        <p className="max-w-4xl text-2xl leading-relaxed text-zinc-300 sm:text-4xl sm:leading-relaxed">
                            {project.overview}
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                FEATURES + TECHNOLOGY
            ========================= */}

            <section className="border-y border-white/[0.08] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

                <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">


                    {/* FEATURES */}

                    <div>

                        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-zinc-600">
                            Features
                        </p>


                        <div className="space-y-5">

                            {project.features.map((feature, index) => (

                                <div
                                    key={feature}
                                    className="projectFeature flex items-center gap-5 border-b border-white/[0.08] pb-5"
                                >

                                    <span className="text-xs tracking-[0.2em] text-violet-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-base text-zinc-300 sm:text-lg">
                                        {feature}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* TECHNOLOGY */}

                    <div id="projectTech">

                        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-zinc-600">
                            Technology
                        </p>


                        <div className="flex flex-wrap gap-3">

                            {project.tech.map((tech) => (

                                <span
                                    key={tech}
                                    className="projectTech rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                CHALLENGE / SOLUTION
            ========================= */}

            <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-40">

                <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">


                    <div className="projectStory">

                        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-violet-400">
                            The Challenge
                        </p>

                        <p className="max-w-xl text-xl leading-8 text-zinc-400">
                            {project.challenges}
                        </p>

                    </div>


                    <div className="projectStory">

                        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-violet-400">
                            The Solution
                        </p>

                        <p className="max-w-xl text-xl leading-8 text-zinc-400">
                            {project.solution}
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                ACTIONS
            ========================= */}

            <section className="border-t border-white/[0.08] px-6 py-20 sm:px-10 lg:px-16">

                <div
                    id="projectActions"
                    className="mx-auto flex max-w-7xl flex-wrap gap-4"
                >

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white"
                    >
                        Live Project ↗
                    </a>


                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
                    >
                        View GitHub ↗
                    </a>


                    <Link
                        to="/#work"
                        className="rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-500 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                        More projects
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default ProjectDetails;