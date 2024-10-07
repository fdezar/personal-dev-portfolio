import Result from "../components/Result";

const experienceArray = [
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "Coordinadora d'Entitats de Poble Sec",
        url: "feb. 2023 - apr. 2023",
        title: "Psychosocial Interventor",
        description: `
            - Provided support and companionship to elderly individuals in isolated situations.
            - Actively organized and participated in purpose-driven activities to enhance their well-being.
            - Drafted subvention proposals to secure funding for social causes aiding the elderly.
            - Received positive qualitative feedback in both areas, emphasizing my consistency and discipline.
        `
    },
    {
        image: "/src//assets/images/experience-page/plataforma-educativa-logo.jpeg",
        header: "Plataforma Educativa",
        url: "dec. 2020 - feb. 2021",
        title: "Social Educator",
        description: `
            - Made impactful substitutions in youth residential centers. 
            - Provided nurturing support, and skill teaching. 
            - Implemented positive environments through leadership and teamwork strategies.
            - Positive qualitative feedback confirmed enhanced interpersonal skills and resilience.
        `
    },
    {
        image: "/src//assets/images/experience-page/plataforma-educativa-logo.jpeg",
        header: "Plataforma Educativa",
        url: "oct. 2020 - jan. 2021",
        title: "Social Educator",
        description: `
            - Practice in a youth residential center with focus on migrant population. 
            - Proficient in providing culturally sensitive support, and sense of community. 
            - Implemented tailored programs based on each individual's personal objectives.
            - Youth showed personal growth, and enhanced their interpersonal skills.
        `
    },
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "AEIG Xiprers al Vent",
        url: "sept. 2018 - aug. 2020",
        title: "Scout Leader",
        description: `
            - Dedicated scout leader with 2 years of experience. 
            - Fostered teamwork, leadership and communication skills among youth. 
            - Proficient in organizing outdoor activities and community engagement.
        `
    },
    {
        image: "/src//assets/images/education-page/ironhack-spain-logo.jpeg",
        header: "Càritas Diocesana de Girona",
        url: "nov. 2019 - mar. 2020",
        title: "Social Educator",
        description: `
            - Provided personal and emotional guidance to workers in an insertion enterprise.
            - Facilitated impactful lessons on Garantia Juvenil, playing a key role in fostering the success and graduation of every participant.
            - Demonstrated commitment into fostering skill development, empowerment, and social inclusion.
        `
    },
]

function ExperiencePage() {

    return (
        <div>
            <Result result={ experienceArray[0] }/>
            <Result result={ experienceArray[1] }/>
            <Result result={ experienceArray[2] }/>
            <Result result={ experienceArray[3] }/>
            <Result result={ experienceArray[4] }/>
        </div>
    )
}

export default ExperiencePage;