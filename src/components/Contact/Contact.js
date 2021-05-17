import Image from 'next/image'

function Contact({ src, name }) {
    return (
        <div className="relative flex items-center p-2 mb-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-xl">
            <Image 
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={50}
                height={50}
                layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full bottom-2 left-7 animate-bounce"></div>
        </div>
    )
}

export default Contact
