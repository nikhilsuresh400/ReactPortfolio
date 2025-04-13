
import brandingImage from "./drum-machine.png"
import bgImage from "../LatestWorks/project4.jpg"
import ProjectPage from "../ProjectPage/ProjectPage"

const Project4 = () => {
    return (
        <ProjectPage
            title="Drum Machine"
            description="Click, play, groove!"
            role="DEVELOPER"
            context="MUSIC APP"
            period="EARLY. 2022"
            projectText="A self-sufficient music player webApp where you can click and play drums. Added all the essential drum kit including Kick, Snare, 3 different Toms and a cymbal."
            brandingHeading="Badham-toosh"
            brandingDesc={
                <>
                    As the <span className="text-blueColor">Developer</span>, I built the entire UI for the webApp, redefining the User Experience and studying new interactions between the User and the Interface. Integrating <span className="text-blueColor">AUDIO</span> was a learning experience.
                </>
            }
            brandingImage={brandingImage}
            backgroundImage={bgImage}
            nextWorkTitle="Sundown"
            nextWorkLink="/project1"
            fontName="Poppins"
            colors={[
                { hex: "#333333", name: "$jet", textOnColor: "text-bodyColor" },
                { hex: "#B1B1B1", name: "$silver", textOnColor: "text-darkColor" },
                { hex: "#F0F0F0", name: "$anti-flash white", textOnColor: "text-darkColor" },
                { hex: "#000000", name: "$black", textOnColor: "text-bodyColor" },
                { hex: "#FFFFFF", name: "$white", textOnColor: "text-darkColor" },
            ]}
        />
    )
}

export default Project4
