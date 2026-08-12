const projects = [
    {
        number: "01",
        slug: "focusflow",
        title: "FocusFlow",
        category: "Productivity Dashboard",
        description:
            "A modern productivity dashboard designed to help users organize tasks, plan their day, track goals, and maintain focused work sessions.",
        image: "/projects/focusflow.png",

        tech: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "GSAP",
        ],

        overview:
            "FocusFlow brings everyday productivity tools into a single focused workspace. The goal was to create an interface that feels simple enough for everyday use while still providing enough functionality for serious productivity.",

        features: [
            "Task management",
            "Daily planner",
            "Goal tracking",
            "Pomodoro timer",
            "Weather integration",
            "Responsive dashboard",
        ],

        challenges:
            "The main challenge was presenting multiple productivity features without making the dashboard feel crowded or complicated. Every feature needed to remain accessible while maintaining a strong visual hierarchy.",

        solution:
            "I designed the application around modular sections and reusable components. Clear spacing, subtle interactions, responsive layouts, and a consistent visual system keep the interface easy to navigate.",

        github: "https://github.com/Aryanbhatti777/FocusFlow-ProductivityDashboard",
        live: "https://aryanbhatti777.github.io/FocusFlow-ProductivityDashboard/",
    },

    {
        number: "02",
        slug: "job-portal",
        title: "Job Portal",
        category: "MERN Application",
        description:
            "A full-stack job platform connecting job seekers with employers through authentication, job listings, applications, and profile management.",
        image: "/projects/jobportal.png",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Cloudinary",
        ],

        overview:
            "A complete MERN-based job platform with separate experiences for job seekers and administrators. The application handles authentication, job management, applications, profiles, and document uploads.",

        features: [
            "User authentication",
            "Job search",
            "Job applications",
            "Admin dashboard",
            "Profile management",
            "Resume uploads",
        ],

        challenges:
            "The application required multiple user roles and several interconnected backend resources. Authentication, authorization, applications, and file uploads needed to work together reliably.",

        solution:
            "I separated the application into modular frontend features and REST API resources. JWT authentication, protected routes, role-based authorization, MongoDB, and Cloudinary were used to build the complete workflow.",

        github: "https://github.com/Aryanbhatti777/job-portal.git",
        live: "https://job-portal-seven-black.vercel.app/",
    },

    {
        number: "03",
        slug: "expensetracker",
        title: "Expense Tracker",
        category: "Vanilla application",
        description:
            "A responsive expense tracker with income, expense, transactions, and a modern visual representation.",
        image: "/projects/expensetracker.png",

        tech: [
            "HTML",
            "CSS",
            "Vanilla JS",
            "Chart.js",
            "LocalStorage",
        ],

        overview:
            "A modern expense tracker focused on making income and expense tracking simple and intuitive across desktop and mobile devices.",

        features: [
            "Add expenses",
            "Add incomes",
            "Filter Transactions",
            "Visual Representation",
            "Flexible currency",
            "Responsive UI",
        ],

        challenges:
            "The challenge was adding the chart using chart.js while keep updating amount synchronized between different parts of the application.",

        solution:
            "I used Chart.js for chart visual represntation and localStorage for persistence. Reusable components and responsive layouts keep the interface consistent throughout the application.",

        github: "https://github.com/Aryanbhatti777/FinTrack-Pro---Expense-Tracker.git",
        live: "https://aryanbhatti777.github.io/FinTrack-Pro---Expense-Tracker/",
    },
];

export default projects;