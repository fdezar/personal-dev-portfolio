import ClassicResult from "../components/ClassicResult";
import GabriIronhackImage from "/src/assets/images/results-page/gabri-ironhack-image.png";
import SilkProjectImage from "/src/assets/images/results-page/silk-project.png";
import ExquisiteProjectImage from "/src/assets/images/results-page/exquisite-project.png";

const resumeArray = [
    {
        title: "My Projects",
        url: "/projects",
        description: "Silk is the most prominent one! It's a MERN Stack project. Exquisite is also a Full Stack Project to get into consideration. But there's a lot more!"
    },
    {
        title: "My Skills",
        url: "/skills",
        description: "React, NodeJS, ExpressJS, and MongoDB are my most dominant technologies. Still, there is much more! I also have an easiness to learn new ones."
    },
    {
        title: "My Education",
        url: "https://projects",
        description: "Ironhack Bootcamp, freeCodeCamp, Udemy and Google Activate are featured! I also have a background in Social Education that made me have a lot of soft skills and teamwork capacities that well trascends into web development."
    },
    {
        title: "Want to work with me?",
        url: "https://www.github.com/fdezar",
        description: "Go to my contact page! You will also find my GitHub and my LinkedIn, updated with my latest works and publications."
    },
]

function ResumePage() {

    return (
        <>
            <div id="featured-snippet">
                <h2 id="resume-header">Gabriel Fernandez</h2>
                <h4 id="resume-subheader">Full Stack Developer residing in Barcelona</h4>
            </div>

            <section id="images-section">
                <div id="images-container">
                    <img src={GabriIronhackImage} id="images-main-image" alt="G1" />
                    <div id="images-subcontainer">
                        <img src={SilkProjectImage} id="images-second-image" alt="G2" />
                        <img src={ExquisiteProjectImage} id="images-third-image" alt="G3" />
                    </div>
                </div>
            </section>

            <hr />

            {resumeArray.map((project, index) => (
                <ClassicResult key={index} result={project} />
            ))}
        </>
    )
}

export default ResumePage;