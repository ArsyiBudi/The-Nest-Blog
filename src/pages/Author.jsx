import React, { useState } from 'react'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'

const AuthorsData = [
  { id: 1, avatar: Avatar1, name: 'Ernest Archiever', post: 3},
  { id: 2, avatar: Avatar2, name: 'Ernest Archiever', post: 5},
  { id: 3, avatar: Avatar3, name: 'Ernest Archiever', post: 0},
  { id: 4, avatar: Avatar4, name: 'Ernest Archiever', post: 2},
  { id: 5, avatar: Avatar5, name: 'Ernest Archiever', post: 1},
  { id: 5, avatar: Avatar5, name: 'Ernest Archiever', post: 1},
]

const Author = () => {
  const [authors, serAuthors] = useState(AuthorsData);

  return (
      <section className="authors">
        { authors.length > 0 ? <div className="container authors_container">
          {
            authors.map(({id, avatar, name, post}) => {
             return <Link key={id} to={`post/user/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={avatar} alt={`image of ${name}`} />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{post}</p>
                </div>
              </Link>
            })    
          }  
        </div> : <h2 className='center'>No Users/Authors</h2>}
      </section>
    )
}

export default Author