import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='container-fluid py-3 bg-light'>
          <nav className="container d-flex justify-content-between">
              <Link to='/'><h1>Gestion de notes</h1></Link>
              <ul className='d-flex align-items-center my-auto'>
                  <li><Link to='/'>Notes</Link></li>
                  <li><Link to='/create'>Ajouter une note</Link></li>
              </ul>
          </nav>
    </header>
  )
}

export default Navbar