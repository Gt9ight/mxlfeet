import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Mx Fleeting</span>
                <span className='title'>Login</span>
                <form>
                    
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>

                    <button>sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    </div>
  )
}

export default Login