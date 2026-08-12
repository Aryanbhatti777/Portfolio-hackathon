import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

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
  },
  {
    number: "03",
    title: "Expense Tracker",
    slug: "expensetracker",
    category: "Vanilla Application",
    description:
      "A responsive expense tracker with income, expenses, transactions, and a clear visual representation of financial activity.",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
    image: "/projects/expensetracker.png",
  },
];

const Work = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#workHeader",
          start: "top 80%",
          once: true,
        },
      });

      headerTl
        .from("#workEyebrow", {
          opacity: 0,
          y: 25,
          duration: 0.7,
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
          "-=0.4",
        )
        .from(
          "#workDescription",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = document.querySelector("#projectTrack");
        const wrapper = document.querySelector("#projectsHorizontal");
        const panels = gsap.utils.toArray(".projectPanel");

        if (!track || !wrapper || panels.length === 0) return;

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - wrapper.clientWidth);

        const horizontalTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            pinSpacing: true,
          },
        });

        panels.forEach((panel) => {
          const number = panel.querySelector(".panelNumber");
          const category = panel.querySelector(".panelCategory");
          const title = panel.querySelector(".panelTitle");
          const description = panel.querySelector(".panelDescription");
          const technologies = panel.querySelectorAll(".panelTech");
          const button = panel.querySelector(".panelButton");
          const imageWrap = panel.querySelector(".projectPanelImage");
          const image = panel.querySelector(".projectPanelImage img");
          const indicator = panel.querySelector(".panelIndicator");

          const contentTl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 80%",
              end: "center 45%",
              once: true,
            },
          });

          contentTl
            .from(number, {
              opacity: 0,
              y: 20,
              duration: 0.45,
              ease: "power2.out",
            })
            .from(
              category,
              {
                opacity: 0,
                y: 20,
                duration: 0.45,
                ease: "power3.out",
              },
              "-=0.25",
            )
            .from(
              title,
              {
                opacity: 0,
                y: 60,
                duration: 0.75,
                ease: "power3.out",
              },
              "-=0.3",
            )
            .from(
              description,
              {
                opacity: 0,
                y: 25,
                duration: 0.55,
                ease: "power3.out",
              },
              "-=0.35",
            )
            .from(
              technologies,
              {
                opacity: 0,
                y: 12,
                duration: 0.35,
                stagger: 0.07,
                ease: "power2.out",
              },
              "-=0.25",
            )
            .from(
              button,
              {
                opacity: 0,
                y: 20,
                scale: 0.95,
                duration: 0.45,
                ease: "power3.out",
              },
              "-=0.15",
            );

          gsap.from(imageWrap, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 80%",
              once: true,
            },
          });

          gsap.to(image, {
            scale: 1.05,
            yPercent: -2,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          });

          gsap.from(indicator, {
            opacity: 0,
            y: 10,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 70%",
              once: true,
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        const panels = gsap.utils.toArray(".projectPanel");

        panels.forEach((panel) => {
          const number = panel.querySelector(".panelNumber");
          const category = panel.querySelector(".panelCategory");
          const title = panel.querySelector(".panelTitle");
          const description = panel.querySelector(".panelDescription");
          const technologies = panel.querySelectorAll(".panelTech");
          const button = panel.querySelector(".panelButton");
          const imageWrap = panel.querySelector(".projectPanelImage");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              once: true,
            },
          });

          tl.from(number, {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power3.out",
          })
            .from(
              category,
              {
                opacity: 0,
                y: 15,
                duration: 0.4,
                ease: "power3.out",
              },
              "-=0.25",
            )
            .from(
              title,
              {
                opacity: 0,
                y: 45,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.25",
            )
            .from(
              description,
              {
                opacity: 0,
                y: 25,
                duration: 0.5,
                ease: "power3.out",
              },
              "-=0.3",
            )
            .from(
              technologies,
              {
                opacity: 0,
                y: 10,
                duration: 0.35,
                stagger: 0.06,
                ease: "power2.out",
              },
              "-=0.2",
            )
            .from(
              button,
              {
                opacity: 0,
                y: 15,
                duration: 0.45,
                ease: "power3.out",
              },
              "-=0.15",
            );

          gsap.from(imageWrap, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              once: true,
            },
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute -right-72 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

      <div
        id="workHeader"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-16 lg:pb-20 lg:pt-40"
      >
        <div className="grid gap-10 border-b border-white/[0.08] pb-14 lg:grid-cols-[1fr_350px] lg:items-end">
          <div>
            <div
              id="workEyebrow"
              className="mb-7 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-violet-400 sm:text-xs"
            >
              <span className="h-px w-8 bg-violet-500 sm:w-12" />
              Selected Work
            </div>

            <h2
              id="workTitle"
              className="max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]"
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
      </div>

      <div id="projectsHorizontal" className="relative w-full overflow-hidden md:h-screen">
        <div id="projectTrack" className="flex w-full flex-col md:h-full md:w-max md:flex-row">
          {projects.map((project) => (
            <article
              key={project.number}
              className="projectPanel relative min-h-screen w-full shrink-0 md:h-screen md:w-screen"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/[0.08] via-transparent to-transparent" />

              <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:h-full lg:px-16 lg:py-10">
                <div className="projectPanelContent grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="panelNumber text-xs tracking-[0.25em] text-violet-500">
                        {project.number}
                      </span>

                      <span className="h-px w-10 bg-white/10" />

                      <span className="panelCategory text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="panelTitle text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
                      {project.title}
                    </h3>

                    <p className="panelDescription mt-7 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="panelTech inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-zinc-500 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="panelButton group mt-9 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-500 hover:text-white"
                    >
                      View project
                      <span className="text-base transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>
                    </Link>
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="projectPanelImage group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top will-change-transform"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:left-7">
                      <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md sm:text-xs">
                        View project ↗
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="panelIndicator absolute bottom-7 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-16 lg:right-16">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    Scroll to explore
                  </span>

                  <span className="text-[10px] tracking-[0.2em] text-zinc-700">
                    {project.number} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        id="workFooter"
        className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-16"
      >
        <div className="flex flex-col gap-5 border-t border-white/[0.08] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
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