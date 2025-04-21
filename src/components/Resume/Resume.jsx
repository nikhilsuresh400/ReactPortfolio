import { FiDownload } from "react-icons/fi";
import qrcode from "./qrcode.png"
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Resume = () => {

    // NUMBER LINE ARRAY
    const lines = Array.from({ length: 44 }, (_, i) => i + 1);

    return (
        <div className="relative flex items-center justify-center">
            <Link to="/">
                <IoMdArrowBack className="absolute top-3 left-3 text-3xl"/>
            </Link>
            {/* BACKGROUND GRAPHIC */}
            <div className="absolute -z-1">
                <h1 className="text-[30rem] font-bold text-[#eeeeee]">RESUME</h1>
            </div>

            {/* MAIN */}
            <div className="overflow-y-auto flex font-mono bg-containerColor bg-[url('src/components/Resume/texture.png')] bg-repeat h-screen w-5/8 shadow-2xl p-4">
                {/* NUMBER LINE */}
                <div className="pr-4 text-left text-sm text-gray-400 font-mono">
                    {lines.map((line) => (
                        <div key={line} className="h-6 leading-6">{line}</div>
                    ))}
                </div>
                {/* MAIN CONTENT */}
                <div className="w-full text-darkColor">
                    {/* HEADER */}
                    <div className="flex justify-between">
                        {/* NAME */}
                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-5xl font-bold mb-2"><span className="text-orangeColor">&lt;</span>CV<span className="text-orangeColor">&gt;</span></p>
                                {/* DOWNLOAD RESUME BUTTON */}
                                <a href="/ResumeOriginal.pdf" download="Resume-NikhilSuresh.pdf"
                                    className="flex items-center gap-2">
                                    <FiDownload className="text-2xl" />
                                </a>
                            </div>
                            <p className="text-4xl font-semibold">Nikhil Suresh</p>
                            <p className="text-[1.32rem]">Frontend Web Developer</p>
                            <div className="flex gap-3">
                                <a href="mailto:nikaynm400@gmail.com" target="_blank" rel="noopener noreferrer" className="pr-3 border-r border-gray-400">Mail</a>
                                <a href="https://www.linkedin.com/in/nikhil-suresh-06207a360/" target="_blank" rel="noopener noreferrer" className="pr-3 border-r border-gray-400">Linkedin</a>
                                <a href="https://github.com/nikhilsuresh400" target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                        </div>
                        {/* QR CODE */}
                        <div className="flex flex-col items-center">
                            <div className="mt-1">
                                <img src={qrcode} alt="Phone QR Code"
                                    className="w-28" />
                            </div>
                            <p className="font-bold text-[0.95rem] mt-1">+91 8319958744</p>
                        </div>
                    </div>
                    {/* ABOUT ME */}
                    <div>
                        <hr className="my-4 text-gray-200" />
                        <p className="text-3xl font-bold mb-2"><span className="text-orangeColor">.</span>about me</p>
                        <p>Based in Kerala(IN), B.E. Computer Science graduate.
                            I have worked on various frontend projects for 2 years. I like ReactJS, jQuery and Tailwind/CSS animations. I'm
                            always learning and I'd love to build more projects and connect with like-minded people across the world
                            through technology.</p>
                    </div>
                    {/* EDUCATION */}
                    <div>
                        <p className="text-3xl font-bold mt-3 mb-2"><span className="text-orangeColor">.</span>education</p>
                        <div className="grid grid-cols-[2fr_1.5fr] gap-2">
                            {/* Education area */}
                            <div className="flex flex-col gap-1">
                                <div>
                                    <div>
                                        <p className="font-bold">Bachelor of Engineering in Computer Science & Engineering (B.E.)
                                            <br />7.11 (2021)
                                        </p>
                                        <p>Nehru Institute of Technology (affil. Anna University), Coimbatore, Tamil Nadu - 641112</p>
                                    </div>{/* Duration */}<div></div>
                                </div>
                                <div>
                                    <div>
                                        <p className="font-bold">12th (2016)
                                            6.14
                                        </p>
                                        <p>Adarsh Vidyalaya Higher Secondary School (CBSE), Raipur, <br />Chhattisgarh - 492001</p>
                                    </div>{/* Duration */}<div></div>
                                </div>
                            </div>
                            {/* Certification area */}
                            <div>
                                <p className="text-3xl font-bold mb-2"><span className="text-orangeColor">.</span>certification</p>
                                <div className="grid grid-cols-3 gap-8">
                                    <div>
                                        <p>Complete 2023 <span className="text-blueColor">Web Development</span> Bootcamp by Dr. Angela Yu</p>
                                    </div>
                                    <div>
                                        <p><span className="text-blueColor">Python</span> Professional Course by Dr. Angela Yu</p>
                                    </div>
                                    <div>
                                        <p><span className="text-blueColor">Java</span> Object Oriented Programming by Ranga Karanam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* WORK EXPERIENCE */}
                    <div>
                        <p className="text-3xl font-bold mt-3 mb-2"><span className="text-orangeColor">.</span>work experience</p>
                        <div className="grid grid-cols-2 w-1/2">
                            <div>
                                <p className="font-bold">Frontend Web Developer</p>
                                <p>Fenopix</p>
                            </div>
                            <div>
                                <p>April 2024 - Present</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-1/2">
                            <div>
                                <p className="font-bold">Operations Executive</p>
                                <p>Teleperformance Global</p>
                            </div>
                            <div>
                                <p>November 2023 - April 2024</p>
                            </div>
                        </div>
                    </div>
                    {/* PROJECTS */}
                    <div>
                        <div className="grid grid-cols-[1fr_2fr] w-3/4">
                            <div className="flex items-center justify-center">
                                <FaProjectDiagram 
                                        className="text-5xl" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold mt-3 mb-2"><span className="text-orangeColor">.</span>projects</p>
                                <ul className="list-disc pl-6">
                                    <li>Efficient Emergency Accident Detetction <span className="text-orangeColor">University Project</span></li>
                                    <li>Sundown Studio <span className="text-orangeColor">Clone</span></li>
                                    <li>Personal Portfolio Website using <span className="text-orangeColor">Reactjs, Tailwindcss</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* SKILLS */}
                    <div>
                    <p className="text-3xl font-bold mt-3 mb-2"><span className="text-orangeColor">.</span>skills</p>
                        <p>Reactjs Javascript jQuery TailwindCSS Framer Motion BootstrapCSS HTML5 CSS3 Nodejs Git/Github Figma AdobeXD Illustrator Canva
                            <span className="text-blueColor"> English </span>
                            <span className="text-blueColor">Hindi </span>
                            <span className="text-blueColor">Malayalam</span>
                        </p>
                    </div>
                    <p className="text-5xl font-bold mt-2"><span className="text-orangeColor">&lt;</span>/CV<span className="text-orangeColor">&gt;</span></p>
                </div>
            </div>
        </div>
    )
}

export default Resume
