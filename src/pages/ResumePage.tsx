import ClassicResult from "../components/ClassicResult";
import GabriIronhackImage from "/src/assets/images/results-page/gabri-ironhack-image.png";
import SilkProjectImage from "/src/assets/images/results-page/silk-project.png";
import ExquisiteProjectImage from "/src/assets/images/results-page/exquisite-project.png";

const resumeArray = [
    {
        title: "My Projects",
        url: "https://portfoliogfernandez.vercel.app/results/projects",
        link: "/results/projects",
        description: "Silk is the standout project! It's built with the MERN Stack project and features Material UI interface. Exquisite is another noteworthy Full Stack Project worth highlighting. But there's also more to explore!"
    },
    {
        title: "My Skills",
        url: "https://portfoliogfernandez.vercel.app/results/skills",
        link: "/results/skills",
        description: "React, NodeJS, ExpressJS, and MongoDB are my core technologies. However, there's much more to my skill set! I also adapt quickly and easily to learning new ones."
    },
    {
        title: "My Education",
        url: "https://portfoliogfernandez.vercel.app/results/education",
        link: "/results/education",
        description: "The Ironhack Bootcamp, freeCodeCamp, Udemy and Google Activate are among the highlighted! Additionaly, my background in Social Education has equipped me with strong soft skills and teamwork abilities that seamlessly translate into web development."
    },
    {
        title: "Want to work with me?",
        url: "https://portfoliogfernandez.vercel.app/results/contact",
        link: "/results/contact",
        description: "Interested in connecting? Head over to my contact page! You will also find links to my GitHub and LinkedIn, both updated with my latest projects and posts."
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