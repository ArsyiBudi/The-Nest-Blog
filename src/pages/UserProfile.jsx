import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import { FilePenLine } from 'lucide-react';
import { Check } from 'lucide-react';

const UserProfile = () => {
  const [avatar, SetAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [ConfirmnewPassword, setConfirmNewPassword] = useState('')

  return (
  <section className="profile">
    <div className="container profile_container">
      <Link to={`/myposts/ssd`} className='btn'>My Post</Link>
      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={avatar} alt="" />
          </div>
          {/* Form to update avatar  */}
          <form className="avatar_form">
            <input type="file" name="avatar" id="avatar" onChange={e => SetAvatar(e.target.files[0])} accept="png, jpg, jpeg" />
            <label htmlFor="avatar" ><FilePenLine /></label>
          </form>
          <button className='profile_avatar-btn'><Check /></button>
        </div>
        <h1>Ernest Achiever</h1>
        {/* form to update user detail  */}
        <form className="form profile_form">
          <p className="form_error-message">This is an error message</p>
          <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder='Current password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
          <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
          <input type="password" placeholder='Confirm Password' value={ConfirmnewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
          <button type='submit' className='btn primary'>Update details</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default UserProfile