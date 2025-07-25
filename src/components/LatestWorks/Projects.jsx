
import { IoMdShareAlt } from "react-icons/io"
import { Link } from "react-router-dom"

const Projects = ({ projectNumber, projectName, projectDesc, link }) => {
    return (
        <>
            <div className="place-self-end px-2">
                <span className="text-[10rem] font-semibold absolute right-1 -top-0
                                                    opacity-0 group-hover:opacity-100 group-hover:-top-22
                                                    transition-all duration-[1000ms] ease-in-out">{projectNumber}</span>
            </div>
            <div className="px-8 lg:px-16 py-5 mb-8 h-[28rem] lg:h-[100%] group-hover:scale-[1.04] flex flex-col lg:gap-4 items-center lg:items-start justify-center lg:justify-center
                                                transition-all duration-[1000ms] ease-in-out">
                <div>
                    <h1 className="text-5xl lg:text-7xl text-center lg:text-left font-semibold">{projectName}</h1>
                    <p className="text-center lg:text-left mt-4 lg:mt-0 text-md lg:text-md">{projectDesc}</p>
                </div>
                <div>
                    <Link to={link}>
                        <button
                            className="relative bg-blueColor 
                                                        text-bodyColor px-6 py-2 mt-24 lg:mt-6 
                                                        transition-all duration-[120ms] ease-in-out 
                                                        rounded 
                                                        shadow-buttonShadow flex items-center gap-2 hover:scale-[1.04]">
                            Case study <IoMdShareAlt className="text-xl" /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects
