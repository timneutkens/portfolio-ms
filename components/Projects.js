import React from 'react'
import Project from './Project'

const Projects = ({ projects }) => (
  <div className="container">
    <h1 className="title">Proyectos</h1>
    <div className="columns is-multiline">
    {
      projects.map(proj => (
        <Project 
          title= { proj.title }
          imgUrl= { proj.imgUrl }
          link= { proj.link }
          repository= { proj.repository }
          description= { proj.description }
          key={ proj.id }
        />
      ))
    }
    </div>
      <style jsx>{`
        .container {
          padding: 30px;
          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
          margin-bottom: 20px;
        }
      `}</style>
    </div>
)

export default Projects