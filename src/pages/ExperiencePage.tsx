import Result from "../components/Result";

const experienceArray = [
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "Coordinadora d'Entitats de Poble Sec",
        url: "jan. 2023 - apr. 2023",
        title: "Psychosocial Interventor",
        description: "Hello"
    },
    {
        image: "/src//assets/images/experience-page/plataforma-educativa-logo.jpeg",
        header: "Plataforma Educativa",
        url: "jan. 2023 - apr. 2023",
        title: "Social Educator",
        description: ""
    },
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "AEIG Xiprers al Vent",
        url: "jan. 2023 - apr. 2023",
        title: "Scout Leader",
        description: ""
    },
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "Càritas Diocesana de Girona",
        url: "jan. 2023 - apr. 2023",
        title: "Social Educator",
        description: ""
    },
]

function ExperiencePage() {

    return (
        <div>
            <Result result={ experienceArray[0] }/>
            <Result result={ experienceArray[1] }/>
            <Result result={ experienceArray[2] }/>
            <Result result={ experienceArray[3] }/>
        </div>
    )
}

export default ExperiencePage;