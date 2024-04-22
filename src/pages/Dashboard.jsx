import React, { useState, useEffect} from 'react'
import { DummyPost } from '../DummyPost'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { FilePenLine } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios'
import Loader  from '../component/Loader';
import Deletepost from './DeletePost';

const Dashboard = () => {
  const [post, SetPost] = useState([])
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()
  
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!token) {
      Navigate('/login')
    }
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, 
        {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        SetPost(response.data)
      } catch (error) {
        console.log(error)
      }

      setIsLoading(false)
    }
    fetchPosts();
  }, [])
  

  if(isLoading) {
    return <Loader/>
  }

  return (
    <section className="dashboard">
      {
        post.length ? <div className="container dashboard_container">
          {
            post.map(post => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumpnail">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}uploads/${post.thumbnail}`} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/post/${post._id}`} className='btn sm'><Eye /></Link>
                  <Link to={`/post/${post._id}/edit`} className='btn sm primary'><FilePenLine /></Link>
                  <Deletepost postId={post._id}/>  
                </div>
              </article>
            })
          }
        </div> : <h2 className='center'>You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard