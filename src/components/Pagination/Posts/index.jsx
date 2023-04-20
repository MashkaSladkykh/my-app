export const Posts = ({posts, setValue}) => (
    <div className='posts'>
        <h1 className='posts-title'>Posts</h1>
        <input type="number" placeholder="Type your number"  onChange={e => setValue(e.target.value)}/>
        {posts.map((post, index) => (
            <div className='post' key={index}>
                <h2 className='post-title'>{post}</h2>
                {/* <p className='post-body'>{post.body}</p> */}
            </div>
        ))}
    </div>
)