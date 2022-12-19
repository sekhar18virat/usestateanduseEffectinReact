import React, { Component } from 'react'

import axios from 'axios'
 class SendingtoApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         email : '',
         skills : ''
      }
    }
    changeHandler = (e) =>{
        this.setState({
            
            [e.target.name] : e.target.value
        })
        // console.log("name : " + e.target.name)
    }    
    submitRequestHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then( response => {
            console.log(response.data)
        }).catch( (error) => {
            console.log(error)
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitRequestHandler}>
            <div>
                <input type = "text" name = "userName" value = {this.userName} onChange = {this.changeHandler}></input>
                </div> 
                <div>
                <input type = "text" value = {this.email} onChange = {this.changeHandler}></input>
                </div>
                <div>
                <input type = "text" value = {this.skills} onChange = {this.changeHandler}></input>
                </div>   
            <button type='submit'>Submit</button>
        </form>   
      </div>
    )
  }
}

export default SendingtoApi
