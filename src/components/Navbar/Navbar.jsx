import { Mail, Phone, Github, Instagram, Linkedin, MoveRight, MoveDown } from "lucide-react"
import "./Navbar.css"
import AboutmeModal from "./AboutmeModal"
import { useState, useEffect, useRef } from "react"
import ContactmeModal from "./ContactmeModal"
import { motion } from "motion/react";
import { easeInOut } from "motion"
import { Link } from "react-router-dom"
import LatestWorks from "../LatestWorks/LatestWorks"
import Experience from "../Experience/Experience"
import Education from "../Education/Education"
import { BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2 } from "react-icons/bs"

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
                <motion.nav
                    initial={{ translateY: "-100%" }}
                    whileInView={{ translateY: 0 }}
                    className="px-[8rem] py-[1rem] flex items-center justify-between">

                    {/* LOGO */}
                    <div>
                        <h1 className="text-4xl font-semibold font-cursiveFont">Ni <span className="text-orangeColor">.</span></h1>
                    </div>

                    {/* NAVLINKS */}
                    <div className="flex items-center gap-8">
                        <div>
                            <ul className="flex items-center gap-8 border-r pr-8">
                                <a href="#" onClick={scrollToExperience}><li>Experience</li></a>
                                <a href="#" onClick={scrollToEducation}><li>Education</li></a>
                                <a href="#" onClick={() => setShowContactModal(true)}><li>Contact</li></a>
                            </ul>
                        </div>
                        {showContactModal && <ContactmeModal onCloseContact={() => setShowContactModal(false)} />}
                        <div className="cursor-pointer hover:text-orangeColor transition-all duration-[120ms] ease-in-out"><Mail size={22} /></div>
                        <div className="cursor-pointer hover:text-[#25D366] transition-all duration-[120ms] ease-in-out"><Phone size={22} /></div>
                    </div>
                </motion.nav>
                {/* MAIN SECTION */}
                <div className="flex -mt-30">
                    <div className="w-full max-w-screen-2xl mx-auto">
                        <motion.p initial={{ opacity: 0, translateY: "-100%" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, type: easeInOut }}
                            className="text-2xl text-grayColor mb-4">Hey,</motion.p>

                        <motion.h1 initial={{ opacity: 0, translateY: "-32%" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, type: easeInOut }}
                            className="bouncing-title">
                            I'm <span>N</span><span>i</span><span>k</span><span>h</span><span>i</span><span>l</span>
                            <span className="ml-6">S</span><span>u</span><span>r</span><span>e</span><span>s</span><span>h</span>
                            <span className="text-orangeColor">.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, translateX: "-4%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.6, type: easeInOut }}
                            className="text-2xl mb-2 text-grayColor">I'm a <span className="text-orangeColor font-semibold">Frontend Developer</span></motion.p>

                        <motion.p
                            initial={{ opacity: 0, translateX: "-4%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8, type: easeInOut }}
                            className="text-2xl text-grayColor">I create things on the web to make the world a smaller place!</motion.p>

                        {/* ABOUT ME BUTTON */}
                        <button
                            onClick={() => setShowModal(true)}
                            className="relative bg-darkColor 
                                        text-bodyColor px-6 py-2 mt-6 
                                        transition-all duration-[120ms] ease-in-out 
                                        rounded 
                                        shadow-buttonShadow flex items-center hover:scale-[1.04] group">
                            About me <MoveRight size={32}
                                className="text-orangeColor 
                                            absolute top-1/2 -translate-y-1/2 -right-4 
                                            group-hover:-right-9 
                                            transition-all duration-[120ms] ease-in-out" /></button>

                        {/* ABOUT ME MODAL */}
                        {showModal && <AboutmeModal onClose={() => setShowModal(false)} />}
                    </div>
                    {/* SIDE BUTTONS */}
                    <motion.ul
                        initial={{ opacity: 0, translateX: "100%" }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.5, type: "ease-in-out" }}
                        className="flex flex-col gap-8 ml-auto mr-8 mt-30">
                        <li className="transition-all duration-[120ms] ease-in-out hover:text-[#0077b5]"><a href="https://www.linkedin.com/in/nikhil-suresh-06207a360/" target="_blank" noopener noreferrer><BsLinkedin className="text-2xl" /></a></li>
                        <li className="transition-all duration-[120ms] ease-in-out hover:text-[#6cc644]"><a href="https://github.com/nikhilsuresh400" target="_blank" noopener noreferrer><BsGithub className="text-2xl" /></a></li>
                        <li className="transition-all duration-[120ms] ease-in-out hover:text-[#ee2a7b]"><a href="https://www.instagram.com/22.4.24k/" target="_blank" noopener noreferrer><BsInstagram className="text-2xl" /></a></li>
                        <li className="transition-all duration-[120ms] ease-in-out hover:text-orangeColor"><a href="" target="_blank" noopener noreferrer><BsMailbox2 className="text-2xl" /></a></li>
                    </motion.ul>
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
