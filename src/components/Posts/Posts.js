import { useCollection } from 'react-firebase-hooks/firestore'
import PostCard from '../PostCard'
import { db } from '../../firebase';

function Posts({ posts }) {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )

    // console.log("Error >", error)
    // console.log("Loading >", loading)
    return (
        <div>
            {realtimePosts ?
                realtimePosts?.docs.map(post => {
                    {/* console.log("Data ", post.data()) */}
                    return (
                        <PostCard 
                            key={post.id}
                            name={post.data().name}
                            message={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data().postImage}
                        />
                    )
                }) :
                posts.map((post) => (
                    <PostCard 
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postImage}
                    />
                ))
            }
        </div>
    )
}

export default Posts
