import React from 'react'

const authorpost = () => {
  return (
    <section className="author_post">
         {post.length > 0 ? <div className="container author_post-container">
         {
            post.map(({id, Thumpnail, category, title, desc, authorID}) =>
            <PostItem key={id} postID={id} Thumpnail={Thumpnail} category={category} title={title} description={desc} authorID={authorID}/>)
          }
         </div> : <h2 className='center'>not post founds</h2>}
        </section>
  )
}

export default authorpost