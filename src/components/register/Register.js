import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../utilis/Firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {

  const [err, setErr] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{

    const res = await createUserWithEmailAndPassword(auth, email, password)

    

const storageRef = ref(storage, displayName);


const uploadTask = await uploadBytesResumable(storageRef, file);

// Register three observers:

uploadTask.on(
  (error) => {
    setErr(true)
  },               
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

      await setDoc(doc(db, 'users', res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL:downloadURL
      })

      
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      })

    });
  }
);


    }catch(err){
      setErr(true)
    }

  }

  return (


    <div>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mx Fleeting</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Display Name'/>
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display:'none'}} type='file' id='file' />
                    <label htmlFor='file'>
                      upload image
                    </label>
                    <button>sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You already have an account? Login</p>
            </div>
        </div>
    </div>
  )
}

export default Register