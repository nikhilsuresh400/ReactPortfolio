
import brandingImage from "./sundown.png"
import bgImage from "../LatestWorks/project1.jpg"
import ProjectPage from "../ProjectPage/ProjectPage"

const Project4 = () => {
    return (
        <ProjectPage
            title="Sundown"
            description="Sundown Studio clone containing elements using vanillaJS, swiperJS and gsap."
            role="frontend developer"
            context="website clone"
            period="mid. 2024"
            projectText="Sundown is composed of an established team of multi-disciplinary craftsmen focused on creating unique, end-to-end experiences and environments. They are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference."
            brandingHeading="An elegant design."
            brandingDesc={
                <>
                    As the <span className="text-blueColor">Front-end Developer</span>, I built the entire UI for the website, redefining the User Experience and studying new interactions between the User and the Interface.
                    <br />
                    <br />
                    One of the most exciting experience was integrating <span className="text-blueColor">Framer Motion</span> to add smooth animations.
                </>
            }
            brandingImage={brandingImage}
            backgroundImage={bgImage}
            nextWorkTitle="Weather WebApp"
            nextWorkLink="/project2"
            fontName="Poppins"
            colors={[
                { hex: "#FF420A", name: "$coquelicot", textOnColor: "text-darkColor" },
                { hex: "#FEA500", name: "$orange(web)", textOnColor: "text-bodyColor" },
                { hex: "#EFEAEA", name: "$isabelline", textOnColor: "text-darkColor" },
                { hex: "#383A3C", name: "$onyx", textOnColor: "text-bodyColor" },
                { hex: "#FAFAFA", name: "$seasalt", textOnColor: "text-darkColor" },
            ]}
        />
    )
}

export default Project4
