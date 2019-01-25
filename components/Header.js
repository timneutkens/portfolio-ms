import React from 'react'
import style from '../styles/style.scss'
import Link from 'next/link'

const Header = () => (
  <header className="container">
    <style dangerouslySetInnerHTML={{ __html: style }} />
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            MichaelSornoza
          </a>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            Home
          </a>
          <Link href="/about" prefetch>
            <a className="navbar-item">
              About
            </a>
          </Link>
          <Link href="#">
            <a className="navbar-item">
              Contact
            </a>
          </Link>
        </div>  
      </div>
    </nav>
  </header>
)

export default Header