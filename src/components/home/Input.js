import React from 'react'
import IMG from '../images/img.png'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='type a fleet up' />
      <div className='send'>
        <input type='file' style={{display:'none'}} id='file' />
        <label htmlFor='file'>
          <img src={IMG}/>
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input