import React, { useState } from 'react'
import { DummyPost } from '../DummyPost'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { FilePenLine } from 'lucide-react';
import { Eye } from 'lucide-react';

const Dashboard = () => {
  const [post, SetPost] = useState(DummyPost)


  return (
    <section className="dashboard">
      {
        post.length ? <div className="container dashboard_container">
          {
            post.map(post => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumpnail">
                    <img src={post.Thumpnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/post/${post.id}`} className='btn sm'><Eye /></Link>
                  <Link to={`/post/${post.id}/edit`} className='btn sm primary'><FilePenLine /></Link>
                  <Link to={`/post/${post.id}/delete`} className='btn sm danger'><Trash2 /></Link>
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