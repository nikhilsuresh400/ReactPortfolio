
import { MoveRight } from "lucide-react"
import ProjectNavbar from "../ProjectNavbar/ProjectNavbar"
import { Link } from "react-router-dom"
import { motion, easeInOut } from "framer-motion"
import brandingPageImage from "./weather-app.png"
import Footer from "../Footer/Footer"
import { LuLink, LuMoveRight } from "react-icons/lu"

const Project2 = () => {
    return (
        <div>
            {/* NAVBAR */}
            <ProjectNavbar/>
            {/* MAIN SECTION */}
            <section className="text-bodyColor bg-[url(src/components/LatestWorks/project2.jpg)] bg-center bg-no-repeat bg-cover
                                w-full h-[82vh] flex flex-col items-center justify-center py-8">
                {/* TITLE */}
                <div className="h-6/8 flex flex-col items-center justify-end">
                    <motion.h1 className="text-9xl font-semibold drop-shadow-xl mb-2 bg-blend-difference"
                                            initial={{opacity: 0, translateY: -40}}
                                            whileInView={{opacity: 1, translateY: 0}}
                                            transition={{duration: 0.3, type: easeInOut}}>Weather WebApp
                        <span className="text-blueColor">.</span></motion.h1>
                    <p className="italic font-semibold drop-shadow-xl">A simple weather app made using vanillaJS and Open Weather Map API. Just enter any city name!</p>
                </div>
                {/* ROLE, CONTEXT, PERIOD */}
                <div className="h-1/2 flex items-end gap-88 tracking-wider text-sm">
                    <div>
                        <motion.h1 
                                initial={{opacity: 0, translateY: 100}}
                                whileInView={{opacity:1, translateY: 0}}
                                transition={{duration: 0.6, type: easeInOut}}><span className="text-blueColor">ROLE</span> DEVELOPER</motion.h1>
                    </div>
                    <div>
                        <motion.h1 
                                initial={{opacity: 0, translateY: 100}}
                                whileInView={{opacity:1, translateY: 0}}
                                transition={{duration: 0.6, type: easeInOut}}><span className="text-blueColor">CONTEXT</span> WEATHER APP</motion.h1>
                    </div>
                    <div>
                        <motion.h1 
                                initial={{opacity: 0, translateY: 100}}
                                whileInView={{opacity:1, translateY: 0}}
                                transition={{duration: 0.6, type: easeInOut}}><span className="text-blueColor">PERIOD</span> LATE. 2023</motion.h1>
                    </div>
                </div>
            </section>

            {/* THE PROJECT SECTION */}
            <section className="relative h-[60vh] mb-24 flex items-center justify-center bg-gray-100 overflow-hidden">
                {/* BACKGROUND GRAPHIC */}
                <span className="absolute -bottom-38 left-30 
                                    text-[16rem] font-bold z-0 text-gray-200">Weather</span>
                <div className="flex flex-col items-center justify-center w-1/2 z-10">
                    <h1 className="text-6xl font-semibold mb-12">The Project</h1>
                    <p className="w-3/4 text-center mb-8">This webapp aims to be a modern, solid and easy-to-use web-based software to know current weather status. With it's hand-crafted UI, it helps every users to easily get the weather details he/she needs.</p>
                    {/* VIEW WEBSITE BUTTON */}
                    <Link>
                        <button
                            className="relative bg-darkColor 
                                            text-bodyColor px-6 py-2 mt-6 
                                            transition-all duration-[120ms] ease-in-out 
                                            rounded 
                                            shadow-buttonShadow flex items-center hover:scale-[1.04] group">
                            Visit website <MoveRight size={32}
                                className="text-orangeColor 
                                                absolute top-1/2 -translate-y-1/2 -right-4 
                                                group-hover:-right-9 
                                                transition-all duration-[120ms] ease-in-out" /></button>
                    </Link>
                </div>
            </section>

            {/* BRANDING SECTION */}
            <section className="mb-24">
                <div className="text-center mt-40 mb-24">
                    <motion.p className="text-grayColor mb-4"
                        initial={{ opacity: 0, translateY: 25 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, type: easeInOut }}>ANALYSIS & PREPARATION</motion.p>
                    <motion.h1 className="text-darkColor text-5xl font-semibold"
                        initial={{ opacity: 0, translateY: -100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, type: easeInOut }}>Branding<span className="text-orangeColor">.</span></motion.h1>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 gap-2 w-3/4 mb-24 place-self-center">
                    {/* GRID LEFT */}
                    <div>
                        <div className="relative mb-15 w-3/4">
                            <h1 className="text-5xl font-semibold">Built with users in mind, and Love.</h1>
                            <span className="absolute left-0 -bottom-4 bg-blueColor h-[4px] w-[160px]"></span>
                        </div>
                        <p className="w-3/4">
                            As the <span className="text-blueColor">Developer</span>, I built the entire UI, redefining the User Experience and studying new interactions between the User and the Interface.
                            <br />
                            <br />
                            Working with <a href="https://openweathermap.org/api" target="_blank" className="text-blueColor inline-flex items-center gap-2">
                            Open Weather Map API<LuLink /></a> was a learning experience.
                        </p>
                    </div>
                    {/* GRID RIGHT */}
                    <div>
                        <motion.img src={brandingPageImage} alt="Image" className="aspect-video rounded shadow-buttonShadow" 
                                                            initial={{opacity: 0, translateX: 100}}
                                                            whileInView={{opacity: 1, translateX: 0}}
                                                            transition={{duration: 0.5, ease: easeInOut}} />
                    </div>
                </div>
                {/* COLORS */}
                <div className="flex items-center justify-center gap-32 pt-16 mb-24">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <motion.div className="relative group rounded-full h-[180px] w-[180px] bg-[#1A3DE3] shadow-buttonShadow
                                    hover:-translate-y-2 transition-all duration-[120ms] ease-in-out"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.2, delay: 0.2, ease: easeInOut}} >
                                        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-light text-sm text-bodyColor">#1A3DE3</p>
                                    </motion.div>
                                    <p className="font-light text-sm tracking-wider">$palatinate blue</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <motion.div className="relative group rounded-full h-[180px] w-[180px] bg-[#72538E] shadow-buttonShadow
                                    hover:-translate-y-2 transition-all duration-[120ms] ease-in-out"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.2, delay: 0.1, ease: easeInOut}} >
                                        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-light text-sm text-bodyColor">#72538E</p>
                                    </motion.div>
                                    <p className="font-light text-sm tracking-wider">$ultra violet</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <motion.div className="relative group rounded-full h-[180px] w-[180px] bg-[#EEEEEE] shadow-buttonShadow
                                    hover:-translate-y-2 transition-all duration-[120ms] ease-in-out"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.2, ease: easeInOut}} >
                                        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-light text-sm text-darkColor">#EEEEEE</p>
                                    </motion.div>
                                    <p className="font-light text-sm tracking-wider">$anti-flash white</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <motion.div className="relative group rounded-full h-[180px] w-[180px] bg-[#222222] shadow-buttonShadow
                                    hover:-translate-y-2 transition-all duration-[120ms] ease-in-out"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.2, delay: 0.1, ease: easeInOut}} >
                                        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-light text-sm text-bodyColor">#222222</p>
                                    </motion.div>
                                    <p className="font-light text-sm tracking-wider">$eerie black</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <motion.div className="relative group rounded-full h-[180px] w-[180px] bg-[#C4E1E5] shadow-buttonShadow
                                    hover:-translate-y-2 transition-all duration-[120ms] ease-in-out"
                                        initial={{scale: 0}}
                                        whileInView={{scale: 1}}
                                        transition={{duration: 0.2, delay: 0.2, ease: easeInOut}} >
                                        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-light text-sm text-darkColor">#C4E1E5</p>
                                    </motion.div>
                                    <p className="font-light text-sm tracking-wider">$light blue</p>
                    </div>
                </div>
                {/* FONTS SECTION */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-semibold mb-10">Poppins</h1>
                    <p className="text-3xl mb-5">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <p className="text-3xl mb-5 font-semibold">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                    <p className="text-3xl mb-5">1 2 3 4 5 6 7 8 9 0</p>
                    <p className="text-3xl mb-5 font-semibold">1 2 3 4 5 6 7 8 9 0</p>
                </div>
            </section>
            {/* NEXT WORK SECTION */}
            <section>
                <Link to="/project2">
                    <div className="relative group z-[10] overflow-hidden w-full h-[180px] bg-containerColor border-t-1 border-darkColor/10
                                    flex items-center justify-center">
                    <span className="absolute z-[-1] w-full h-[180px] bg-blueColor -translate-y-[100%] group-hover:-translate-y-[0]
                                        transition-all duration-[200ms] delay-150 ease-in-out"></span>
                    <span className="absolute z-[-2] w-full h-[180px] bg-orangeColor -translate-y-[100%] group-hover:-translate-y-[0]
                                        transition-all duration-[120ms] ease-in-out"></span>
                        <div className="w-3/4 h-full flex items-center justify-between text-darkColor group-hover:text-bodyColor">
                            <div>
                                <p className="text-sm tracking-wider mb-2">NEXT WORK</p>
                                <h1 className="text-5xl">Music Player</h1>
                            </div>
                            <div className="text-darkColor group-hover:text-bodyColor">
                                <LuMoveRight className="text-5xl transform -translate-x-8 transition-all duration-[120ms] ease-in-out
                                                        group-hover:-translate-x-0" />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            {/* FOOTER */}
            <Footer/>
        </div>
    )
}

export default Project2
