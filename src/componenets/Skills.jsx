import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = {
    frontend: {
        number: "01",
        title: "Frontend",
        description:
            "Building responsive interfaces with strong component architecture and smooth interactions.",
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

    backend: {
        number: "02",
        title: "Backend",
        description:
            "Developing reliable APIs, authentication systems, and data-driven applications.",
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

    tools: {
        number: "03",
        title: "Tools & Deployment",
        description:
            "Taking applications from development to production with modern tooling and deployment workflows.",
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

    practices: {
        number: "04",
        title: "Development",
        description:
            "Focusing on maintainable code, usability, performance, and real-world product development.",
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
};

const Skills = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // =====================================================
            // HEADER ANIMATION
            // =====================================================

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


            // =====================================================
            // SKILL CARD ANIMATIONS
            // =====================================================

            gsap.utils.toArray(".skillCategory").forEach((category) => {
                const tags = category.querySelectorAll(".skillTech");

                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: category,
                        start: "top 80%",
                        once: true,
                    },
                });

                // Card
                cardTl.fromTo(
                    category,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                );

                // Technology pills
                cardTl.fromTo(
                    tags,
                    {
                        opacity: 0,
                        y: 15,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        ease: "power2.out",
                        stagger: 0.07,
                    },
                    "-=0.3"
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
        >
            {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

            <div className="pointer-events-none absolute -left-72 top-1/3 h-[600px] w-[600px] rounded-full bg-violet-600/[0.06] blur-[170px]" />

            <div className="pointer-events-none absolute -right-72 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.04] blur-[160px]" />


            <div className="relative mx-auto max-w-7xl">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    id="skillsHeader"
                    className="grid gap-10 border-b border-white/[0.08] pb-16 lg:grid-cols-[1fr_350px] lg:items-end"
                >
                    <div>

                        {/* Eyebrow */}

                        <p
                            id="skillsEyebrow"
                            className="mb-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400"
                        >
                            <span className="h-px w-12 bg-violet-500" />

                            Skills & Expertise
                        </p>


                        {/* Title */}

                        <h2
                            id="skillsTitle"
                            className="max-w-5xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-0.075em]"
                        >
                            Built with
                            <br />

                            <span className="text-zinc-600">
                                the right tools.
                            </span>
                        </h2>

                    </div>


                    {/* Description */}

                    <p
                        id="skillsDescription"
                        className="max-w-sm text-sm leading-7 text-zinc-500 sm:text-base"
                    >
                        A practical toolkit built around modern frontend
                        development, backend systems, APIs, and production
                        deployment.
                    </p>

                </div>


                {/* =================================================
                    SKILL GRID
                ================================================= */}

                <div
                    className="
                        mt-20
                        grid
                        gap-px
                        overflow-hidden
                        border
                        border-white/[0.08]
                        bg-white/[0.08]
                        md:grid-cols-2
                    "
                >

                    {Object.values(skills).map((skill) => (

                        <div
                            key={skill.number}
                            className="
                                skillCategory
                                group
                                relative
                                bg-[#080808]
                                p-8
                                transition-colors
                                duration-500
                                hover:bg-white/[0.025]
                                sm:p-10
                                lg:p-12
                            "
                        >

                            {/* =================================================
                                CARD HEADER
                            ================================================= */}

                            <div className="mb-10 flex items-center justify-between">

                                {/* Number */}

                                <span
                                    className="
                                        text-xs
                                        font-medium
                                        tracking-[0.25em]
                                        text-violet-500
                                    "
                                >
                                    {skill.number}
                                </span>


                                {/* Arrow */}

                                <span
                                    className="
                                        text-xl
                                        text-zinc-700
                                        transition-all
                                        duration-500
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                        group-hover:text-violet-500
                                    "
                                >
                                    ↗
                                </span>

                            </div>


                            {/* =================================================
                                TITLE
                            ================================================= */}

                            <h3
                                className="
                                    text-3xl
                                    font-medium
                                    tracking-[-0.04em]
                                    text-white
                                    sm:text-4xl
                                "
                            >
                                {skill.title}
                            </h3>


                            {/* =================================================
                                DESCRIPTION
                            ================================================= */}

                            <p
                                className="
                                    mt-4
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-zinc-500
                                    sm:text-base
                                "
                            >
                                {skill.description}
                            </p>


                            {/* =================================================
                                DIVIDER
                            ================================================= */}

                            <div className="my-6 h-px w-full bg-white/[0.08]" />


                            {/* =================================================
                                TECHNOLOGIES
                            ================================================= */}

                            <div className="skillTechWrap flex flex-wrap gap-2">

                                {skill.technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="
                                            skillTech
                                            inline-flex
                                            items-center
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                            px-3.5
                                            py-2
                                            text-xs
                                            font-medium
                                            text-zinc-400
                                            transition-all
                                            duration-300
                                            hover:border-violet-500/40
                                            hover:bg-violet-500/10
                                            hover:text-violet-300
                                        "
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>


                {/* =================================================
                    BOTTOM META
                ================================================= */}

                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-white/[0.08]
                        pt-8
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-zinc-700
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <span>
                        Frontend · Backend · Deployment
                    </span>

                    <span>
                        03 / 04
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Skills;