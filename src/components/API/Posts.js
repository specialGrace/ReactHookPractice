import React from 'react'
import Post from './Post'

function Posts({posts}) {
  return (
    <div>
        {
            posts.length > 0 && posts.map((post)=> <Post key={post.id} post={post}/>)
        }
    </div>
  )
}

export default Posts