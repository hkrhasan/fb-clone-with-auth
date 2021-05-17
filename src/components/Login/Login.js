import Image from 'next/image'
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className="grid h-screen place-items-center">
            <Image 
                src="https://links.papareact.com/5me"
                height={300}
                width={300}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 text-center text-white bg-blue-500 rounded-full cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
