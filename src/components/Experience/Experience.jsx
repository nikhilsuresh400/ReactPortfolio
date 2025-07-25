import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="pt-10 px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col items-center justify-between mb-18 lg:mb-24 text-center">
                <motion.p className="text-grayColor mb-2 text-sm sm:text-base"
                    initial={{ opacity: 0, translateY: 25 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    PROFESSIONAL JOURNEY
                </motion.p>
                <motion.h1 className="text-darkColor text-5xl lg:text-5xl font-semibold"
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    Experience<span className="text-orangeColor">.</span>
                </motion.h1>
            </div>

            <div className="w-full sm:w-3/4 mx-auto mb-10 relative">
                {/* Vertical timeline */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-orangeColor transform -translate-x-1/2 z-0" />
                <div className="absolute left-1/2 top-0 h-[2px] w-[8px] bg-orangeColor transform -translate-x-1/2 z-0" />
                <motion.div className="absolute left-1/2 top-1/4 h-[15px] w-[15px] rounded-full bg-orangeColor transform -translate-x-1/2 z-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} />
                <motion.div className="absolute left-1/2 top-3/4 h-[15px] w-[15px] rounded-full bg-orangeColor transform -translate-x-1/2 z-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} />
                <div className="absolute left-1/2 bottom-0 h-[2px] w-[8px] bg-orangeColor transform -translate-x-1/2 z-0" />

                {/* UPPER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 relative z-10 mb-8">
                    {/* LEFT */}
                    <motion.div className="p-4 sm:p-6 lg:p-12"
                        initial={{ opacity: 0, translateX: -50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                        <div className="relative py-4 px-6 lg:px-8 rounded shadow-buttonShadow bg-containerColor h-48 sm:h-56
                                        flex flex-col justify-center hover:-translate-y-2
                                        transition-all duration-[240ms] ease-in-out group">
                            <h1 className="font-bold text-2xl lg:text-4xl mb-3 lg:mb-2">Frontend Developer</h1>
                            <p className="text-grayColor text-sm sm:text-base mb-2 lg:mb-1">Fenopix Technologies Pvt. Ltd. - Bengaluru, KA</p>
                            <p className="font-semibold text-blueColor text-sm sm:text-base">&bull; GPA - 7.6</p>
                            <span className="absolute bottom-14 lg:bottom-15 right-4 text-blueColor
                                            group-hover:-translate-y-6
                                            transition-all delay-80 duration-[240ms] ease-in-out text-sm sm:text-base">01</span>
                            <div className="absolute right-5 bottom-5 h-1/6 w-[2px] bg-grayColor transform -translate-x-1/2
                                            group-hover:h-1/4
                                            transition-all duration-[240ms] ease-in-out" />
                        </div>
                    </motion.div>
                    {/* RIGHT */}
                    <div className="p-4 sm:p-6 lg:p-12 flex items-center justify-start lg:justify-center sm:justify-start text-center sm:text-left">
                        <p className="text-grayColor text-sm sm:text-base">Jun. 2023 - Present</p>
                    </div>
                </div>

                {/* LOWER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 relative z-10">
                    {/* LEFT */}
                    <div className="p-4 sm:p-6 lg:p-12 flex items-center justify-end lg:justify-center sm:justify-end text-center sm:text-right">
                        <p className="text-grayColor text-sm sm:text-base">Nov. 2022 - Jun. 2023</p>
                    </div>
                    {/* RIGHT */}
                    <motion.div className="p-4 sm:p-6 lg:p-12"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                        <div className="relative py-4 px-6 lg:px-8 rounded shadow-buttonShadow bg-containerColor h-48 sm:h-56
                                        flex flex-col justify-center hover:-translate-y-2
                                        transition-all duration-[240ms] ease-in-out group">
                            <h1 className="font-bold text-2xl lg:text-4xl mb-3 lg:mb-2">Operations Executive</h1>
                            <p className="text-grayColor text-sm sm:text-base mb-2 lg:mb-1">Teleperformance Global India Pvt. Ltd. - Bengaluru, KA</p>
                            <p className="font-semibold text-blueColor text-sm sm:text-base">&bull; 12th Grade - 82%</p>
                            <span className="absolute bottom-14 lg:bottom-15 right-4 text-blueColor
                                            group-hover:-translate-y-6
                                            transition-all delay-80 duration-[240ms] ease-in-out text-sm sm:text-base">02</span>
                            <div className="absolute right-5 bottom-5 h-1/6 w-[2px] bg-grayColor transform -translate-x-1/2
                                            group-hover:h-1/4
                                            transition-all duration-[240ms] ease-in-out" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
