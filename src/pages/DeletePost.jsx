import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import Loader from '../component/Loader';

const Deletepost = ({ postId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false)
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  const removePost = async () => {
    setIsLoading(true)
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate('/');
        }
      }
      setIsLoading(false)
    } catch (error) {
      console.log('gak bisa hapus');
    }
  };

  if(isLoading) {
    return <Loader/>
  }

  return (
    <button className='btn sm danger' onClick={removePost}><Trash2 /></button>
  );
};


export default Deletepost;
