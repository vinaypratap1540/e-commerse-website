import React from 'react'
import "./login.scss"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,GithubAuthProvider } from "firebase/auth";
import { toast,ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../redux/shopSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) =>{
     e.preventDefault();
     signInWithPopup(auth,provider).then((result)=>{
      const user = result.user;
      dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }));
      setTimeout(()=>{
       navigate("/")
      },1500)
     }).catch((error) =>{
      console.log(error)
     })
  }
  const handleSignOut = () =>{
    signOut(auth)
    .then(() =>{
      toast.success("Log Out SuccessFully!");
      dispatch(removeUser());
    })
    .catch((error) =>{
      console.log(error)
    });
  }
  const handleGithubLogin = (e) =>{
     e.preventDefault();
     signInWithPopup(auth,provider).then((result)=>{
      const user = result.user;
      dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }));
      setTimeout(()=>{
       navigate("/")
      },1500)
     }).catch((error) =>{
      console.log(error)
     })
  }
  return (
    <div className='login'>
      <div onClick={handleGoogleLogin} className='google'>
      <img src="/img/google.png" alt="" />
      <p>Sign in with Google</p>
      </div>
      <div onClick={handleGithubLogin} className='github'>
      <img src="/img/github.png" alt="" />
      <p>Sign in with Github</p>
      </div>
      <div className="signout">
      <button onClick={handleSignOut}>Sign out For Google</button>
      <button onClick={handleSignOut}>Sign out For Github</button>
      </div>
      <ToastContainer
      position='top-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
    </div>
  )
}

export default Login
