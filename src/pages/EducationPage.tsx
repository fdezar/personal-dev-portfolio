import Result from "../components/Result";

const educationArray = [
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "Ironhack",
        url: "sep. 2023 - mar. 2024",
        title: "Web Development Bootcamp",
        description: `
            Syllabus:
            - FrontEnd: HTML5, CSS3, JavaScript ES6, Bootstrap.
            - BackEnd: MongoDB, Node.js, Express.js, Handlebars, Cloudinary, Nodemailer, BCrypt, Mongoose, REST APIs, Json-Server, Postman, NPM.
            - Full-Stack: MERN - MongoDB, Express.js, React.js, Vite & Node.js.
            - Tools: MongoDB Compass, Visual Studio Code, GitHub.
            - Deployment with GitHub pages, Vercel.Syllabus: - FrontEnd: HTML5, CSS3, JavaScript ES6, Bootstrap. - BackEnd: MongoDB, Node.js, Express.js, Handlebars, Cloudinary, Nodemailer, BCrypt, Mongoose, REST APIs, Json-Server, Postman, NPM. - Full-Stack: MERN - MongoDB, Express.js, React.js, Vite & Node.js. - Tools: MongoDB Compass, Visual Studio Code, GitHub. - Deployment with GitHub pages, Vercel.

        `
    },
    {
        image: "/src/assets/images/education-page/freecodecamp-logo.jpeg",
        header: "freeCodeCamp",
        url: "ago. 2022 - ago. 2023",
        title: "freeCodeCamp",
        description: `
            4 Certificates of Completion | +1200h | Front End & Back End

            Syllabus:
            - Responsive Web Design: HTML & CSS
            - JavaScript Algorithms & Data Structures: JavaScript
            - Front End Development Libraries: Bootstrap, React.js
            - Back End Development and APIs: Node.js, Express.js, MongoDB, Mongoose, NPM
        `
    },
    {
        image: "/src/assets/images/education-page/udemy-logo.jpeg",
        header: "Udemy",
        url: "jul. 2024 - jul. 2024",
        title: "Udemy",
        description: `
            2 Certificates of Completion | Redux and Test Driven Development

            Courses:
            - The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]
            - Test Driven Development (TDD) en React JS (Jest, React Testing Library, Mock Service Worker)
        `
    },
    {
        image: "/src/assets/images/education-page/edteam-logo.jpeg",
        header: "EDTeam",
        url: "jun. 2024 - jun. 2024",
        title: "EDTeam",
        description: `
            2 Certificates of Completion | TypeScript and React Hooks

            Courses:
            - TypeScript desde cero
            - React Hooks con TypeScript
        `
    },
    {
        image: "/src/assets/images/education-page/google-activate-logo.jpeg",
        header: "Google Activate",
        url: "jul. 2022 - ago. 2022",
        title: "Google Activate",
        description: `
            2 Certificates of Completion | HTML & CSS

            Courses:
            - Introducción al Desarrollo Web I
            - Introducción al Desarrollo Web II
        `
    },
    {
        image: "/src/assets/images/education-page/university-of-barcelona-logo.jpeg",
        header: "University of Barcelona",
        url: "sept. 2021 - jul. 2023",
        title: "Psychosocial Intervention Master's Degree",
        description: "Master's Degree in UB."
    },
    {
        image: "/src/assets/images/education-page/university-of-girona-logo.jpeg",
        header: "University of Girona",
        url: "sept. 2017 - jun. 2021",
        title: "Social Education Degree",
        description: "Social Education Degree in UdG."
    },
    {
        image: "/src/assets/images/education-page/university-of-girona-logo.jpeg",
        header: "University of Girona",
        url: "oct. 2017",
        title: "B2 English Certificate",
        description: "B2 English."
    },
]

function EducationPage() {

    return (
        <div>
            <Result result={ educationArray[0] } />
            <Result result={ educationArray[1] } />
            <Result result={ educationArray[2] } />
            <Result result={ educationArray[3] } />
            <Result result={ educationArray[4] } />
            <Result result={ educationArray[5] } />
            <Result result={ educationArray[6] } />
            <Result result={ educationArray[7] } />
        </div>
    )
}

export default EducationPage;