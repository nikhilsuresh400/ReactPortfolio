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
            <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black/8 backdrop-blur-md flex items-center justify-center z-50 p-2">
                {/* Modal Container */}
                <div className="flex flex-col py-4 px-4 sm:my-16 bg-bodyColor h-auto sm:h-[90%] w-3/4 rounded-xl shadow-lg overflow-y-auto">
                    <button onClick={onClose} className="place-self-end rounded-full p-1 hover:bg-gray-100">
                        <X />
                    </button>

                    {/* Grid Layout: Switch to 1 column on small screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-16 gap-6">
                        {/* LEFT SIDE */}
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">ABOUT ME</h1>
                            <div className="mt-4 text-sm sm:text-base">
                                <p className="mt-4">Based in Kerala(IN), B.E. Computer Science graduate.</p>
                                <p className="mt-4">I have worked on various frontend projects for 2 years. I love
                                    <span className="text-blueColor"> ReactJS</span>,
                                    <span className="text-blueColor"> jQuery</span> and
                                    <span className="text-blueColor"> Tailwind/CSS animations</span>. I'm always learning and would love to build more projects and connect with like-minded people across the world through technology.
                                </p>
                                <p className="mt-4">I like cooking, I listen to indie music in my free time,
                                    and I'm always advocating for happy hours by trying my best to stay positive in life.
                                </p>
                                <p className="mt-4">I also like photography, check them <Link to="./gallery" className="text-orangeColor">here</Link>.</p>
                            </div>

                            {/* TECH STACK */}
                            <div className="mt-6">
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

                            {/* TECH ICONS */}
                            <div className="mt-6 flex flex-wrap items-center gap-6">
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

                        {/* RIGHT SIDE */}
                        <div className="flex justify-center items-center">
                            <img src={ModalPhoto} alt="Modal Illustration"
                                className="max-w-[100%] sm:max-w-[80%] hover:scale-[1.05] transition-all duration-[200ms] ease-in-out" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AboutmeModal
