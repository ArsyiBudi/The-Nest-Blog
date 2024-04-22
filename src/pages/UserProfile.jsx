import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FilePenLine, Turtle } from 'lucide-react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';

const UserProfile = () => {
  const [avatar, SetAvatar] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [ConfirmnewPassword, setConfirmNewPassword] = useState('')

  const [isAvatarTouched, setIsAvatarTouched] = useState(false)

  const Navigate = useNavigate()
  
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if(!token) {
      Navigate('/login')
    }
  }, [])

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false)
    try {
      const postData = new FormData();
      postData.set('avatar', avatar)
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/change-avatar`, postData, 
      {withCredentials: true, headers: {Authorization: `bearer ${token}`}})
      SetAvatar(response.data.avatar)
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <section className="profile">
    <div className="container profile_container">
      <Link to={`/myposts/${currentUser.id}`} className='btn'>My Post</Link>
      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" />
          </div>
          {/* Form to update avatar  */}
          <form className="avatar_form">
            <input type="file" name="avatar" id="avatar" onChange={e => SetAvatar(e.target.files[0])} accept="png, jpg, jpeg" />
            <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)} ><FilePenLine /></label>
          </form>
            {isAvatarTouched && <button className='profile_avatar-btn' onClick={changeAvatarHandler}><Check /></button>}
        </div>
        <h1>{currentUser.name}</h1>
        {/* form to update user detail  */}
        <form className="form profile_form">
          {/* <p className="form_error-message">This is an error message</p> */}
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