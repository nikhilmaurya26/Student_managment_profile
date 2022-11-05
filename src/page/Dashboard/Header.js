import React from 'react'
// import Dashboard from './index'

function Header({setIsAdding}) {
  return (
    <header>
      <h1> Student ERP Managment
      </h1>
      <div>
        <button onClick={()=>setIsAdding(true)}
        className="round-button">Add button</button>
      </div>
    </header>
  )
}

export default Header
