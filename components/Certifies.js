import React from 'react'
import Certificate from './Certificate'
const Certifies = ({ certifies }) => (
  <div className="container">
    <h1 className="title">Certificados - Cursos</h1>
    <div className="columns is-multiline">
    {
      certifies.map(cert => (
        <Certificate 
          title= { cert.title }
          imgUrl= { cert.imgUrl }
          description= { cert.description }
          key={ cert.id }
        />
      ))
    }
    </div>
      <style jsx>{`
        .container {
          padding: 30px;
          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        }
      `}</style>
    </div>
)

export default Certifies