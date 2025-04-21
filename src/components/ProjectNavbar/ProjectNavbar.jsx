
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { LuMoveLeft } from "react-icons/lu"
import { Link } from "react-router-dom"

const ProjectNavbar = () => {
    return (
        <div >
            <motion.nav
                initial={{ translateY: "-100%" }}
                whileInView={{ translateY: 0 }}
                className="px-[8rem] py-[1rem] flex items-center justify-between">
                {/* LOGO */}
                <Link to="/">
                    <h1 className="text-4xl font-semibold font-cursiveFont hover:opacity-80 transition">Ni <span className="text-orangeColor">.</span></h1>
                </Link>
                {/* NAVLINKS */}
                <div className="flex items-center gap-8">
                    <div>
                        <ul className="flex items-center gap-8 border-r pr-8">
                            <Link to="/"><li className="flex items-center gap-2 group">
                                <LuMoveLeft className="group-hover:-translate-x-1 transition-all duration-[120ms] ease-in-out
                                                        text-orangeColor text-lg " /> Turn Back Home</li></Link>
                        </ul>
                    </div>
                    <div className="cursor-pointer hover:text-orangeColor transition-all duration-[120ms] ease-in-out"><Mail size={22} /></div>
                    <div className="cursor-pointer hover:text-[#25D366] transition-all duration-[120ms] ease-in-out"><Phone size={22} /></div>
                </div>
            </motion.nav>
        </div>
    )
}

export default ProjectNavbar
