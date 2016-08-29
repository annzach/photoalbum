import AppDispatcher from '../AppDispatcher'

const ImageServerActions = {
  receiveBooks(books){
    AppDispatcher.dispatch({
      type:'RECEIVE_BOOKS',
      books
    })
  },

  createImage(image){
    console.log("Inside Image Server action")
    AppDispatcher.dispatch({
      type:'CREATE_IMAGE',
      image
    })
  }

}
export default ImageServerActions;