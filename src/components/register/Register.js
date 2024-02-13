import React from 'react'

const Register = () => {
  return (
    <div>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mx Fleeting</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Display Name'/>
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input type='file' />
                    <button>sign up</button>
                </form>
                <p>Yoou already have an account? Login</p>
            </div>
        </div>
    </div>
  )
}

export default Register