import Result from "../components/Result";

const projectsArray = [
    {
        image: "/src/assets/images/projects-page/silk-logo.png",
        header: "Silk",
        url: "https://silk-project.vercel.app",
        title: "Silk",
        description: "Silk is a Single-Page Full Stack Productivity App that lets users create his own notes, Kanban with Drag and Drop (only frontend), Todolist and use a Pomodoro clock. Also features a CRUD user system with JSON Web Token authentication. Built with React.js, Vite, Material UI, Node.js, Express.js, MongoDB, and more."
    },
    {
        image: "/src/assets/images/projects-page/exquisite-logo.png",
        header: "Exquisite",
        url: "https://exquisite-project.vercel.app",
        title: "Exquisite: Share your recipes",
        description: "In Exquisite, users can create, view, edit, and delete recipes, fostering a collaborative culinary community. Built with Handlebars, CSS, Bootstrap, MongoDB, Node.js, and Express, it's conceived as a web app for effortless recipe sharing.In Exquisite, users can create, view, edit, and delete recipes, fostering a collaborative culinary community. Built with Handlebars, CSS, Bootstrap, MongoDB, Node.js, and Express, it's conceived as a web app for effortless recipe sharing."
    },
    {
        image: "/src/assets/images/projects-page/url-shortener-logo.svg",
        header: "Url Shortener",
        url: "https://url-sh.vercel.app/",
        title: "Url Shortener Microservice",
        description: "This URL Shortener allows users to shorten long URLs into more manageable links. It provides a simple interface for users to input their long URLs and receive shortened versions, making sharing and storing URLs easier."
    },
    {
        image: "/src/assets/images/projects-page/snake-game-logo.png",
        header: "Snake",
        url: "https://fdezar.github.io/project-snake-game/",
        title: "Snake Game",
        description: "1st Ironhack project, developed a Snake Game in teamwork with another classmate using Object Oriented Programming principles, JavaScript, HTML & CSS."
    },
    {
        image: "/src/assets/images/projects-page/exercise-tracker-logo.svg",
        header: "Exercise Tracker",
        url: "https://exercisetracker-project.vercel.app/",
        title: "Exercise Tracker",
        description: "This is a web application that allows users to track their exercises. Users can create accounts, log exercises with descriptions, durations, and dates, and view exercise logs with optional date filters. This project is implemented using Node.js, Express, MongoDB, and Bootstrap."
    },
    {
        image: "/src/assets/images/projects-page/filemetadata-logo.png",
        header: "File Metadata Microservice",
        url: "https://filemetadata-project.vercel.app/",
        title: "File Metadata Microservice",
        description: "This is a simple web application that allows users to upload files and instantly view their size in bytes. This project is implemented using Node.js, Express, Multer, CSS and Bootstrap."
    },
    {
        image: "/src/assets/images/projects-page/alarm-clock-logo.svg",
        header: "Pomodoro Clock",
        url: "https://fdezar.github.io/react-25-5-clock/",
        title: "React 25 + 5 clock",
        description: "This is a 25 + 5 Clock web application built using React.js, CSS, HTML, and Bootstrap buttons. It helps users manage their time effectively using the Pomodoro Technique, allowing them to set a session length and break length."
    },
    {
        image: "/src/assets/images/projects-page/calculator-logo.svg",
        header: "JavaScript Calculator",
        url: "https://fdezar.github.io/react-javascript-calculator/",
        title: "React JavaScript Calculator",
        description: "This is a JavaScript Calculator built using React.js, HTML, CSS, and Bootstrap buttons. It functions as a standard calculator, providing basic arithmetic operations. Additionally, it includes a display feature that shows the ongoing operations."
    },
    {
        image: "/src/assets/images/projects-page/drum-logo.svg",
        header: "JavaScript Drum Machine",
        url: "https://fdezar.github.io/drum-machine/",
        title: "JavaScript Drum Machine",
        description: "This is a simple Drum Machine made using HTML, CSS, JavaScript and Bootstrap buttons. Users can either click on the drum pads or press corresponding keys on their keyboard to play different drum sounds."
    },
]

function ProjectsPage() {

    return (
        <div>
            <Result result={ projectsArray[0] }/>
            <Result result={ projectsArray[1] }/>
        </div>
    )
}

export default ProjectsPage;