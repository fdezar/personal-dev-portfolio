import ContactResult from "../components/ContactResult";

const contactArray = [
    {
        image: "/src/assets/images/contact-page/email-icon.png",
        header: "Email",
        subheader: "gfernandezareas@gmail.com",
        url: "mailto:gfernandezareas@gmail.com",
        title: "Email",
        description: "JavaScript is a versatile language primarily used for creating interactive web pages and can run on both the client and server sides."
    },
    {
        image: "/src/assets/images/contact-page/github-logo.png",
        header: "GitHub",
        subheader: "https://www.github.com/fdezar",
        url: "https://www.github.com/fdezar",
        title: "GitHub",
        description: "JavaScript is a versatile language primarily used for creating interactive web pages and can run on both the client and server sides."
    },
    {
        image: "/src/assets/images/contact-page/linkedin-logo.webp",
        header: "LinkedIn",
        subheader: "https://www.linkedin.com/in/gabrielfdez",
        url: "https://www.linkedin.com/in/gabrielfdez",
        title: "LinkedIn",
        description: "JavaScript is a versatile language primarily used for creating interactive web pages and can run on both the client and server sides."
    },
    {
        image: "/src/assets/images/contact-page/phone-icon.png",
        header: "Phone",
        subheader: "Ask for it!",
        url: "",
        title: "Phone number",
        description: "Due to privacy, I decided to keep my number private. Ask my phone number on any of my contact options!."
    },

    
]

function ContactPage() {

    return (
        <div>
            {contactArray.map((experience, index) => (
                <ContactResult key={index} result={experience} />
            ))}
        </div>
    )
}

export default ContactPage;