import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

function PostCard({name, message, email, postImage, image, timestamp}) {
    return (
        <div className="flex flex-col">
            <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
                <div className="flex items-center space-x-2">
                    <img 
                        className="rounded-full"
                        src={image}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        {timestamp ? 
                            <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                            :
                            <p className="text-xs text-gray-400">Loading...</p>
                            }
                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 bg-white md:h-96">
                    <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}
            
            {/* Footer of post */}
            <div className="flex items-center justify-between text-gray-400 bg-white border-t shadow-md rounded-b-2xl">
                <div className="rounded-none rounded-b-2xl inputIcon">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                
                <div className="rounded-none inputIcon">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                
                <div className="rounded-none inputIcon rounded-br-2xl">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Share</p>
                </div>
                
            </div>
        </div>
    )
}

export default PostCard
