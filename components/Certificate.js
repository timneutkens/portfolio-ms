import React from 'react'
import style from '../styles/style.scss'

const Certificate = ({ title, imgUrl, description }) => (
  
  <div className="column is-one-quarter">
    <style dangerouslySetInnerHTML={{ __html: style }} />
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={ imgUrl } alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={ imgUrl } alt="Placeholder image"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{ title }</p>
            <p className="subtitle is-6">@MichaelSornoza</p>
          </div>
        </div>
        <div className="content">
          { description }
        </div>
      </div>
    </div>
  </div>
)

export default Certificate