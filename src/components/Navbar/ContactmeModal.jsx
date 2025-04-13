import { Phone, X } from "lucide-react"
import ContactmeImage from "../Navbar/contactme-illustration.png"
import { HiOutlineUser } from "react-icons/hi"
import Input from "./Input"
import { LuMail, LuMessageCircle } from "react-icons/lu"
import { BiSolidSend } from "react-icons/bi"
import { useRef } from "react"
import { easeInOut, motion } from "framer-motion"

const ContactmeModal = ({ onCloseContact }) => {
    // LOGIC FOR CONTACT MODAL VISIBILITY TOGGLE
    const contactModalRef = useRef();
    const closeContactModal = (e) => {
        if(contactModalRef.current === e.target) {
            onCloseContact();
        }
    } 

    return (
        <div ref={ contactModalRef } onClick={ closeContactModal } className="fixed inset-0 bg-black/8 backdrop-blur-md flex items-center justify-center z-99">
            <div className="flex flex-col py-4 px-4 my-16 bg-bodyColor h-9/10 w-3/4 rounded-xl shadow-lg">
                <button onClick={ onCloseContact } className="place-self-end rounded-full p-1 hover:bg-gray-100"><X /></button>
                <div className="grid grid-cols-2 gap-4 px-16">
                    {/* GRID LEFT */}
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-semibold text-left">Contact Me</h1>
                            </div>
                            <div>
                                <a href="#" className="text-sm flex items-center gap-1 hover:text-blueColor"><Phone size={16} />(+91)8319958744</a>
                            </div>
                        </div>
                        {/* FORM SECTION */}
                        <div className="mt-6">
                            <form action="submit">
                                <div className="mb-4">
                                    <label className="flex items-center gap-2 mb-2"><HiOutlineUser />Name</label>
                                    <Input type="text" placeholder="Your name" />
                                </div>
                                <div className="mb-4">
                                    <label className="flex items-center gap-2 mb-2"><LuMail />Email</label>
                                    <Input type="email" placeholder="Your email" />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 mb-2"><LuMessageCircle />Message</label>
                                    <textarea name="message" className="bg-containerColor py-3 px-6 max-h-[277px] min-h-[277px] w-full outline-none border border-grayColor
                                                                        transition-all duration-[120ms] ease-in-out focus:border-orangeColor" 
                                    placeholder="Your message"></textarea>
                                </div>
                                <div>
                                    <button 
                                        className="relative bg-darkColor 
                                                    text-bodyColor px-6 py-3 mt-6 
                                                    transition-all duration-[120ms] ease-in-out 
                                                    rounded 
                                                    shadow-buttonShadow flex items-center hover:scale-[1.04] group">
                                        Send message <BiSolidSend size={24} 
                                            className="text-orangeColor opacity-[0] 
                                                        absolute top-1/2 -translate-y-1/2 -right-4 
                                                        group-hover:-right-9 group-hover:opacity-[1]
                                                        transition-all duration-[120ms] ease-in-out" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* GRUD RIGHT */}
                    <div>
                        <img src={ContactmeImage} alt="Contact me Illustration"
                            className="hover:scale-[1.05] transition-all duration-[200ms] ease-in-out" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactmeModal
