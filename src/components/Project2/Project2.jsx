
import brandingImage from "./weather-app.png"
import bgImage from "../LatestWorks/project2.jpg"
import ProjectPage from "../ProjectPage/ProjectPage"
import { LuLink } from "react-icons/lu"

const Project4 = () => {
    return (
        <ProjectPage
            title="Weather WebApp"
            description="Asimple weather webapp made using vanillaJS and Open Weather Map API. Just enter any city name!"
            role="developer"
            context="weather app"
            period="late. 2023"
            projectText="This webapp aims to be a modern, solid and easy-to-use web based software to know current weather status. With it's hand-crafted UI, it helps every user to easily get the weather details he/she needs."
            brandingHeading="Built with users in mind, and Love."
            brandingDesc={
                <>
                    As the <span className="text-blueColor">Developer</span>, I built the entire UI, redefining the User Experience and studying new interactions between the User and the Interface. 
                    <br />
                    <br />
                    Working with <a href="https://openweathermap.org/api" target="_blank noopener noreferrer" className="text-blueColor inline-flex items-center gap-1">Open Weather Map API<LuLink/></a> was a learning experience.
                </>
            }
            brandingImage={brandingImage}
            backgroundImage={bgImage}
            nextWorkTitle="Music Player"
            nextWorkLink="/project3"
            fontName="Assistant"
            colors={[
                { hex: "#1A3DE3", name: "$palatinate blue", textOnColor: "text-bodyColor" },
                { hex: "#72538E", name: "$ultra violet", textOnColor: "text-bodyColor" },
                { hex: "#EEEEEE", name: "$anti-flash white", textOnColor: "text-darkColor" },
                { hex: "#222222", name: "$eerie black", textOnColor: "text-bodyColor" },
                { hex: "#C4E1E5", name: "$light blue", textOnColor: "text-darkColor" },
            ]}
        />
    )
}

export default Project4
