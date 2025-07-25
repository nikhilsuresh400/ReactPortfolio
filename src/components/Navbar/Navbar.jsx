import { Mail, Phone, MoveDown } from "lucide-react"
import "./Navbar.css"
import AboutmeModal from "./AboutmeModal"
import { useState, useEffect } from "react"
import ContactmeModal from "./ContactmeModal"
import { motion } from "motion/react";
import { easeInOut } from "motion"
import { Link } from "react-router-dom"
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi"
import { LuMenu } from "react-icons/lu"

const Navbar = ({ scrollToLatestWorks, scrollToExperience, scrollToEducation }) => {

    // LOGIC FOR NAME ANIMATION
    useEffect(() => {
        const spans = document.querySelectorAll(".bouncing-title span");
        const listeners = [];

        spans.forEach(span => {
            const handleMouseOver = () => {
                span.classList.add("bounce");
                setTimeout(() => {
                    span.classList.remove("bounce");
                }, 2000);
            };
            span.addEventListener("mouseover", handleMouseOver);
            listeners.push({ span, handleMouseOver });
        });

        return () => {
            listeners.forEach(({ span, handleMouseOver }) => {
                span.removeEventListener("mouseover", handleMouseOver);
            });
        };
    }, []);

    // LOGIC FOR ABOUTME MODAL TOGGLE
    const [showModal, setShowModal] = useState(false)

    // LOGIC FOR CONTACTME MODAL
    const [showContactModal, setShowContactModal] = useState(false)

    return (
        <div>
            <section className="flex flex-col justify-between h-screen">
                {/* NAVBAR */}
                <motion.nav
                    initial={{ translateY: "-100%" }}
                    whileInView={{ translateY: 0 }}
                    className="px-[2rem] lg:px-[8rem] py-[1rem] flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/">
                        <h1 className="text-4xl font-semibold font-cursiveFont hover:opacity-80 transition">Ni <span className="text-orangeColor">.</span></h1>
                    </Link>


                    {/* NAVLINKS */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div>
                            <ul className="flex items-center gap-8 border-r pr-8">
                                <a href="#" onClick={scrollToExperience}><li>Experience</li></a>
                                <a href="#" onClick={scrollToEducation}><li>Education</li></a>
                                <a href="#" onClick={() => setShowContactModal(true)}><li>Contact</li></a>
                            </ul>
                        </div>
                        {showContactModal && <ContactmeModal onCloseContact={() => setShowContactModal(false)} />}
                        <div className="cursor-pointer hover:text-orangeColor transition-all duration-[120ms] ease-in-out"><a href="mailto:nikaynm400@gmail.com"><Mail size={22} /></a></div>
                        <div className="cursor-pointer hover:text-[#25D366] transition-all duration-[120ms] ease-in-out"><a href="https://wa.me/8319958744?text=Hi%20Nikhil%2C%20I%20saw%20your%20portfolio!" target="_blank" noopener noreferrer><Phone size={22} /></a></div>
                    </div>

                    {/* HAMBURGER FOR MOBILE */}
                    <LuMenu className="text-[1.8rem] lg:hidden" />
                </motion.nav>


                {/* MAIN SECTION */}
                <div className="flex mt-8 lg:-mt-30">
                    <div className="w-full max-w-screen-2xl px-[2rem] lg:px-[8rem]">
                        <motion.p initial={{ opacity: 0, translateY: "-100%" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, type: easeInOut }}
                            className="text-center lg:text-left text-xl lg:text-2xl text-grayColor mb-4">Hey,</motion.p>

                        <motion.h1 initial={{ opacity: 0, translateY: "-32%" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, type: easeInOut }}
                            className="bouncing-title">
                            I'm <span>N</span><span>i</span><span>k</span><span>h</span><span>i</span><span>l</span>
                            <span className="ml-3 lg:ml-6">S</span><span>u</span><span>r</span><span>e</span><span>s</span><span>h</span>
                            <span className="text-orangeColor">.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, translateX: "-4%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.6, type: easeInOut }}
                            className="text-center lg:text-left text-xl lg:text-2xl mb-2 text-grayColor">I'm a <span className="text-orangeColor font-semibold">Frontend Web Developer</span></motion.p>

                        <motion.p
                            initial={{ opacity: 0, translateX: "-4%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8, type: easeInOut }}
                            className="text-center lg:text-left text-lg lg:text-2xl text-grayColor italic">I create things on the web to make the world a smaller place!</motion.p>

                        <motion.div className="flex items-center justify-center lg:justify-start gap-4 mt-12 lg:mt-6"
                            initial={{ opacity: 0, translateX: "-5%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, type: easeInOut }}>
                            {/* ABOUT ME BUTTON */}
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-darkColor text-bodyColor px-6 py-2
                                            transition-all duration-[120ms] ease-in-out 
                                            rounded shadow-buttonShadow flex items-center hover:scale-[1.04]">
                                About me </button>

                            {/* ABOUT ME MODAL */}
                            {showModal && <AboutmeModal onClose={() => setShowModal(false)} />}

                            {/* VIEW RESUME BUTTON */}
                            <Link to="/resume">
                                <button className="bg-darkColor text-bodyColor px-8 py-2 text-center
                                                    transition-all duration-[120ms] ease-in-out 
                                                    rounded shadow-buttonShadow hover:scale-[1.04]">
                                    Resume </button>
                            </Link>
                        </motion.div>
                        {/* SOCIAL LINKS */}
                        <ul className="flex gap-8 lg:gap-12 mt-10 place-content-center lg:place-content-start">
                            <motion.li
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.6, ease: easeInOut }}
                                className="transition-all duration-[120ms] ease-in-out hover:text-[#0077b5]"><a href="https://www.linkedin.com/in/nikhil-suresh-06207a360/" target="_blank" noopener noreferrer><FiLinkedin className="text-[1.6rem]" /></a></motion.li>
                            <motion.li
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.8, ease: easeInOut }}
                                className="transition-all duration-[120ms] ease-in-out hover:text-[#6cc644]"><a href="https://github.com/nikhilsuresh400" target="_blank" noopener noreferrer><FiGithub className="text-[1.6rem]" /></a></motion.li>
                            <motion.li
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 1, ease: easeInOut }}
                                className="transition-all duration-[120ms] ease-in-out hover:text-[#ee2a7b]"><a href="https://www.instagram.com/22.4.24k/" target="_blank" noopener noreferrer><FiInstagram className="text-[1.6rem]" /></a></motion.li>
                            <motion.li
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 1.2, ease: easeInOut }}
                                className="transition-all duration-[120ms] ease-in-out hover:text-orangeColor"><a href="mailto:nikaynm400@gmail.com"><FiMail className="text-[1.6rem]" /></a></motion.li>
                        </ul>
                    </div>
                </div>
                {/* LATEST WORKS BUTTON */}
                <button onClick={scrollToLatestWorks}
                    className="relative bg-darkColor 
                                text-bodyColor px-6 py-2 my-12 self-center 
                                transition-all duration-[120ms] ease-in-out 
                                rounded shadow-buttonShadow flex items-center hover:scale-[1.04] group">
                    Latest Works <MoveDown size={32}
                        className="text-orangeColor 
                                    absolute top-8 -translate-x-1/2 left-1/2 
                                    group-hover:top-12 
                                    transition-all duration-[120ms] ease-in-out" /></button>
            </section>
        </div>
    )
}

export default Navbar
