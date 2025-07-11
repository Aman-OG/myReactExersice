import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {

    return (
        this.state.isLoggedIn ? (
        <div>welcome vishwas</div>):

        (<div>welcome Guest</div>)
    )

    // let message
    // if (this.state.isLoggedIn){
    //     message =  <div>
    //                     welcom aman
    //                 </div>
    // }

    // else {
    //     message=   <div>
    //                  welcom Guest
    //              </div>
    // }

    // return <div> {message}</div>

    // if (this.state.isLoggedIn){
    //     return (
    //         <div>
    //             welcom aman
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             welcome Guest
    //         </div>
    //     )
    // }


    // return (
    //     <div>
    //         <div>
    //             welcom aman
    //         </div>

    //         <div>
    //             welcome Guest
    //         </div>
    //     </div>

    // )
  }
}

export default UserGreeting
