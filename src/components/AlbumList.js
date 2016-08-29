import React , {Component} from 'react'
import AlbumActions from '../actions/AlbumActions'
import { browserHistory } from 'react-router'


export default class AlbumList extends Component {
  constructor(){
    super();
    this.deleteAlbum=this.deleteAlbum.bind(this);

  }

  deleteAlbum(e){
   console.log('deleteme:', e.target.id);
   AlbumActions.deleteAlbum(e.target.id)
  }

  addToAlbum(e){
    console.log('addOwner',e.target.id);
    //browserHistory.push({pathname:'/ViewPerson', query:{petid:e.target.id}});
  }


render(){
  console.log("Inside Album List");
  let {_id,name}=this.props;
  
      return (
      <tr key={_id}>
        
        <td>{name}</td>
        <td><button id = {_id} onClick={this.deleteAlbum} className ="btn btn-danger">Delete</button>
            <button id = {_id} onClick={this.addToAlbum}className ="btn btn-success">Choose</button>
        </td>
      </tr>
      )
  }




}