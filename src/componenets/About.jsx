import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#aboutHeader",
          start: "top 80%",
          once: true,
        },
      });

      headerTl
        .from("#aboutEyebrow", {
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
          "-=0.4",
        );

      gsap.from("#aboutDescription", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#aboutDescription",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("#aboutSecondary", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#aboutSecondary",
          start: "top 85%",
          once: true,
        },
      });

      const stats = gsap.utils.toArray(".aboutStat");

      gsap.from(stats, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#aboutStats",
          start: "top 82%",
          once: true,
        },
      });

      const capabilities = gsap.utils.toArray(".aboutCapability");

      gsap.from(capabilities, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "#aboutCapabilities",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("#aboutFooter", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#aboutFooter",
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "01", label: "Developer" },
    { value: "Full", label: "Stack" },
    { value: "Web", label: "Applications" },
    { value: "India", label: "Based" },
  ];

  const capabilities = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Responsive interfaces, component architecture, animations, and thoughtful user experiences.",
    },
    {
      number: "02",
      title: "Backend Development",
      description: "APIs, authentication, databases, server-side logic, and scalable application architecture.",
    },
    {
      number: "03",
      title: "Full Stack Applications",
      description:"Connecting polished interfaces with reliable backend systems to create complete products.",
    },
    {
      number: "04",
      title: "Deployment & DevOps",
      description:"Production deployment, environment configuration, APIs, and application reliability.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-5 py-28 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute -right-56 top-1/4
          h-[450px] w-[450px] rounded-full
          bg-violet-600/[0.06] blur-[140px]
          sm:-right-64 sm:h-[550px] sm:w-[550px] sm:blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none absolute -left-64 bottom-0
          h-[350px] w-[350px] rounded-full
          bg-violet-500/[0.025] blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          id="aboutHeader"
          className="border-b border-white/[0.08] pb-12 sm:pb-16"
        >
          <p
            id="aboutEyebrow"
            className="
              mb-7 flex items-center gap-3
              text-[10px] font-medium uppercase
              tracking-[0.28em] text-violet-400
              sm:mb-8 sm:gap-4 sm:text-xs sm:tracking-[0.3em]
            "
          >
            <span className="h-px w-8 bg-violet-500 sm:w-12" />
            About me
          </p>

          <h2
            id="aboutTitle"
            className="
              max-w-6xl
              text-[clamp(3.3rem,11vw,8rem)]
              font-semibold leading-[0.88]
              tracking-[-0.075em]
              sm:text-[clamp(4.5rem,9vw,8rem)]
            "
          >
            I build things
            <br />
            <span className="text-zinc-600">that make sense.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div
          className="
            grid gap-16 py-14
            sm:py-16
            lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-24
          "
        >
          {/* Left Column */}
          <div>
            <p
              id="aboutDescription"
              className="
                max-w-xl text-base leading-7 text-zinc-400
                sm:text-lg sm:leading-8 lg:text-xl
              "
            >
              I'm a full stack developer focused on building modern web
              applications that are fast, scalable, and enjoyable to use.
            </p>

            <p
              id="aboutSecondary"
              className="
                mt-6 max-w-xl text-sm leading-7 text-zinc-600
                sm:mt-8 sm:text-base
              "
            >
              I care about the details behind the interface as much as the
              interface itself — from responsive layouts and smooth interactions
              to APIs, authentication, databases, and deployment.
            </p>

            {/* Stats */}
            <div
              id="aboutStats"
              className="
                mt-12 grid grid-cols-2 gap-px overflow-hidden
                rounded-2xl border border-white/[0.08]
                bg-white/[0.08]
                sm:mt-16
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    aboutStat group bg-[#080808]
                    p-5 transition-colors duration-500
                    hover:bg-white/[0.025] sm:p-6
                  "
                >
                  <span
                    className="
                      block text-2xl font-semibold tracking-tight text-white
                      transition-colors duration-300
                      group-hover:text-violet-400 sm:text-3xl
                    "
                  >
                    {stat.value}
                  </span>

                  <span
                    className="
                      mt-2 block text-[9px] uppercase
                      tracking-[0.18em] text-zinc-600
                      sm:text-xs sm:tracking-[0.2em]
                    "
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <p
              className="
                mb-7 text-[10px] uppercase
                tracking-[0.28em] text-zinc-600
                sm:mb-8 sm:text-xs sm:tracking-[0.3em]
              "
            >
              What I do
            </p>

            <div
              id="aboutCapabilities"
              className="border-t border-white/[0.08]"
            >
              {capabilities.map((capability) => (
                <div
                  key={capability.number}
                  className="
                    aboutCapability group
                    border-b border-white/[0.08]
                    py-7 sm:py-8
                  "
                >
                  <div
                    className="
                      flex items-start justify-between
                      gap-4 sm:gap-8
                    "
                  >
                    <div
                      className="
                        flex min-w-0 gap-4
                        sm:gap-6
                      "
                    >
                      <span
                        className="
                          shrink-0 pt-1 text-[10px]
                          tracking-[0.2em] text-violet-500
                          sm:text-xs
                        "
                      >
                        {capability.number}
                      </span>

                      <div>
                        <h3
                          className="
                            text-xl font-medium
                            tracking-[-0.02em] text-white
                            sm:text-2xl
                          "
                        >
                          {capability.title}
                        </h3>

                        <p
                          className="
                            mt-2 max-w-md text-sm
                            leading-6 text-zinc-600
                            sm:mt-3
                          "
                        >
                          {capability.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        shrink-0 text-lg text-zinc-700
                        transition-all duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-violet-500
                        sm:text-xl
                      "
                    >
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          id="aboutFooter"
          className="
            flex flex-col gap-3
            border-t border-white/[0.08]
            pt-7 text-[10px] uppercase
            tracking-[0.18em] text-zinc-700
            sm:flex-row sm:items-center
            sm:justify-between sm:gap-4
            sm:pt-8 sm:text-xs sm:tracking-[0.2em]
          "
        >
          <span>Design · Development · Deployment</span>
          <span>02 / 04</span>
        </div>
      </div>
    </section>
  );
};

export default About;
