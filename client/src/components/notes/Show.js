import React from 'react'
import {Link}  from 'react-router-dom'
import axios from 'axios'


class NotesShow extends React.Component {
    constructor(){
        super()
        this.state = {
            note:{}
        }
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3015/notes/${id}`)
        .then(response=>{
            const note = response.data
            console.log(note)
          
            //Object.assign(note,{img :base64Flag + imageStr})
            this.setState({note})
        })
    }
    render(){
        return(
            <div>
                <h3>TITLE:{this.state.note.title}</h3>
                <p>BODY:{this.state.note.description}</p>
                <p>Category:{this.state.note.category && this.state.note.category.name}</p>
                <Link to = {`/notes/edit/${this.props.match.params.id}`}>Edit Note</Link>
            </div>
            
        )
    }
}
export default NotesShow