import React, { Component } from 'react'
import AlbumStore from '../stores/AlbumStore'
import AlbumActions from '../actions/AlbumActions'
import AlbumList from './AlbumList'


export default class ViewAlbums extends Component{

  constructor(){
    super();
    this.state = {
      albums:AlbumStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

 componentDidMount(){
    AlbumActions.getAllAlbums();
    AlbumStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    AlbumStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      albums: AlbumStore.getAll()
    });
  }


  render(){
const albumLists = this.state.albums.map(album =>{
      return (
        <AlbumList key = {album._id} {...album}/>
        )
    })
    return(
    <table className="table">
      <thead>
        <tr>
          <th><h5><b>Album Name</b></h5></th>
          <th><h5><b>Make Changes</b></h5></th>
        </tr>
      </thead>
      <tbody>
       {albumLists}
      </tbody>
      </table>
    )
  }
}