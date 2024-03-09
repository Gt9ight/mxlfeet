import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Fleet Manager</span>
      <div className='user'>
        <img src='https://media.wired.com/photos/5cf5ab3ee2e491e5ae8ae0a9/master/pass/WI070119_FF_Lionking_01.jpg' alt='' />
        <span>Mariano</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar