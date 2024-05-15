
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    keras,
    scaleai,
    cpslo,
    trees,
    fantasybball,
    saferschools,
    minecraftpcg,
    sharkspotting,
    threejs,
    pandas,
    guitartab,
    carhub,
    examplerestaurant
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    // {
    //     id: "contact",
    //     title: "Contact",
    // },
];

const services = [
    {
        title: "Full Stack React Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Machine Learning Research",
        icon: backend,
    },
    {
        title: "Data Science Enthusiast",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Keras",
        icon: keras,
    },
    {
        name: "pandas",
        icon: pandas,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "LLM QA Engineer",
        company_name: "Scale AI",
        icon: scaleai,
        iconBg: "#E6DEDD",
        date: "February 2024 - Current",
        points: [
            "Evaluated AI-generated responses using a Side-by-Side (SxS) scoring system, enhancing model accuracy by ranking based on key dimensions",
            "Conducted comprehensive testing of their LLM, meticulously analyzing functionality, usability, and performance to ensure adherence to quality standards and user requirements",
            "Developed and executed detailed test plans and test cases, identifying defects and anomalies through systematic testing methodologies, and effectively communicated findings to development teams for resolution",
        ],
    },
    {
        title: "IT Help Desk Assistant",
        company_name: "Cal Poly SLO, Information Technology Services",
        icon: cpslo,
        iconBg: "#E6DEDD",
        date: "September 2021 - June 2022",
        points: [
            "Diagnosed and resolved a range of software, hardware, and connectivity issues",
            "Resolved 20+ hardware and software tickets each week",
            "Provided quality assistance to staff with last minute inquiries",
        ],
    },
    {
        title: "Machine Learning Research Assistant",
        company_name: "Cal Poly SLO, Computer Science Department",
        icon: cpslo,
        iconBg: "#E6DEDD",
        date: "June 2021 - September 2021",
        points: [
            "Developed a convolutional neural network capable of detecting marine creatures from drone footage in real-time using YOLOv4",
            "Improved workflow by creating a pipeline to automatically generate random validation and test datasets",
            "Wrote technical documentation reporting experimental procedures, findings, and analysis",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Trees.app",
        icon: trees,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - June 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Carhub",
        description:
            "A device responsive website for a fictional car rental company built using Next.js, TypeScript, and Tailwind CSS. Incorporates external APIs to fetch car metadata and images. Also supports custom searches and filters for manufacturers, model, mileage, etc.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
        ],
        image: carhub,
        source_code_link: "https://github.com/MarrtinJ/Carhub",
        doc_link: "https://nextjs-carhub.vercel.app/"
    },
    {
        name: "Example Restaurant",
        description:
            "Implemented a device responsive static website for a fictional fine dining restaurant based off a Figma design. Website built using base React and CSS.",
        tags: [
            {
                name: "Frontend",
                color: "blue-text-gradient",

            },
            {
                name: "React",
                color: "green-text-gradient",

            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: examplerestaurant,
        source_code_link: "https://github.com/MarrtinJ/example_restaurant",
        doc_link: "https://mj-example-restaurant.netlify.app/"
    },
    {
        name: "Master's Thesis - Modeling Daily Fantasy Basketball",
        description:
            "An attempt to optimize daily fantasy basketball by employing machine learning techniques to predict player performance and evolutionary algorithms to construct lineups.",
        tags: [
            {
                name: "regression models",
                color: "blue-text-gradient",
            },
            {
                name: "evolutionary algorithms",
                color: "green-text-gradient",
            },
            {
                name: "pandas",
                color: "pink-text-gradient",
            },
        ],
        image: fantasybball,
        source_code_link: "https://github.com/MarrtinJ/fantasy-bball-opt",
        doc_link: "https://drive.google.com/file/d/1vzYMU8MoYRs4ttMSMHnUhTkR0rhbB9ra/view?usp=sharing"
    },
    {
        name: "Safer Schools",
        description:
            "A project conducted in collaboration with the World Bank, focused on developing a computer vision model to classify building structures. Improved upon their existing CNN by adjusting the model to accept multiple images as input. Also streamlined the data preprocessing pipeline by incorporating data augmentation.",
        tags: [
            {
                name: "keras",
                color: "blue-text-gradient",
            },
            {
                name: "neural networks",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: saferschools,
        source_code_link: "",
        doc_link: "https://drive.google.com/file/d/1zrEoecVjrORKi_C9rcWQT3v5LXJr-NLq/view?usp=sharing"
    },
    {
        name: "MineCraft Settlement Generator",
        description:
            "Participated in the 2022 Generative Design in MineCraft Competition. Worked with a team to create a biome-responsive algorithm that procedurally generates MineCraft settlements.",
        tags: [
            {
                name: "procedural content generation",
                color: "blue-text-gradient",
            },
            {
                name: "AI in games",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: minecraftpcg,
        source_code_link: "https://github.com/akwong189/gdmc",
        doc_link: "https://drive.google.com/file/d/1efsotEohVcuWJFnyjkHE71jHz0B0jMsg/view?usp=sharing"
    },
    {
        name: "Guitar Tab Generator",
        description:
            "Created a deep learning model using keras to automatically generate guitar tabs from audio files. The model was trained on spectrogram images created from spliced audio files, and predicts the current note being played. These predictions are then used to generate frettings. Capable of generating basic guitar tabs from live audio.",
        tags: [
            {
                name: "deep learning",
                color: "blue-text-gradient",
            },
            {
                name: "keras",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: guitartab,
        source_code_link: "https://github.com/JRice15/csc580-guitar-note",
        doc_link: "https://drive.google.com/file/d/1J6EE3plY-SVMGPmhpEKgQLSZZOUgTf8-/view?usp=sharing"
    },
    {
        name: "Shark Spotting",
        description:
            "Summer research centered around developing a tool to assist marine biologists. Developed a computer vision model capable of detecting sharks from video in real-time using YOLOv4, and a web-appplication to use the model using dash and plotly.",
        tags: [
            {
                name: "computer vision",
                color: "blue-text-gradient",
            },
            {
                name: "YOLOv4",
                color: "green-text-gradient",
            },
            {
                name: "plotly",
                color: "pink-text-gradient",
            },
        ],
        image: sharkspotting,
        source_code_link: "https://github.com/chelojimenez/MarineCreatures",
        doc_link: "https://drive.google.com/file/d/1J6EE3plY-SVMGPmhpEKgQLSZZOUgTf8-/view?usp=sharing"
    },
];

export { services, technologies, experiences, projects };