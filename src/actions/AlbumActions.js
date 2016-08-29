import API from '../API';

const AlbumActions = {
 getAllAlbums:API.getAllAlbums,

 createAlbums(album){
  console.log("Inside LA create Albums")
  API.createAlbums(album);
 },



 deleteAlbum(id){
  API.deleteAlbum(id);
  API.getAllAlbums();
 }

}

export default AlbumActions;