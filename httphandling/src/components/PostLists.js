import axios from 'axios'

import React, { Component } from 'react'

class PostLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postData : []
      }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {this.setState({
                postData: response.data
            })
        }
        ).catch( error => {
            console.log(error)
        })
    }
  render() {
    const {postData} = this.state
    return (
        
      <div>
        <div> </div>
        hello World {
            postData.length ? 
            postData.map(post => <div key = {post.id}>{post.title}</div>) : null
        }  
      </div>
    )
  }
}

export default PostLists
