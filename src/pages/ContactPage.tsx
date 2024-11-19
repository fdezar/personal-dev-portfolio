import ContactResult from "../components/ContactResult";
import EmailLogo from "/src/assets/images/contact-page/email-icon.png";
import GitHubLogo from "/src/assets/images/contact-page/github-logo.png";
import LinkedInLogo from "/src/assets/images/contact-page/linkedin-logo.webp";
import PhoneLogo from "/src/assets/images/contact-page/phone-icon.png";

const contactArray = [
    {
        image: EmailLogo,
        header: "Email",
        subheader: "gfernandezareas@gmail.com",
        url: "mailto:gfernandezareas@gmail.com",
        title: "Email",
        description: "Click here to write me an email!"
    },
    {
        image: GitHubLogo,
        header: "GitHub",
        subheader: "https://www.github.com/fdezar",
        url: "https://www.github.com/fdezar",
        title: "GitHub",
        description: "See my latest projects!"
    },
    {
        image: LinkedInLogo,
        header: "LinkedIn",
        subheader: "https://www.linkedin.com/in/gabrielfdez",
        url: "https://www.linkedin.com/in/gabrielfdez",
        title: "LinkedIn",
        description: "Follow my latest publications!"
    },
    {
        image: PhoneLogo,
        header: "Phone",
        subheader: "Ask for it!",
        url: "",
        title: "Phone number",
        description: "Due to privacy, I decided to keep my number private. Ask my phone number on any of my other contact options!"
    },

    
]

function ContactPage() {

    return (
        <div>
            {contactArray.map((experience, index) => (
                <ContactResult key={index} result={experience} />
            ))}
            <div id="white-space"></div>
        </div>
    )
}

export default ContactPage;