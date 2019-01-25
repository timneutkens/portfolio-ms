import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout'
import Home from '../components/Home'
import data from '../apis/api.json'
import Certifies from '../components/Certifies'
import Projects from '../components/Projects'
class Index extends Component {

  render () {
    return (
      <HomeLayout>
        <Home/>
        <Projects projects={ data.projects }/>
        <Certifies certifies={ data.certifies } />
      </HomeLayout>
    )
  }
}

export default Index;

