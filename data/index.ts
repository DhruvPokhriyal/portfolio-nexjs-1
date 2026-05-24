export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I build systems that scale — from 0 to production, end-to-end.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "B.Tech CSE @ IIT Tirupati",
        description: "CGPA: 8.18",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Full-Stack · AI/ML · System Design enthusiast.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building PickMyVibe - AI Color Palette Generator",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Vigil360 — Real-Time Fraud Detection Platform",
        des: "A streaming-native compliance engine with KYC processing achieving 3x the industry standard. Built with a cross-functional team of 8 members.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/git.svg"],
        link: "https://github.com/DhruvPokhriyal",
    },
    {
        id: 2,
        title: "StudySnapAI — AI-Powered Learning Platform",
        des: "End-to-end EdTech platform with AI-driven summarization. Scaled to 50 users within 1.5 weeks of launch with FastAPI backend and React frontend.",
        img: "/p2.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/DhruvPokhriyal/dashboard-studysnapai",
    },
    {
        id: 3,
        title: "Student Affairs Website — IIT Tirupati",
        des: "Official full-stack institutional platform serving 2,000+ concurrent users. Remediated critical defects and optimized performance in collaboration with the Computer Center team.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://sa.iittp.ac.in/",
    },
    {
        id: 4,
        title: "Sangam — Real-Time Translation Chat App",
        des: "AI-powered chat application with real-time cross-language translation using React, Firebase, and Google Gemini AI. Glassmorphism UI with TailwindCSS.",
        img: "/p4.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/DhruvPokhriyal/sangam",
    },
];

export const testimonials = [
    {
        quote: "Dhruv's ability to architect and deliver production-grade systems is exceptional. His work on Vigil360 demonstrated deep technical depth — from Kafka pipelines to facial recognition — all delivered ahead of schedule.",
        name: "Team Lead",
        title: "Vigil360 Project, IIT Tirupati",
    },
    {
        quote: "Dhruv led the StudySnapAI platform from concept to launch. The product was polished, thoughtfully built, and had 50 real users in under two weeks — that kind of execution is rare.",
        name: "Peer Collaborator",
        title: "EdTech Project, IIT Tirupati",
    },
    {
        quote: "Working with Dhruv on the Student Affairs website was a pleasure. He identified critical performance bottlenecks and optimized the system to handle 2000+ concurrent users reliably.",
        name: "Computer Center Team",
        title: "IIT Tirupati",
    },
];

export const companies = [
    {
        id: 1,
        name: "docker",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
    {
        id: 2,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 3,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 4,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 5,
        name: "git",
        img: "/git.svg",
        nameImg: "/git.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Deputy Contingent Leader — Inter IIT Council",
        desc: "Leading IIT Tirupati's contingent at national Inter IIT events. Coordinating strategy across technical and cultural domains. (Dec 2025 – Present)",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Head — Google Developer Group, IIT Tirupati",
        desc: "Leading the GDG chapter at IIT Tirupati, organising developer events, workshops, and fostering a culture of open-source learning. (Aug 2025 – Present)",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Deputy Head — AI ML Club, IIT Tirupati",
        desc: "Driving AI/ML initiatives, study groups, and project collaborations within the club. Ranked 5th nationally at Inter IIT Tech Meet 14.0. (Jan 2025 – Present)",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Core Member — Coding Club, IIT Tirupati",
        desc: "Organising competitive programming contests, hackathons, and mentoring juniors in DSA and software development. (Jan 2025 – Present)",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/DhruvPokhriyal",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/dhruvpokhriyal/",
    },
];
