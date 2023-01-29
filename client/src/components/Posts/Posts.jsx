import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/PostActions'
import Post from '../Post/Post'
import PostsSkelton from '../PostsSkelton/PostsSkelton'

const Posts = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)
  const params = useParams()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  },[])

  if(!posts) return "no posts";
  if(params.id) posts = posts.filter((post)=> post.userId === params.id)

  return (
    <div className="Posts">
        { loading ? <PostsSkelton /> : 
        posts.map((post, id)=>{
            return <Post data={post} id={id} key={id} />
        })}
    </div>
  )
}

export default Posts