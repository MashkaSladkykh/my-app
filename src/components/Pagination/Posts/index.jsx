export const Posts = ({posts}) => {
    return (
        <div className='posts'>
            <h1 className='posts-title'>Posts</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <h2 className='post-title'>{post.title}</h2>
                    <p className='post-body'>{post.body}</p>
                </div>
            ))}
        </div>
    )
}