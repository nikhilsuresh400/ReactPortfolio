import { useRef } from "react"
import Education from "../Education/Education"
import Experience from "../Experience/Experience"
import Footer from "../Footer/Footer"
import LatestWorks from "../LatestWorks/LatestWorks"
import Navbar from "../Navbar/Navbar"

const Home = () => {

    const latestWorksRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);

    return (
        <div>
            <Navbar scrollToLatestWorks={() => latestWorksRef.current?.scrollIntoView({behavior: "smooth"})}
                    scrollToExperience={() => experienceRef.current?.scrollIntoView({behavior: "smooth"})}
                    scrollToEducation={() => educationRef.current?.scrollIntoView({behavior: "smooth"})}/>
            <div ref={latestWorksRef}>
                <LatestWorks />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={educationRef}>
                <Education />
            </div>
            <Footer />
        </div>
    )
}

export default Home
