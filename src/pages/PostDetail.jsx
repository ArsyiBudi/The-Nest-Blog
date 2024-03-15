import React from 'react'
import PostAuthor from '../component/PostAuthor'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { FilePenLine } from 'lucide-react';
import Thumpnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
        <section className="post-detail">
          <div className="container post-detail_container">
            <div className="post-detail_header">
                <PostAuthor />
                <div className="post-detail_buttons">
                  <Link to={`/posts/werwer/edit`} className='btn sm primary'><FilePenLine size={23} absoluteStrokeWidth /></Link>
                  <Link to={`/posts/werwer/delete`} className='btn sm danger'><Trash2 size={23} absoluteStrokeWidth /></Link>
                </div>
            </div>
            <h1>this is the post title</h1>
            <div className="post-detail_thumpnail">
                  <img src={Thumpnail} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam veniam inventore ipsam deserunt libero quis sequi at, quo asperiores temporibus iure qui explicabo nulla quas facere et ab sint vitae eos illum sunt nostrum id. Distinctio minus obcaecati ipsum!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere et, aperiam illum tenetur perferendis velit eos exercitationem eligendi! Adipisci dignissimos quod illo hic animi incidunt necessitatibus doloribus ullam sint, eos earum! Tempore doloribus pariatur sint asperiores ut officia consectetur. </p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque facilis hic atque, magni quia eum porro delectus accusantium cum sed odit reprehenderit sunt, ipsa iste voluptatum unde dicta impedit quibusdam officiis dolorem pariatur? Iste dolorem velit sequi harum consequuntur sapiente eos accusamus tenetur eum itaque vero vitae cumque maiores asperiores debitis, ipsum ut optio. Adipisci labore reprehenderit corporis, minima non voluptates. Id tenetur ducimus quasi culpa! Quaerat, nobis. Beatae, suscipit aliquam. Fuga rem consequuntur a. Pariatur, ut ab. Tempora et temporibus nulla eum a recusandae. Quas aliquam inventore, expedita, obcaecati, soluta eaque nemo at provident odit ipsa quidem vitae quos tempora cupiditate pariatur. Minus est sunt, praesentium nihil adipisci nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur saepe porro repellendus voluptatem quibusdam minima repudiandae fugit aut optio.
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque facilis eligendi harum adipisci deserunt temporibus dicta? Accusantium rem quasi iure qui explicabo! Autem qui tenetur illo sit quis, aliquam eaque at! Repellat consectetur aliquam ex doloremque quibusdam debitis impedit, provident, excepturi laudantium in accusantium. Exercitationem, modi! Molestiae iste nemo voluptas tempora in aperiam eos maiores ipsam ut exercitationem animi quas, debitis sunt ad quia asperiores ratione libero labore! Quas voluptatibus natus id laudantium possimus fuga sequi sed! Est porro distinctio dolor sint doloremque sunt aliquam atque earum, consectetur facere, inventore soluta, ipsa tempore ut hic ipsum. Sed nostrum maxime quas iure tempore. Fugit pariatur numquam mollitia perspiciatis distinctio quod adipisci earum nihil ab vel nulla sit vitae ipsam veniam aperiam, doloremque architecto, quos molestiae culpa provident id aliquid incidunt alias! Dolores eaque minima at repudiandae consectetur voluptas atque corrupti quidem sunt odio maxime, ex natus, blanditiis quibusdam, temporibus quo ipsum iste ipsam quas autem iusto cumque tenetur dicta consequuntur! Nemo sint iste eius velit exercitationem officia voluptates, dolor, dolore nostrum vero amet corrupti debitis tempora quibusdam! Consequatur similique fugit eius reprehenderit ullam inventore, vel ipsa, laboriosam earum, accusamus illo sed maiores iusto quis doloremque tenetur facere quidem deserunt. Nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis dolorum eligendi eius iste consectetur? Totam excepturi id obcaecati soluta? Vel et provident, nostrum neque, officiis molestias eligendi voluptatibus distinctio soluta possimus atque quibusdam placeat laborum natus obcaecati voluptate iure similique odit tenetur dicta id quae qui maiores? Quis expedita ullam recusandae enim neque velit soluta reprehenderit illo? Quae laboriosam fuga placeat enim, odio molestiae voluptas sequi culpa nam dolorum obcaecati quidem ut possimus at autem ab deleniti ducimus doloribus esse aspernatur, doloremque ea. Vitae aperiam quia eum nulla, minima sed ratione laborum, error, quibusdam sunt iure. Fugit voluptate, exercitationem inventore molestiae reiciendis dolorum officiis ipsa cumque provident dolor necessitatibus quas veniam ipsum ad itaque maxime tempore. Vitae officiis ea tempore consequatur minus quibusdam animi, tempora sint aliquid deserunt iure atque maiores voluptas assumenda numquam neque, adipisci quasi! Quas suscipit impedit in aut obcaecati, dicta optio enim perferendis tempore sequi magnam harum laboriosam ducimus! Tempore, facilis temporibus. Eos doloribus aut minima consectetur cupiditate ipsa non aliquam delectus labore voluptas suscipit blanditiis molestiae aperiam dolore, vel asperiores repellat quibusdam ab architecto? Eligendi nisi magnam quis quasi suscipit, exercitationem culpa aliquam ut cupiditate quia dignissimos repellat quidem fugit iste accusantium! Rerum, illo.
            </p>
            <div className="post-detail_content"></div>
            <div className="post-detail_footer"></div>
          </div>
        </section>
    )
}

export default PostDetail