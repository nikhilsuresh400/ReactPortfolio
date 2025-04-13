
import ProjectPage from "../ProjectPage/ProjectPage.jsx"
import brandingImage from "./music.png"
import bgImage from "../LatestWorks/project3.jpg"
import { LuLink } from "react-icons/lu"

const Project3 = () => {
    return (
        <ProjectPage
            title="Music Player"
            description="Music playing webapp with play/pause feature."
            role="developer"
            context="music app"
            period="mid. 2024"
            projectText="A self-sufficient music player webApp where you can spend your time listening to your favorite artists and take a well needed break."
            brandingHeading="The power of music."
            brandingDesc={
                <>
                    As the <span className="text-blueColor">Developer</span>, I built the entire UI for the webApp, redefining the User Experience and studying new interactions between the User and the Interface. Integrating <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-blueColor inline-flex items-center gap-1">Open Weather Map API< LuLink /></a> was a learning experience.
                </>
            }
            brandingImage={brandingImage}
            backgroundImage={bgImage}
            nextWorkTitle="Drum Machine"
            nextWorkLink="/project4"
            fontName="Assistant"
            colors={[
                { hex: "#FF5100", name: "$aerospace orange", textOnColor: "text-bodyColor" },
                { hex: "#FCFAFA", name: "$seasalt", textOnColor: "text-darkColor" },
                { hex: "#A574C2", name: "$lavender(floral)", textOnColor: "text-bodyColor" },
                { hex: "#865FC5", name: "$amethyst", textOnColor: "text-bodyColor" },
                { hex: "#FFFFFF", name: "$white", textOnColor: "text-darkColor" },
            ]}
        />
    )
}

export default Project3

