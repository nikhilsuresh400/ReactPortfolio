
import "./LatestWorks.module.css"
import Projects from "./Projects"
import { easeInOut, motion } from "framer-motion"

const LatestWorks = () => {
    return (
        <div className="pt-10 overflow-x-hidden">
            <div className="text-center mb-24">
                <motion.p className="text-grayColor mb-4"
                            initial={{opacity: 0, translateY: 25}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 0.5, type: easeInOut}}>CASE STUDIES</motion.p>
                <motion.h1 className="text-darkColor text-5xl font-semibold"
                            initial={{opacity: 0, translateY: -100}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 0.5, type: easeInOut}}>Latest Works<span className="text-orangeColor">.</span></motion.h1>
            </div>
            {/* PROJECTS */}
            <div className="px-2 lg:px-16">
                {/* PROJECT 1 */}
                <motion.div className="group mb-32 lg:mb-56 aspect-video w-[88vw] lg:w-1/2 place-self-center shadow-projectShadow
                                bg-[url(/src/components/LatestWorks/project1.jpg)] bg-center bg-no-repeat bg-cover
                                flex flex-col justify-between text-containerColor relative"
                                initial={{opacity: 0, translateX: -100}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration:0.5, type:easeInOut}}>
                    <Projects link="/project1" projectNumber="01" projectName="Sundown" 
                        projectDesc="Landing page for Sundown studio containing elements using vanilla js, swiperJS and gsap." />
                </motion.div>
                {/* PROJECT 2 */}
                <motion.div className="group mb-32 lg:mb-56 aspect-video w-[88vw] lg:w-1/2 place-self-center shadow-projectShadow
                                bg-[url(/src/components/LatestWorks/project2.jpg)] bg-center bg-no-repeat bg-cover
                                flex flex-col justify-between text-containerColor relative"
                                initial={{opacity: 0, translateX: 100}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 0.5, type: easeInOut}}>
                    <Projects link="/project2" projectNumber="02" projectName="Weather WebApp" 
                        projectDesc="A simple weather app made using vanilla js and Open Weather Map API. Just enter any city name!" />
                </motion.div>
                {/* PROJECT 3 */}
                <motion.div className="group mb-32 lg:mb-56 aspect-video w-[88vw] lg:w-1/2 place-self-center shadow-projectShadow
                                bg-[url(/src/components/LatestWorks/project3.jpg)] bg-center bg-no-repeat bg-cover
                                flex flex-col justify-between text-containerColor relative"
                                initial={{opacity: 0, translateX: -100}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 0.5, type: easeInOut}}>
                    <Projects link="/project3" projectNumber="03" projectName="Music Player" 
                        projectDesc="A simple music player with Play/Pause feature." />
                </motion.div>
                {/* PROJECT 4 */}
                <motion.div className="group mb-32 lg:mb-56 aspect-video w-[88vw] lg:w-1/2 place-self-center shadow-projectShadow
                                bg-[url(/src/components/LatestWorks/project4.jpg)] bg-center bg-no-repeat bg-cover
                                flex flex-col justify-between text-containerColor relative"
                                initial={{opacity: 0, translateX: 100}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 0.5, type: easeInOut}}>
                    <Projects link="/project4" projectNumber="04" projectName="Drum Machine" 
                        projectDesc="Virtual Drum Machine(Click and play drums) - a weekend project just for fun." />
                </motion.div>
            </div>
        </div>
    )
}

export default LatestWorks
