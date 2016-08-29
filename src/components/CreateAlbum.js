import React , {Component} from 'react';
import AlbumActions from '../actions/AlbumActions'
import {browserHistory} from 'react-router'


export default class CreateAlbum extends Component {

   constructor() {
    super();
    this.state ={
      name:''
    }
    this.submitAlbum=this.submitAlbum.bind(this);
  }


  submitAlbum(e){
   console.log('hi dude');
    e.preventDefault();
    console.log("click me")
    let album = {
      name:this.state.name
    }
    console.log(album);
    
   AlbumActions.createAlbums(album);
    this.setState({'album' : ''});
   browserHistory.push('/ViewAlbums');
  }
  render() {
    let {album} = this.state;

    return (
      <div>
       <form className ="formStyle" onSubmit={this.submitAlbum} >
        <div className="container form-group">
            <input type="text" value = {this.state.name} placeholder ="Enter Album Name" className="form-control input-lg input1"
              onChange={e=>this.setState({name:e.target.value})}/>
          </div>


          <div  className="container form-group text-center">
            <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>

        </form>
 
      </div>
    )
  }
}
