
const Input = ({ type, placeholder }) => {
    return (
        <div>
            <input type={ type } placeholder={ placeholder } 
                                        className="bg-containerColor w-full outline-none border border-grayColor px-6 py-3
                                                    transition-all duration-[120ms] ease-in-out focus:border-orangeColor" />
        </div>
    )
}

export default Input
