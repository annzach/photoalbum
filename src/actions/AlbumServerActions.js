import AppDispatcher from '../AppDispatcher'

const AlbumServerActions = {
  receiveAlbums(albums){
    console.log("Inside AlbumServerActions" ,albums)
    AppDispatcher.dispatch({
      type:'RECEIVE_ALBUMS',
      albums
    })
  },

  createAlbum(album){
    console.log("Inside Image Server action")
    AppDispatcher.dispatch({
      type:'CREATE_ALBUM',
      album
    })
  },
   deleteImage(data){
  AppDispatcher.dispatch({
    type:'DELETE_ALBUM',
    data
  })
 },

}
export default AlbumServerActions;