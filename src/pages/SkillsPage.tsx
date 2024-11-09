import Result from "../components/Result";

const skillsArray = [
    {
        image: "/src/assets/images/skills-page/javascript-logo.png",
        header: "JavaScript",
        subheader: "feb. 2023 - present",
        url: "https://www.javascript.com/",
        title: "JavaScript",
        description: "JavaScript is a versatile language primarily used for creating interactive web pages and can run on both the client and server sides."
    },
    {
        image: "/src/assets/images/skills-page/react-js-logo.png",
        header: "ReactJS",
        subheader: "jun. 2023 - present",
        url: "https://react.dev/",
        title: "ReactJS",
        description: "ReactJS is a JavaScript library for building fast, interactive user interfaces, primarily for single-page applications."
    },
    {
        image: "/src/assets/images/skills-page/node-js-logo.png",
        header: "NodeJS",
        subheader: "aug. 2023 - present",
        url: "https://nodejs.org/en/",
        title: "NodeJS",
        description: "Node.js is a runtime that allows JavaScript to run server-side, enabling backend development."
    },
    {
        image: "/src/assets/images/skills-page/express-js-logo.png",
        header: "ExpressJS",
        subheader: "aug. 2023 - present",
        url: "https://expressjs.com/",
        title: "ExpressJS",
        description: "Express.js is a minimal, flexible Node.js framework for building web applications and APIs."
    },
    {
        image: "/src/assets/images/skills-page/mongodb-logo.svg",
        header: "MongoDB",
        subheader: "aug. 2023 - present",
        url: "https://www.mongodb.com",
        title: "MongoDB",
        description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, ideal for handling large, unstructured data."
    },
    {
        image: "/src/assets/images/skills-page/mongoose-logo.png",
        header: "Mongoose",
        subheader: "aug. 2023 - present",
        url: "https://mongoosejs.com/",
        title: "Mongoose",
        description: "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing a structured schema to simplify data interactions."
    },
    {
        image: "/src/assets/images/skills-page/vite-logo.png",
        header: "Vite",
        subheader: "jan. 2024 - present",
        url: "https://vite.dev/",
        title: "Vite",
        description: "Vite is a fast, modern build tool for front-end development, optimizing for quick startup and hot-reloading in development."
    },
    {
        image: "/src/assets/images/skills-page/html-logo.png",
        header: "HTML",
        subheader: "aug. 2022 - present",
        url: "https://html.com/",
        title: "HTML",
        description: "HTML is the standard markup language used to structure content on the web."
    },
    {
        image: "/src/assets/images/skills-page/css-logo.png",
        header: "CSS",
        subheader: "aug. 2023 - present",
        url: "https://www.w3.org/Style/CSS/Overview.en.html",
        title: "CSS",
        description: "CSS is a stylesheet language used to style and layout web pages."
    },
    {
        image: "/src/assets/images/skills-page/bootstrap-logo.png",
        header: "Bootstrap",
        subheader: "jun. 2023 - present",
        url: "https://getbootstrap.com/",
        title: "Bootstrap",
        description: "Bootstrap is a front-end framework for developing responsive, mobile-first websites quickly, using pre-designed components and a grid system."
    },
    {
        image: "/src/assets/images/skills-page/material-ui-logo.png",
        header: "Material UI",
        subheader: "feb. 2024 - present",
        url: "https://mui.com/",
        title: "Material UI",
        description: "Material UI is a React component library that implements Google’s Material Design, providing customizable, responsive UI elements for web applications."
    },
    {
        image: "/src/assets/images/skills-page/handlebars-logo.png",
        header: "Handlebars",
        subheader: "nov. 2023 - jan. 2024",
        url: "https://handlebarsjs.com/",
        title: "Handlebars",
        description: "Handlebars.js is a templating engine that allows developers to create dynamic HTML by embedding expressions and logic within templates."
    },
    {
        image: "/src/assets/images/skills-page/visual-studio-code-logo.jpeg",
        header: "Visual Studio Code",
        subheader: "aug. 2022 - present",
        url: "https://code.visualstudio.com/",
        title: "Visual Studio Code",
        description: "Visual Studio Code is a lightweight, open-source code editor with robust features like debugging, syntax highlighting, and extensions for various programming languages."
    },
    {
        image: "/src/assets/images/skills-page/git-logo.png",
        header: "Git",
        subheader: "sept. 2023 - present",
        url: "https://git-scm.com/",
        title: "Git",
        description: "Git is a distributed version control system that tracks changes in code, enabling collaboration and version management in software development."
    },
    {
        image: "/src/assets/images/skills-page/github-logo.png",
        header: "GitHub",
        subheader: "sept. 2023 - present",
        url: "https://github.com/",
        title: "GitHub",
        description: "GitHub is a web-based platform for version control and collaboration, allowing developers to host, share, and manage Git repositories."
    },
    {
        image: "/src/assets/images/skills-page/zsh-logo.png",
        header: "Zsh",
        subheader: "sept. 2023 - present",
        url: "https://ohmyz.sh/",
        title: "Zsh",
        description: "Zsh is a powerful shell for Unix-based systems, offering advanced features like improved scripting capabilities, customization, and a rich plugin ecosystem."
    },

]

function SkillsPage() {

    return (
        <div>
            {skillsArray.map((skill, index) => (
                <Result key={index} result={skill} />
            ))}
        </div>
    );
}

export default SkillsPage;