import React from 'react'

// function Greet(){
//     return <h1>Hello AMAN</h1>
// }

const Greet = (props) =>{ 
    console.log(props)
    return (
    <div> <h1>Hellllooo {props.name} a.k.a {props.heroName} </h1>
    {props.children}
    </div>
    )
}

export default Greet