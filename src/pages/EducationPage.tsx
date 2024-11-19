import Result from "../components/Result";
import IronhackLogo from "/src/assets/images/education-page/ironhack-spain-logo.jpeg";
import FreeCodeCampLogo from "/src/assets/images/education-page/freecodecamp-logo.jpeg";
import UdemyLogo from "/src/assets/images/education-page/udemy-logo.jpeg";
import EdTeamLogo from "/src/assets/images/education-page/edteam-logo.jpeg";
import GoogleActivateLogo from "/src/assets/images/education-page/google-activate-logo.jpeg";
import UniversityOfBarcelonaLogo from "/src/assets/images/education-page/university-of-barcelona-logo.jpeg";
import UniversityOfGironaLogo from "/src/assets/images/education-page/university-of-girona-logo.jpeg";

const educationArray = [
    {
        image: IronhackLogo,
        header: "Ironhack",
        subheader: "sep. 2023 - mar. 2024",
        url: "https://www.ironhack.com/es",
        title: "Web Development Bootcamp",
        description: `Syllabus:
            - FrontEnd: HTML5, CSS3, JavaScript ES6, Bootstrap.
            - BackEnd: MongoDB, Node.js, Express.js, Handlebars, Cloudinary, Nodemailer, BCrypt, Mongoose, REST APIs, Json-Server, Postman, NPM.
            - Full-Stack: MERN - MongoDB, Express.js, React.js, Vite & Node.js.
            - Tools: MongoDB Compass, Visual Studio Code, GitHub.
            - Deployment with GitHub pages, Vercel.Syllabus: - FrontEnd: HTML5, CSS3, JavaScript ES6, Bootstrap. - BackEnd: MongoDB, Node.js, Express.js, Handlebars, Cloudinary, Nodemailer, BCrypt, Mongoose, REST APIs, Json-Server, Postman, NPM. - Full-Stack: MERN - MongoDB, Express.js, React.js, Vite & Node.js. - Tools: MongoDB Compass, Visual Studio Code, GitHub. - Deployment with GitHub pages, Vercel.
        `
    },
    {
        image: FreeCodeCampLogo,
        header: "freeCodeCamp",
        subheader: "ago. 2022 - ago. 2023",
        url: "https://www.freecodecamp.org",
        title: "freeCodeCamp",
        description: `4 Certificates of Completion | +1200h | Front End & Back End

            Syllabus:
            - Responsive Web Design: HTML & CSS
            - JavaScript Algorithms & Data Structures: JavaScript
            - Front End Development Libraries: Bootstrap, React.js
            - Back End Development and APIs: Node.js, Express.js, MongoDB, Mongoose, NPM
        `
    },
    {
        image: UdemyLogo,
        header: "Udemy",
        subheader: "jul. 2024 - jul. 2024",
        url: "https://www.udemy.com/es/",
        title: "Udemy",
        description: `2 Certificates of Completion | Redux and Test Driven Development

            Courses:
            - The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]
            - Test Driven Development (TDD) en React JS (Jest, React Testing Library, Mock Service Worker)
        `
    },
    {
        image: EdTeamLogo,
        header: "EDTeam",
        subheader: "jun. 2024 - jun. 2024",
        url: "https://ed.team/",
        title: "EDTeam",
        description: `2 Certificates of Completion | TypeScript and React Hooks

            Courses:
            - TypeScript desde cero
            - React Hooks con TypeScript
        `
    },
    {
        image: GoogleActivateLogo,
        header: "Google Activate",
        subheader: "jul. 2022 - ago. 2022",
        url: "https://grow.google/intl/es/courses-and-tools/",
        title: "Google Activate",
        description: `2 Certificates of Completion | HTML & CSS

            Courses:
            - Introducción al Desarrollo Web I
            - Introducción al Desarrollo Web II
        `
    },
    {
        image: UniversityOfBarcelonaLogo,
        header: "University of Barcelona",
        subheader: "sept. 2021 - jul. 2023",
        url: "https://web.ub.edu/web/estudis/w/masteruniversitari-m0m0q",
        title: "Psychosocial Intervention Master's Degree",
        description: "Master's Degree in UB."
    },
    {
        image: UniversityOfGironaLogo,
        header: "University of Girona",
        subheader: "sept. 2017 - jun. 2021",
        url: "https://www.udg.edu/ca/estudia/Oferta-formativa/Graus/Fitxes?IDE=1411&ID=3101G0209",
        title: "Social Education Degree",
        description: "Social Education Degree in UdG."
    },
    {
        image: UniversityOfGironaLogo,
        header: "University of Girona",
        subheader: "oct. 2017",
        url: "https://www.udg.edu/es/llengues/cursos-i-examens/examens-oficials-i-tallers-de-preparacio",
        title: "B2 English Certificate",
        description: "B2 English."
    },
]

function EducationPage() {

    return (
        <div>
            {educationArray.map((experience, index) => (
                <Result key={index} result={experience} />
            ))}
        </div>
    )
}

export default EducationPage;