import Result from "../components/Result";

const projectsArray = [
    {
        image: "/src",
        header: "Silk",
        url: "https",
        title: "Silk",
        description: "Silk is cool"
    },
    {
        image: "/src",
        header: "Silksong",
        url: "https",
        title: "Silk",
        description: "Silk is cool"
    },
]

function ProjectsPage() {

    return (
        <div>
            <Result project={ projectsArray[0] }/>
            <Result project={ projectsArray[1] }/>
        </div>
    )
}

export default ProjectsPage;