import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    useLayoutEffect(() => {
        if (!project) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from("#projectBack", {
                opacity: 0,
                y: -15,
                duration: 0.5,
                ease: "power2.out",
            })
                .from("#projectCategory", {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    ease: "power3.out",
                }, "-=0.2")
                .from("#projectTitle", {
                    opacity: 0,
                    y: 60,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.3")
                .from("#projectDescription", {
                    opacity: 0,
                    y: 25,
                    duration: 0.6,
                    ease: "power3.out",
                }, "-=0.35");

            gsap.from("#projectHeroImage", {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectHeroImage",
                    start: "top 85%",
                },
            });

            gsap.from("#projectOverview", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectOverview",
                    start: "top 80%",
                },
            });

            gsap.utils.toArray(".projectFeature, .projectRole, .projectStory").forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                    },
                });
            });

            gsap.from(".projectTech", {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectTech",
                    start: "top 85%",
                },
            });

            gsap.from("#projectImpact", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectImpact",
                    start: "top 80%",
                },
            });

            gsap.from("#projectActions", {
                opacity: 0,
                y: 25,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectActions",
                    start: "top 90%",
                },
            });

            gsap.from("#projectCta", {
                opacity: 0,
                y: 50,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#projectCta",
                    start: "top 80%",
                },
            });
        });

        return () => ctx.revert();
    }, [project]);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-white">
                <div className="text-center">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">Error 404</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Project not found.</h1>
                    <Link to="/" className="mt-8 inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-400 transition hover:border-white/30 hover:text-white">
                        ← Back home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
            <section className="px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40">
                <div className="mx-auto max-w-7xl">
                    <Link id="projectBack" to="/#work" className="group mb-12 inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white sm:mb-16">
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                        Back to work
                    </Link>

                    <p id="projectCategory" className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-violet-400 sm:mb-6 sm:tracking-[0.3em]">
                        {project.category}
                    </p>

                    <h1 id="projectTitle" className="max-w-6xl text-[clamp(3.2rem,11vw,10rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                        {project.title}
                    </h1>

                    <p id="projectDescription" className="mt-8 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-12 sm:text-lg sm:leading-8">
                        {project.description}
                    </p>
                </div>
            </section>

            <section className="px-5 sm:px-8 lg:px-16">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950 sm:rounded-2xl">
                    <img id="projectHeroImage" src={project.image} alt={`${project.title} project preview`} className="h-auto w-full object-cover" />
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-40">
                <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[220px_1fr]">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">Overview</p>
                    </div>

                    <div id="projectOverview">
                        <p className="max-w-4xl text-xl leading-relaxed text-zinc-300 sm:text-3xl lg:text-4xl">
                            {project.overview}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/[0.08] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-20 lg:grid-cols-2">
                        <div>
                            <p className="mb-10 text-xs uppercase tracking-[0.3em] text-zinc-600">Features</p>

                            <div className="space-y-5">
                                {project.features.map((feature, index) => (
                                    <div key={feature} className="projectFeature flex items-start gap-4 border-b border-white/[0.08] pb-5 sm:gap-5">
                                        <span className="pt-1 text-xs tracking-[0.2em] text-violet-500">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-sm text-zinc-300 sm:text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="projectTech">
                            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">04 / Technology</p>
                                    <h2 className="text-2xl font-medium tracking-tight sm:text-4xl">Built with the right tools.</h2>
                                </div>

                                <span className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                                    {project.tech.length} technologies
                                </span>
                            </div>

                            <div className="grid border-l border-t border-white/[0.08] sm:grid-cols-2">
                                {project.tech.map((tech, index) => (
                                    <div key={tech} className="projectTech group relative flex min-h-[90px] items-center gap-4 border-b border-r border-white/[0.08] px-5 py-5 transition-colors duration-500 hover:bg-white/[0.025] sm:min-h-[110px] sm:px-6">
                                        <span className="text-xs font-medium tracking-[0.15em] text-zinc-700 transition-colors duration-300 group-hover:text-violet-500">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white sm:text-lg">
                                            {tech}
                                        </span>

                                        <span className="ml-auto text-sm text-zinc-800 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                                            ↗
                                        </span>

                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projectRole" className="relative overflow-hidden border-b border-white/[0.08] bg-[#080808] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
                <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/[0.06] blur-[140px] sm:h-[500px] sm:w-[500px]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-12 flex flex-col gap-6 border-b border-white/[0.08] pb-10 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-10 bg-violet-500" />
                                <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">03 / My Role</span>
                            </div>

                            <h2 className="text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                                What I <span className="text-zinc-600">built.</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
                            From interface architecture to deployment, here's what I handled throughout the project.
                        </p>
                    </div>

                    <div className="grid border-l border-t border-white/[0.08] sm:grid-cols-2">
                        {project.role.map((role, index) => (
                            <div key={role.title} className="projectRole group relative min-h-[250px] border-b border-r border-white/[0.08] p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:min-h-[280px] sm:p-10 lg:p-12">
                                <div className="mb-10 flex items-center justify-between sm:mb-12">
                                    <span className="text-xs font-medium tracking-[0.2em] text-violet-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-xl text-zinc-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mb-5 max-w-sm text-xl font-medium leading-tight tracking-tight sm:mb-6 sm:text-3xl">
                                    {role.title}
                                </h3>

                                <div className="space-y-3">
                                    {role.items.map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                                            <span className="h-1 w-1 shrink-0 rounded-full bg-violet-500/60" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projectImpact" className="relative border-b border-white/[0.08] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">05 / Outcome</p>

                            <h2 className="max-w-xl text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                                Built to make <span className="text-zinc-600">a difference.</span>
                            </h2>
                        </div>

                        <div className="border-t border-white/[0.08]">
                            <div className="border-b border-white/[0.08] py-7 sm:py-8">
                                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">Performance</p>
                                <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                                    Designed with a focus on fast loading, responsive interactions, and a smooth experience across different screen sizes.
                                </p>
                            </div>

                            <div className="border-b border-white/[0.08] py-7 sm:py-8">
                                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">Experience</p>
                                <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                                    Built around a clean interface and intuitive interactions so users can focus on the product instead of the interface.
                                </p>
                            </div>

                            <div className="border-b border-white/[0.08] py-7 sm:py-8">
                                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">Scalability</p>
                                <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                                    Structured with reusable components and a maintainable architecture that can evolve with the project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-40">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
                    <div className="projectStory">
                        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-violet-400">The Challenge</p>
                        <p className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">{project.challenges}</p>
                    </div>

                    <div className="projectStory">
                        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-violet-400">The Solution</p>
                        <p className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">{project.solution}</p>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/[0.08] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
                <div id="projectActions" className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white">
                        Live Project ↗
                    </a>

                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white">
                        View GitHub ↗
                    </a>

                    <Link to="/#work" className="inline-flex justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-500 transition-all duration-300 hover:border-white/30 hover:text-white">
                        More projects
                    </Link>
                </div>
            </section>

            <section id="projectCta" className="relative overflow-hidden border-t border-white/[0.08] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-44">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[130px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-violet-400 sm:mb-8 sm:tracking-[0.3em]">
                        Have a project in mind?
                    </p>

                    <h2 className="text-[clamp(3.3rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
                        Let's build
                        <br />
                        <span className="text-zinc-600">something great.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-lg">
                        I'm always interested in working on thoughtful products, ambitious ideas, and interesting challenges.
                    </p>

                    <a href="mailto:bhattiaryan777@gmail.com" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white sm:mt-10">
                        Start a conversation
                        <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                            <Send size={20} />
                        </span>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;