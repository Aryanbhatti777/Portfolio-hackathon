import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        number: "01",
        title: "Frontend",
        description:
            "Building responsive interfaces with strong component architecture, smooth interactions, and modern UI patterns.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "React Router",
            "Tailwind CSS",
            "GSAP",
            "Vite",
            "Axios",
            "Capacitor",
        ],
    },
    {
        number: "02",
        title: "Backend",
        description:
            "Developing reliable APIs, authentication systems, databases, and server-side application logic.",
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "REST APIs",
            "JWT",
            "Cookie Authentication",
        ],
    },
    {
        number: "03",
        title: "Tools & Deployment",
        description:
            "Taking applications from development to production with modern tooling, cloud services, and deployment workflows.",
        technologies: [
            "Git",
            "GitHub",
            "npm",
            "Postman",
            "Vercel",
            "Railway",
            "Cloudinary",
        ],
    },
    {
        number: "04",
        title: "Development",
        description:
            "Focusing on maintainable code, usability, performance, accessibility, and real-world product development.",
        technologies: [
            "Responsive Design",
            "API Integration",
            "Authentication",
            "Authorization",
            "CRUD Applications",
            "Component Architecture",
            "Performance",
            "Clean Code",
            "Accessibility",
        ],
    },
];

const Skills = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#skillsHeader",
                    start: "top 80%",
                    once: true,
                },
            });

            headerTl
                .from("#skillsEyebrow", {
                    opacity: 0,
                    y: 25,
                    duration: 0.7,
                    ease: "power3.out",
                })
                .from(
                    "#skillsTitle",
                    {
                        opacity: 0,
                        y: 60,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    "#skillsDescription",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );

            gsap.utils.toArray(".skillCategory").forEach((category) => {
                const tags = category.querySelectorAll(".skillTech");

                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: category,
                        start: "top 82%",
                        once: true,
                    },
                });

                cardTl
                    .fromTo(
                        category,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        }
                    )
                    .fromTo(
                        tags,
                        { opacity: 0, y: 12 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            ease: "power2.out",
                            stagger: 0.06,
                        },
                        "-=0.35"
                    );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-40"
        >
            <div className="pointer-events-none absolute -left-72 top-1/3 h-[550px] w-[550px] rounded-full bg-violet-600/[0.06] blur-[170px]" />

            <div className="pointer-events-none absolute -right-72 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.04] blur-[160px]" />

            <div className="relative mx-auto max-w-7xl">
                <div
                    id="skillsHeader"
                    className="grid gap-10 border-b border-white/[0.08] pb-14 lg:grid-cols-[1fr_350px] lg:items-end lg:pb-16"
                >
                    <div>
                        <p
                            id="skillsEyebrow"
                            className="mb-7 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-violet-400 sm:text-xs"
                        >
                            <span className="h-px w-8 bg-violet-500 sm:w-12" />
                            Skills & Expertise
                        </p>

                        <h2
                            id="skillsTitle"
                            className="max-w-5xl text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]"
                        >
                            Built with
                            <br />
                            <span className="text-zinc-600">
                                the right tools.
                            </span>
                        </h2>
                    </div>

                    <p
                        id="skillsDescription"
                        className="max-w-sm text-sm leading-7 text-zinc-500 sm:text-base"
                    >
                        A practical toolkit built around modern frontend
                        development, backend systems, APIs, and production
                        deployment.
                    </p>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:mt-20 md:grid-cols-2">
                    {skills.map((skill) => (
                        <article
                            key={skill.number}
                            className="skillCategory group relative bg-[#080808] p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-9 lg:p-12"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-[11px] font-medium tracking-[0.25em] text-violet-500">
                                        {skill.number}
                                    </span>
                                    <span className="h-px w-6 bg-white/[0.08]" />
                                </div>

                                <span className="text-lg text-zinc-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500">
                                    ↗
                                </span>
                            </div>

                            <h3 className="text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
                                {skill.title}
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
                                {skill.description}
                            </p>

                            <div className="my-7 h-px w-full bg-white/[0.08]" />

                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
                                    Technologies
                                </span>

                                <span className="text-[10px] text-zinc-800">
                                    {String(skill.technologies.length).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>
                            </div>

                            <div className="skillTechWrap flex flex-wrap gap-2">
                                {skill.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="skillTech inline-flex min-h-[34px] items-center rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[11px] font-medium leading-none text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="pointer-events-none absolute bottom-6 right-8 hidden select-none text-[9rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.015] lg:block">
                                {skill.number}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-7 text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
                    <span>Frontend · Backend · Deployment</span>
                    <span>03 / 04</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;