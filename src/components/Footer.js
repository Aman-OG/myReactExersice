import React from 'react'
import './style.css'

const Footer = ({length}) => {

    const today = new Date();
  return (
    <footer>
        <p> {length} List {length === 1? "Item" : "Items"}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Copyright &copy; {today.getFullYear()} </p>
    </footer>
  )
}

export default Footer
