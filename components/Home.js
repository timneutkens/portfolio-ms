import React, { Component } from 'react'
import style from '../styles/style.scss'
class Home extends Component {
  
  render () {
  
    return (
      <section className="hero">
      <style dangerouslySetInnerHTML={{ __html: style }} />
        <div className="hero-body">
          <div className="container">
            <figure className="image">
              <img src="https://scontent.fgye3-1.fna.fbcdn.net/v/t1.0-9/51029392_2121719114548239_6795471245409255424_n.jpg?_nc_cat=107&_nc_ht=scontent.fgye3-1.fna&oh=837c025c808e411a7fb44412f1991b2a&oe=5CFD1159" alt="image-portfolio" className="is-rounded"/>
            </figure>
          </div>
          <div className="container has-text-centered">
            <h1 className="title">
              Michael Orlando Sornoza Palma
            </h1>
            <h2 className="subtitle">
              Estudiante universitario y Frontend Developer
            </h2>
          </div>
        </div>
        <style jsx>{`
          .image {
            width: 320px;
            margin-left: 37%;
          }
        `}</style>
      </section>
    )
  }
}

export default Home