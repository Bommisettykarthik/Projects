import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
        <div className='left'>
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Childern</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='search...'></input>
        </div>
        <div className="right">
          <div className="signin">
            Sign/Signup
          </div>
          <div className="cart">
            Cart
          </div>
        </div>
    </div>
  )
}

export default Header