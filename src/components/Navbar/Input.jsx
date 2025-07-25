import { HiOutlineUser } from "react-icons/hi"

const Input = ({ type, labelName, labelIcon, id }) => {
    return (
        <div className="relative mb-8">
            <input id={id} type={type} placeholder=" " required
                className="peer w-full bg-containerColor text-sm border border-gray-300 px-4 py-4 outline-none 
                            transition-all duration-150 ease-in-out focus:border-orangeColor" />

            <label htmlFor={id} className="absolute left-4 text-sm text-darkColor flex items-center gap-2 bg-containerColor px-1 transition-all
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-darkColor
                                            peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-darkColor
                                            peer-not-placeholder-shown:top-[-12px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-darkColor">{labelIcon}{labelName} <span className="text-orangeColor">*</span></label>
        </div>
    )
}

export default Input
