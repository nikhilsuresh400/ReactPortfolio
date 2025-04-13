
import { motion, easeInOut } from "framer-motion"

const Experience = () => {
    return (
        <div className="pt-10">
            <div className="flex flex-col items-center justify-center mb-24">
                <motion.p className="text-grayColor mb-4"
                            initial={{opacity: 0, translateY: 25}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 0.5, type: easeInOut}}>PROFESSIONAL JOURNEY</motion.p>
                <motion.h1 className="text-darkColor text-5xl font-semibold"
                            initial={{opacity: 0, translateY: -100}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{duration: 0.5, type: easeInOut}}>Experience<span className="text-orangeColor">.</span></motion.h1>
            </div>
            <div className="w-3/4 place-self-center mb-10 relative">
            {/* VERTICAL LINE */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-orangeColor transform -translate-x-1/2 z-0" />
            
            {/* VERTICAL LINE TEXTURE */}
            <div className="absolute left-1/2 top-0 h-[2px] w-[8px] bg-orangeColor transform -translate-x-1/2 z-0" />
            <motion.div className="absolute left-1/2 top-1/4 h-[15px] w-[15px] rounded-full bg-orangeColor transform -translate-x-1/2 z-0" 
                                    initial={{scale: 0}}
                                    whileInView={{scale: 1}}
                                    transition={{duration: 0.5, type: easeInOut}}/>
            <motion.div className="absolute left-1/2 top-3/4 h-[15px] w-[15px] rounded-full bg-orangeColor transform -translate-x-1/2 z-0" 
                                    initial={{scale: 0}}
                                    whileInView={{scale: 1}}
                                    transition={{duration: 0.5, type: easeInOut}}/>
            <div className="absolute left-1/2 bottom-0 h-[2px] w-[8px] bg-orangeColor transform -translate-x-1/2 z-0" />
                
                {/* UPPER */}
                <div className="grid grid-cols-2 relative z-10">
                    {/* UPPER LEFT */}
                    <motion.div className="p-12"
                                initial={{opacity: 0, translateX: -50}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 0.5, type: easeInOut}}>
                        <div className="relative py-4 px-8 rounded shadow-buttonShadow bg-containerColor h-56
                                        flex flex-col justify-center hover:-translate-y-2
                                        transition-all duration-[240ms] ease-in-out group">
                            <h1 className="font-bold text-5xl mb-2">Frontend Developer</h1>
                            <p className="text-grayColor text-lg mb-1">Fenopix Technologies Pvt. Ltd. - Bengaluru, KA</p>
                            <p className="font-semibold text-blueColor">&bull; GPA - 7.6</p>
                            {/* CARD SIDE GRAPHIC */}
                            <span className="absolute bottom-18 right-4 text-blueColor
                                            group-hover:-translate-y-3
                                            transition-all delay-150 duration-[240ms] ease-in-out">01</span>
                            <div className="absolute right-5 bottom-5 h-1/5 w-[2px] bg-grayColor transform -translate-x-1/2
                                            group-hover:h-1/4
                                            transition-all duration-[240ms] ease-in-out" />
                        </div>
                    </motion.div>
                    {/* UPPER RIGHT */}
                    <div className="p-12 flex flex-col justify-center">
                        <p className="place-self-start text-grayColor">Jun. 2023 - Present</p>
                    </div>
                </div>

                {/* LOWER */}
                <div className="grid grid-cols-2 relative z-10">
                    {/* LOWER LEFT */}
                    <div className="p-12 flex flex-col justify-center">
                        <p className="place-self-end text-grayColor">Nov. 2022 - Jun. 2023</p>
                    </div>
                    {/* LOWER RIGHT */}
                    <motion.div className="p-12"
                                initial={{opacity: 0, translateX: 50}}
                                whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 0.5, type: easeInOut}}>
                        <div className="relative py-4 px-8 rounded shadow-buttonShadow bg-containerColor h-56
                                        flex flex-col justify-center hover:-translate-y-2
                                        transition-all duration-[240ms] ease-in-out group">
                            <h1 className="font-bold text-5xl mb-2">Operations Executive</h1>
                            <p className="text-grayColor text-lg mb-1">Teleperformance Global India Pvt. Ltd. - Bengaluru, KA</p>
                            <p className="font-semibold text-blueColor">&bull; 12th Grade - 82%</p>
                            {/* CARD SIDE GRAPHIC */}
                            <span className="absolute bottom-18 right-4 text-blueColor
                                            group-hover:-translate-y-3
                                            transition-all delay-150 duration-[240ms] ease-in-out">02</span>
                            <div className="absolute right-5 bottom-5 h-1/5 w-[2px] bg-grayColor transform -translate-x-1/2
                                            group-hover:h-1/4
                                            transition-all duration-[240ms] ease-in-out" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience
