import React from 'react'
import {Link} from 'react-router-dom'

function Post({post}) {
  return (
    <div>
        <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <img src={post.url} alt={post.title}/>
        </Link>
    </div>
  )
}

export default Post