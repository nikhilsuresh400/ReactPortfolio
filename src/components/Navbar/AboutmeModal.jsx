import { X } from "lucide-react"
import TechList from "./TechList"
import ModalPhoto from "./aboutMe_illustration.png"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import styles from "./AboutmeModal.module.css"
import { useRef } from "react"
import { Link } from "react-router-dom"

function AboutmeModal({ onClose }) {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <>
            <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black/8 backdrop-blur-md flex items-center justify-center z-99">
                {/* CLOSE BUTTON */}
                <div className="flex flex-col py-4 px-4 my-16 bg-bodyColor h-9/10 w-3/4 rounded-xl shadow-lg">
                    <button onClick={onClose} className="place-self-end rounded-full p-1 hover:bg-gray-100"><X /></button>
                    {/* MODAL CONTENT */}
                    <div className="grid grid-cols-2 px-16">
                        {/* GRID LEFT */}
                        <div>
                            <div>
                                <h1 className="text-4xl font-semibold text-left">ABOUT ME</h1>
                            </div>
                            <div className="mt-4">
                                <p className="mt-6">Based in Kerala(IN), B.E. Computer Science graduate.</p>
                                <p className="mt-4">I have worked on various frontend projects for 2 years.
                                    I love
                                    <span className="text-blueColor"> ReactJS</span>,
                                    <span className="text-blueColor"> jQuery</span> and
                                    <span className="text-blueColor"> Tailwind/CSS animations</span>.
                                    I'm always learning and I'd love to build more projects and connect with like-minded people across the world through technology.</p>
                                <p className="mt-4">I like cooking, I listen to indie music in my free time,
                                    and i'm always advocating for happy hours by trying my best to stay positive in life.</p>
                                <p className="mt-4">I also like photography, check them <Link to="./gallery" className="text-orangeColor" >here</Link>.</p>
                            </div>
                            {/* STACK SHOWCASE */}
                            <div className="mt-7">
                                <div className="mb-4">
                                    <p className="text-grayColor mb-2">Technologies</p>
                                    <TechList name="HTML5" />
                                    <TechList name="CSS3" />
                                    <TechList name="Javascript" />
                                    <TechList name="NodeJS" />
                                </div>
                                <div className="mb-4">
                                    <p className="text-grayColor mb-2">Libraries/Frameworks</p>
                                    <TechList name="ReactJS" />
                                    <TechList name="jQuery" />
                                    <TechList name="TailwindCSS" />
                                    <TechList name="Framer Motion" />
                                    <TechList name="BootstrapCSS" />
                                </div>
                                <div className="mb-4">
                                    <p className="text-grayColor mb-2">Tools</p>
                                    <TechList name="Git/Github" />
                                    <TechList name="Figma" />
                                    <TechList name="Canva" />
                                    <TechList name="AdobeXD" />
                                    <TechList name="Illustrator" />
                                </div>
                            </div>
                            {/* TECH-TOOLTIPS */}
                            <div className="mt-8 flex items-center gap-12 h-32 w-[100%]">
                                <div className={styles.iconContainer}>
                                    <IoLogoJavascript className={styles.stackIcon} />
                                    <span className={styles.tooltip}>Javascript</span>
                                </div>
                                <div className={styles.iconContainer}>
                                    <FaReact className={styles.stackIcon} />
                                    <span className={styles.tooltip}>ReactJS</span>
                                </div>
                                <div className={styles.iconContainer}>
                                    <RiTailwindCssFill className={styles.stackIcon} />
                                    <span className={styles.tooltip}>TailwindCSS</span>
                                </div>
                                <div className={styles.iconContainer}>
                                    <FaNodeJs className={styles.stackIcon} />
                                    <span className={styles.tooltip}>NodeJS</span>
                                </div>
                            </div>
                        </div>
                        {/* GRID RIGHT */}
                        <div>
                            <img src={ModalPhoto} alt="Modal Illustration"
                                className="hover:scale-[1.05] transition-all duration-[200ms] ease-in-out" />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutmeModal
