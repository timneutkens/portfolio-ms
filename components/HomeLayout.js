import React from 'react'
import Header from './Header'

const HomeLayout = (props) => (
  <div>
    <Header />
    { props.children }
  </div>
)
export default HomeLayout