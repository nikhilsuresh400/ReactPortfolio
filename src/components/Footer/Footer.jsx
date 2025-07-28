import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="h-80 w-full py-12 px-24 bg-darkColor text-bodyColor
                        flex flex-col justify-center items-center">
            <footer className="flex flex-col items-center justify-center">
                <div className="mb-6">
                    <h1 className="text-5xl lg:text-6xl font-semibold font-cursiveFont">Ni <span className="text-orangeColor">.</span></h1>
                </div>
                <div className="flex items-center gap-16 font-semibold mb-8">
                    <div><a href="https://www.linkedin.com/in/nikhil-suresh-06207a360/" target="_blank" noopener noreferrer>Linkedin</a></div>
                    <div><a href="https://github.com/nikhilsuresh400" target="_blank" noopener noreferrer>Github</a></div>
                    <div><a href="#">Email</a></div>
                    <div><a href="https://www.instagram.com/22.4.24k/" target="_blank" noopener noreferrer>Instagram</a></div>
                </div>
                <div>
                    <p className="text-sm text-grayColor">&copy; 2025 Nikhil Suresh - Portfolio</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
