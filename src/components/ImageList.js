import React , {Component} from 'react'
import ImageActions from '../actions/ImageActions'
import { browserHistory } from 'react-router'


export default class ImageList extends Component {
  constructor(){
    super();
    this.deleteImage=this.deleteImage.bind(this);

  }

  deleteImage(e){
   console.log('deleteme:', e.target.id);
   ImageActions.deleteImage(e.target.id)
  }

  addToAlbum(e){
    console.log('addOwner',e.target.id);
    //browserHistory.push({pathname:'/ViewPerson', query:{petid:e.target.id}});
  }


render(){
  console.log("Inside Image List");
  let {_id,imageurl, timestamp,albumkey}=this.props;
  if(albumkey) {
    return (
      <tr key={_id}>
        <td><img src={imageurl} width="200 px"  alt = "No Image"/></td>
        <td>{timestamp}</td>
            <td><button id = {_id} onClick={this.deleteImage} className ="btn btn-danger">Delete</button>
            <button id = {_id} onClick={this.addToAlbum} className ="btn btn-success">AddToAlbum</button>
        </td>
      </tr>
    )
  }
  else {
      return (
      <tr key={_id}>
        <td><img src={imageurl} width="200 px" alt = "No Image"/></td>
        <td>{timestamp}</td>
        <td><button id = {_id} onClick={this.deleteImage} className ="btn btn-danger">Delete</button>
            <button id = {_id} onClick={this.addToAlbum}className ="btn btn-success">AddToAlbum</button>
        </td>
      </tr>
      )
  }
}



}