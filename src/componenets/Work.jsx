import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router";

gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#workHeader",
          start: "top 80%",
        },
      });

      tl1
        .from("#workEyebrow", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          "#workTitle",
          {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          "#workDescription",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7",
        );

      gsap.utils.toArray(".projectImage").forEach((image) => {
        gsap.from(image, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        });
      });

      gsap.utils.toArray(".projectTitle").forEach((title) => {
        gsap.from(title, {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          y: 50,
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".projectCategory").forEach((cat) => {
        gsap.from(cat, {
          y: 15,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cat,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".projectDescription").forEach((desc) => {
        gsap.from(desc, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: desc,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".projectArrow").forEach((arrow) => {
        gsap.from(arrow, {
          x: 10,
          y: 10,
          rotation: -20,
          scale: 0.7,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: arrow,
            start: "top 85%",
          },
        });
      });
      gsap.utils.toArray(".projectNumber").forEach((num) => {
        gsap.from(num, {
          y: 15,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: num,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".projectImage").forEach((img) => {
        gsap.to(img, {
          y: -40,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray(".techWrap").forEach((tech) => {
        const tags = tech.querySelectorAll(".tech");
        gsap.from(tags, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tech,
            start: "top 85%",
          },
          stagger: {
            each: 0.2,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
  const projects = [
    {
      number: "01",
      title: "FocusFlow",
      slug: "focusflow",
      category: "Productivity Dashboard",
      description:
        "A modern productivity dashboard designed to bring tasks, planning, goals, and daily focus into one streamlined experience.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "/projects/focusflow.png",
      featured: true,
    },
    {
      number: "02",
      title: "JobPortal",
      slug: "job-portal",
      category: "Full Stack Application",
      description:
        "A complete recruitment platform with authentication, job management, applications, profiles, and role-based experiences.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/projects/jobportal.png",
      featured: false,
    },
    {
      number: "03",
      slug: "expensetracker",
      title: "Expense Tracker",
      category: "Vanilla Application",
      description:
        "A responsive expense tracker with income, expense, transactions, and a modern visual representation.",
      tech: ["HTML", "CSS", "Vanilla js", "Chart.js"],
      image: "/projects/expensetracker.png",
      featured: false,
    },
  ];

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -right-72 top-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div
          id="workHeader"
          className="grid gap-10 border-b border-white/[0.08] pb-16 lg:grid-cols-[1fr_350px] lg:items-end"
        >
          <div>
            <div id="workEyebrow" className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-violet-500" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                Selected Work
              </span>
            </div>

            <h2
              id="workTitle"
              className="max-w-5xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-0.075em]"
            >
              Things I've
              <br />
              <span className="text-zinc-600">built.</span>
            </h2>
          </div>

          <p
            id="workDescription"
            className="max-w-sm text-sm leading-7 text-zinc-500 sm:text-base"
          >
            A selection of digital products and experiences built with a focus
            on performance, usability, and thoughtful interaction.
          </p>
        </div>

        {/* ================= PROJECTS ================= */}

        <div id="projects" className="mt-20">
          {projects.map((project, index) => (
            <Link
              key={project.number}
              to={`/projects/${project.slug}`}
              className={`projectCard group block cursor-pointer border-b border-white/[0.08] py-16 lg:py-24 ${
                index === 0 ? "pt-0" : ""
              }`}
            >
              {/* Project top information */}

              <div className="mb-10 grid gap-6 lg:grid-cols-[80px_1fr_auto] lg:items-end">
                {/* Number */}

                <div className="projectNumber text-sm font-medium tracking-[0.2em] text-zinc-600">
                  {project.number}
                </div>

                {/* Title */}

                <div>
                  <p className="projectCategory mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {project.category}
                  </p>

                  <h3 className="projectTitle text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow */}

                <div className="hidden lg:block">
                  <div className="projectArrow flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-500 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-violet-500/50 group-hover:bg-violet-500 group-hover:text-white">
                    ↗
                  </div>
                </div>
              </div>

              {/* Project image */}

              <div
                className={`projectImageWrap relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950 ${
                  project.featured ? "aspect-[16/9]" : "aspect-[16/8]"
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="projectImage h-[110%] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Hover label */}

                <div className="absolute bottom-6 left-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-8 sm:left-8">
                  <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    View project ↗
                  </span>
                </div>
              </div>

              {/* Project bottom information */}

              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
                {/* Description */}

                <p className="projectDescription max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="techWrap flex flex-wrap gap-2 lg:justify-center">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="tech h-fit rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Mobile arrow */}

                <div className="lg:hidden">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-500 transition-all duration-300 group-hover:border-violet-500/50 group-hover:bg-violet-500 group-hover:text-white">
                    ↗
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <div
          id="workFooter"
          className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
            More work coming soon
          </p>

          <a
            href="https://github.com/Aryanbhatti777"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-3 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            Explore GitHub
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
