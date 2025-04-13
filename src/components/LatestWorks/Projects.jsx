
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
                <div className="px-16 py-5 mb-8 group-hover:scale-[1.04]
                                                transition-all duration-[1000ms] ease-in-out">
                    <h1 className="text-7xl font-semibold">{projectName}</h1>
                    <p>{projectDesc}</p>
                    <Link to={link}>
                        <button
                            className="relative bg-blueColor 
                                                    text-bodyColor px-6 py-2 mt-6 
                                                    transition-all duration-[120ms] ease-in-out 
                                                    rounded 
                                                    shadow-buttonShadow flex items-center gap-2 hover:scale-[1.04]">
                            Case study <IoMdShareAlt className="text-xl" /></button>
                    </Link>
                </div>
        </>
    )
}

export default Projects
